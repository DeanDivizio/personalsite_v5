import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Card } from "./ui/card";
import Link from "next/link";
import { Cinzel_Decorative } from "next/font/google";

const ovrtoneFont = Cinzel_Decorative({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
  })

export default function ReferenceLetterCard({ name, link, image, subtitle, initials, isAlex }) {

    return (
        <Link href={link} className="mb-4">
            <Card className="grid grid-cols-4 p-6 hover:scale-[102%] transition-all duration-300 bg-gradient-to-br from-neutral-800 to-neutral-950 border-black rounded-lg">
                <div className="col-span-1 content-center">
                    <Avatar className="w-16 h-16 md:w-24 md:h-24 shadow-lg">
                        <AvatarImage src={image} />
                        <AvatarFallback className="text-xl text-white bg-gradient-to-br from-blue-light to-black">{initials}</AvatarFallback>
                    </Avatar>
                </div>
                <div className="col-span-3 pl-6 flex flex-col justify-center">
                <h3 className="text-xl 2xl:text-2xl font-medium text-white">{name}</h3>
                {isAlex ? <p className="text-offWhite font-light 2xl:font-normal">{`Co-Founder of `}<span className={ovrtoneFont.className} style={{color: "#00FF5D"}}>OVRTONE</span>{` Media Group`}</p>: <p className="text-offWhite font-light 2xl:font-normal">{subtitle}</p> }
                </div>
            </Card>
        </Link>
    )
}