"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function TransLink({ children, href, setNavLocation, setIsTransitioning, ...props }) {
  const router = useRouter();
  const url = usePathname();

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleTransition = async (e) => {
    e.preventDefault();
    const homeHeading = document.querySelector("#homeHeading");

    if (url === "/") {
      homeHeading?.classList.add("fadeOutFast");
    }

    const content = document.querySelector(".pageBodyContainer");
    
    // only fade out if navigating to new page
    if (url !== href) {
      setIsTransitioning(true);
      content?.classList.add("fadeOutFast");
      await sleep(230);
      
      if (url === "/") {
        setNavLocation("top");
      }
      
      router.push(href);
      
      // Add a small delay before setting isTransitioning back to false
      await sleep(50);
      setIsTransitioning(false);
    }
  }

  return (
    <Link onClick={handleTransition} href={href} {...props}>{children}</Link>
  )
}

