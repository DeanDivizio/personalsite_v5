"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { TransLink } from "../lib/translink";
import { usePathname } from "next/navigation";

const buttonClass = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-neutral-100 hover:bg-transparent lg:hover:text-accent-foreground h-9 px-4 py-2 text-neutral-100 lg:hover:bg-blue-950 nav-button ";

export default function Navigation() {
  const path = usePathname();
  const [navLocation, setNavLocation] = useState("mid");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (path === "/") {
      setNavLocation("mid fadeDown");
    } else {
      setNavLocation("top");
    }
    setIsTransitioning(false);
  }, [path]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const buttons = document.querySelectorAll('.nav-button');
      buttons.forEach((button, index) => {
        setTimeout(() => {
          button.classList.add('animate');
        }, index * 350);
      });
    }
  }, [isLoaded]);

  return (
    <div
      id="nav"
      className={`absolute transition-all ${navLocation} ${isTransitioning ? 'opacity-0' : 'opacity-100'} duration-300 w-full flex flex-wrap justify-center pt-6 pb-4 gap-1 md:gap-4 z-50`}
    >
      {isLoaded && (
        <>
          <TransLink setNavLocation={setNavLocation} setIsTransitioning={setIsTransitioning} href="/software">
            <Button id="navSoftwareButton" variant="ghost" className={buttonClass}>
              Software
            </Button>
          </TransLink>
          <TransLink setNavLocation={setNavLocation} setIsTransitioning={setIsTransitioning} href="/media">
            <Button id="navMediaButton" variant="ghost" className={buttonClass}>
              Media
            </Button>
          </TransLink>
          <TransLink setNavLocation={setNavLocation} setIsTransitioning={setIsTransitioning} href="/blog">
            <Button id="navBlogButton" variant="ghost" className={buttonClass}>
              Blog
            </Button>
          </TransLink>
          <TransLink setNavLocation={setNavLocation} setIsTransitioning={setIsTransitioning} href="/references">
            <Button id="navReferencesButton" variant="ghost" className={buttonClass}>
              References
            </Button>
          </TransLink>
        </>
      )}
    </div>
  );
}

