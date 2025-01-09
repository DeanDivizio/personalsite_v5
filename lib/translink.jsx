"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


export function TransLink({ children, href, setNavLocation, ...props }) {

    const router = useRouter();
    const url = usePathname();
  
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
  
    const handleTransition = async (e) => {
      e.preventDefault();
      const nav = document.querySelector("#nav");
      const homeHeading = document.querySelector("#homeHeading");
  
      if (url === "/") {
        homeHeading?.classList.add("fadeOutFast");
      }
  
      const content = document.querySelector(".pageBodyContainer")
      
      // only fade out if navigating to new page
      if (url != href){
      content?.classList.add("fadeOutFast")
      await sleep(230);
      router.push(href);
      }
    }
    return (
      <Link onClick={handleTransition} href={href} {...props}>{children}</Link>
    )
  }