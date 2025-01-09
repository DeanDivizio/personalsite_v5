import SoftwareCarousel from "../../components/SoftwareCarousel";
import { Card, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import Link from "next/link";
import Footer from "../../components/Footer"

export default function SoftwarePage() {

    return (
        <main>
            <div className="pageBodyContainer w-full min-h-full flex flex-col-reverse xl:flex-row justify-center xl:justify-between items-center px-8 xl:px-32 pt-24 pb-12 md:pb-0">
                <div className="w-full xl:pt-28 3xl:pt-36 scrollContainer">
                    <div className="max-w-full xl:max-w-[66%] contentFade h-[75vh] overflow-y-scroll scrollContent">
                        <h2 className="text-2xl 2xl:text-4xl mb-4 font-medium">{`Building Things & Solving Problems`}</h2>
                        <p className="text-sm 2xl:text-lg mb-8 font-extralight tracking-wider">{" I've been enamored with technology since my grandpa gave me his old (beige) Windows 98 machine when I was 5. While I've dabbled in programing for most of my life, I really started taking it seriously when I realized just how"} <span className="italic">awesome</span> {"it is to solve real-world problems with software."}</p>
                        <h3 className="text-xl 2xl:text-2xl mb-4 font-regular">{`What I'm Building`}</h3>
                        <p className="text-sm 2xl:text-lg mb-4 font-extralight tracking-wider">My current project is Apexion Health. </p>
                        <p className="text-sm 2xl:text-lg mb-4 font-extralight tracking-wider">{`I wanted a single peice of software for tracking all aspects of my health and fitness; complete with great graphs and a modern UI. I couldn't find one I liked, so I decided to make one.`}</p>
                        <p className="text-sm 2xl:text-lg mb-8 font-extralight tracking-wider">{`Apexion is still in active development but `}you can <a className="underline text-green-400 hover:text-blue-500 transition-colors duration-300" target="_blank" href={`https://github.com/DeanDivizio/apexion-health`}>check out the code here</a>{` if you're interested.`}</p>
                        <h3 className="text-xl 2xl:text-2xl mb-4 font-regular">{`What I've Built`}</h3>
                        <p className="text-sm 2xl:text-lg mb-8 font-extralight tracking-wider">I've built a variety of projects, from marketing websites to headless e-commerce and Apexion. Most are <a className="underline text-green-400 hover:text-blue-500 transition-colors duration-300" target="_blank" href="https://github.com/DeanDivizio">available on my GitHub</a> but here are a few of my favorites.</p>
                        <div className="grid grid-cols-1 4xl:grid-cols-2 justify-start gap-8 flex-wrap mb-8 4xl:px-2">
                        <Link href={"https://booktracker.deandivizio.com"} className="hover:scale-[102%] transition-transform duration-500" target="_blank">
                                <Card className="">
                                    <CardHeader>
                                        <CardTitle>Book Tracker</CardTitle>
                                        <CardDescription>{`I wanted a streamlined/utilitarian way for keeping track of the books I want/have/read, so I built one. `}<span className="italic">{`Clicking this will take you to a read-only instance for demo purposes.`}</span></CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                            <Link href={"https://www.ovrtonemedia.com"} className="hover:scale-[102%] transition-transform duration-500" target="_blank">
                                <Card className="">
                                    <CardHeader>
                                        <CardTitle>OVRTONE Media Group</CardTitle>
                                        <CardDescription>{`The site for my media company, OVRTONE.`}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                           
                        </div>
                        <h3 className="lg:text-xl 2xl:text-2xl mb-4 font-regular">{`What I Use`}</h3>
                        <p className="text-sm 2xl:text-lg mb-4 font-extralight tracking-wider">{`I absolutely love learning new things. To that end, here are some of the tools I've familiarized myself with over the years.`}</p>
                        <SoftwareCarousel />
                    </div>
                </div>
                <h1 className="text-5xl mb-12 2xl:mb-0 text-right font-extralight"><span className="text-transparent titleFade bg-clip-text">Software</span></h1>
            </div>
            <Footer />
        </main>
    )
}