"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "../contexts/TransitionContext";

export function TransLink({ children, href, setNavLocation, ...props }) {
  const router = useRouter();
  const url = usePathname();
  const { isTransitioning, setIsTransitioning } = useTransition();

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
    
    // Check if we're navigating to a new page, including dynamic routes
    if (url !== href || url.startsWith('/blog/')) {
      setIsTransitioning(true);
      content?.classList.add("fadeOutFast");
      await sleep(230);
      
      if (url === "/") {
        setNavLocation?.("top");
      }
      
      // Use router.push with shallow: false to ensure full navigation for dynamic routes
      await router.push(href, undefined, { shallow: false });
      
      // Add a small delay before setting isTransitioning back to false
      await sleep(50);
      setIsTransitioning(false);
    }
  }

  return (
    <Link onClick={handleTransition} href={href} {...props}>{children}</Link>
  )
}

