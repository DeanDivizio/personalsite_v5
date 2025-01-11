"use client";

import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Footer() {
    const path = usePathname();
    let position;
    if (path != "/") {
        position = "relative"
    } else {
        position = "hidden"
    }
    return (
        <footer className={`${position} pb-4 pr-4 h-auto flex justify-end opacity-65`}>
            <div className="flex gap-6">
                <Link href="https://github.com/DeanDivizio" className="hover:scale-110 transisiton duration-300"><DiGithubBadge size={16} /></Link>
                <Link href={"https://www.linkedin.com/in/dean-divizio-067440b8/"} className="hover:scale-110 transisiton duration-300"><FaLinkedin size={16} /></Link>
                <Link href={"https://x.com/DeanDivizio"} className="hover:scale-110 transisiton duration-300"><FaXTwitter size={16} /></Link>
            </div>
        </footer>
    )
}