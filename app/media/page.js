import ImageCarousel from "../../components/ImageCarousel"
import VideoReel from "../../components/VideoReel"

export default function MediaPage() {

    return (
        <main>
            <div className="pageBodyContainer w-full min-h-full md:h-full flex flex-col justify-start items-center px-4 md:px-12 4xl:px-32 pt-36">
                <div className="w-full grid grid-cols-1 lg:grid-cols-3">
                    <VideoReel />
                    <div className="h-full flex flex-col justify-center order-1 lg:order-2">
                        <h1 className="text-5xl mb-8 xl:mb-0 text-center lg:text-right font-extralight"><span className="text-transparent titleFade bg-clip-text">Media</span></h1>
                    </div>
                </div>
                <div className="w-full pt-16 flex flex-col contentFade">
                    <h2 className="text-3xl 2xl:text-4xl mb-4 font-medium">{`Where I Started`}</h2>
                    <p className="lg:text-lg mb-2 xl:mb-2 2xl:mb-2 font-light tracking-wider">{"I've always loved the creative arts. Music, photography, and video production gave me my first experiences of marrying my creative/maker side with my passion for technology."}</p>
                    {/* <p className="lg:text-lg mb-8 xl:mb-12 font-light tracking-wider">{"Even though software engineering is my main thing right now, I still do my best to make time for media production - whether on my own time or through my company, "}<a className="underline text-green-500 hover:text-blue-500 transition-colors duration-300" href="https://www.ovrtonemedia.com">OVRTONE</a>.</p> */}
                </div>
                <ImageCarousel />
            </div>
        </main>
    )
}