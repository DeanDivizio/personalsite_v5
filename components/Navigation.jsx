"use client";
import { useRef, useState, useEffect } from "react";
import { Button } from "./ui/button" 

import { TransLink } from "../lib/translink";
import { usePathname } from "next/navigation";

const buttonClass = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-9 px-4 py-2 text-neutral-100 hover:bg-blue-950 fadeUp"

export default function Navigation() { 
    const path = usePathname();
    const [navLocation, setNavLocation] = useState("mid");
    useEffect(()=>{
        if (path === "/"){
            setNavLocation("mid fadeDown");
        } else {setNavLocation("top")}
    },[path])

    useEffect(()=>{
        setTimeout(()=>{
            const softwareButton = document.getElementById("navSoftwareButton")
            softwareButton.className = buttonClass
            const MediaButton = document.getElementById("navMediaButton")
            MediaButton.className = buttonClass
            const BlogButton = document.getElementById("navBlogButton")
            BlogButton.className = buttonClass
            const ReferencesButton = document.getElementById("navReferencesButton")
            ReferencesButton.className = buttonClass
        }, 4000)
    },[])

return (
    <div id="nav" className={`absolute transition-all ${navLocation} duration-2000 w-full flex flex-wrap justify-center pt-6 pb-4 gap-1 md:gap-4 z-50`}>
        <TransLink setNavLocation={setNavLocation} href={"/software"} ><Button id="navSoftwareButton" variant={"ghost"} className={`text-neutral-100 hover:bg-blue-950 fadeUp duration-1000 delay-2200`}>Software</Button></TransLink>
        <TransLink setNavLocation={setNavLocation} href={"/media"}><Button id="navMediaButton" variant={"ghost"} className={`text-neutral-100 hover:bg-blue-950 fadeUp duration-1000 delay-2600`}>Media</Button></TransLink>
        <TransLink setNavLocation={setNavLocation} href={"/blog"}><Button id="navBlogButton" variant={"ghost"} className={`text-neutral-100 hover:bg-blue-950 fadeUp duration-1000 delay-2800`}>Blog</Button></TransLink>
        <TransLink setNavLocation={setNavLocation} href={"/references"}><Button id="navReferencesButton" variant={"ghost"} className={`text-neutral-100 hover:bg-blue-950 fadeUp duration-1000 delay-3000`}>References</Button></TransLink>
    </div>
)

} 