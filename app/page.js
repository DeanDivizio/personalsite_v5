import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <div id="homeHeading" className="w-full h-full flex flex-col justify-center items-center">
      <div className="absolute top-[42%] lg:top-[47%] flex flex-col justify-center z-10">
        <h1 className="text-5xl mb-6 text-center font-extralight">
          <span className="animated-text mr-3 inline-block">{`Hi, `}</span>
          <span className="animated-text mr-3 inline-block">{`I'm `}</span>
          <span className="animated-text inline-block text-transparent bg-gradient-to-br from-white to-green-500 bg-clip-text">Dean</span>
        </h1>
      </div>
      <div className="absolute top-[58%] flex gap-6 animated-text z-10 opacity-85" style={{ animationDelay: '3.2s' }}>
        <Link href="https://github.com/DeanDivizio" className="hover:scale-110 transition duration-300"><DiGithubBadge size={24} /></Link>
        <Link href="https://www.linkedin.com/in/dean-divizio-067440b8/" className="hover:scale-110 transition duration-300"><FaLinkedin size={24} /></Link>
        <Link href="https://x.com/DeanDivizio" className="hover:scale-110 transition duration-300"><FaXTwitter size={24} /></Link>
      </div>
    </div>
  );
}

