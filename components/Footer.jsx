import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
export default function Footer() {

    return (
        <footer className="fixed bottom-6 right-5 h-auto flex justify-center opacity-65">
            <div className="flex gap-6">
                <Link href="https://github.com/DeanDivizio" className="hover:scale-110 transisiton duration-300"><DiGithubBadge size={16} /></Link>
                <Link href={"https://www.linkedin.com/in/dean-divizio-067440b8/"} className="hover:scale-110 transisiton duration-300"><FaLinkedin size={16} /></Link>
                <Link href={"https://x.com/DeanDivizio"} className="hover:scale-110 transisiton duration-300"><FaXTwitter size={16} /></Link>
            </div>
        </footer>
    )
}