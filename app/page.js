import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <div id="homeHeading" className="w-full h-full flex flex-col justify-center items-center">
      <div className="absolute top-[47%] flex flex-col justify-center">
        <h1 className="text-5xl mb-6 text-center font-extralight"><span className="fadeUp duration-1500">{`Hi, `}</span><span className="fadeUp delay-700 duration-1500">{`I'm `}</span> <span className="text-transparent bg-gradient-to-br from-white to-green-500 bg-clip-text zoomIn"><span className="fadeUp delay-1000 duration-1500">Dean</span></span></h1>
      </div>
      <div className="absolute top-[60%] flex gap-6 fadeUp delay-3000 duration-1500">
        <Link href="https://github.com/DeanDivizio" className="hover:scale-110 transisiton duration-300"><DiGithubBadge size={24} /></Link>
        <Link href={"https://www.linkedin.com/in/dean-divizio-067440b8/"} className="hover:scale-110 transisiton duration-300"><FaLinkedin size={24} /></Link>
        <Link href={"https://x.com/DeanDivizio"} className="hover:scale-110 transisiton duration-300"><FaXTwitter size={24} /></Link>
      </div>
    </div>
  );
}
