"use client";
import { useState, useEffect } from "react";
import { Skeleton } from "./ui/skeleton";

export default function VideoReel() {

    //I'm not sure how to track the loading of the iframe so just delaying the render by 1200ms seems to hide the loading and fit with the animation
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 1200)
    },[])

    if (loading) return (
        <Skeleton className="col-span-2 order-2 lg:order-1 w-full h-[22vh] md:h-[30vh] lg:h-[55vh] 2xl:h-[40vh] 3xl:h-[45vh] 4xl:h-[50vh] 5xl:h-[65vh] rounded-xl" />
    ) 
    return (
    <iframe className="col-span-2 order-2 lg:order-1 w-full h-[22vh] md:h-[30vh] lg:h-[55vh] 2xl:h-[40vh] 3xl:h-[45vh] 4xl:h-[50vh] 5xl:h-[65vh] rounded-xl"
        src="https://www.youtube.com/embed/qfta1fxUI7Q?si=iCKkEaUoYEOXeUW4?vq=1080"
        title="My Reel | Spring 2024"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
    </iframe>
    )
}