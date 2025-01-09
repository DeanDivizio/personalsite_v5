import { Cinzel_Decorative } from "next/font/google";

const ovrtoneFont = Cinzel_Decorative({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
  })

export default function AlexReference() {
    return (
        <main className="pageBodyContainer">
            <div id="bio" className="contentFade w-screen flex flex-row justify-center items-start bg-black bg-opacity-65" >
                <div className="flex flex-col">
                    <div className="py-64 px-8 text-center flex flex-col justify-center h-[90vh]">
                        <h1 className="text-6xl sm:text-8xl mb-6 font-semibold w-full"><span className="text-transparent bg-clip-text titleFade text-center">{`Alex Melelli`}</span></h1>
                        <h4 className="text-xl sm:text-2xl font-extralight mb-16 text-white contentFade">{`Co-Founder of `}<span className={ovrtoneFont.className} style={{color: '#00FF5D'}}>OVRTONE</span>{` and close personal friend`}</h4>
                    </div>
                    <div className="pb-16 h-[10vh]" >
                        <p className="text-sm italic text-white text-center px-12">{`Below is the content of Alex's letter. You can `}<a href="https://api.deandivizio.com/wp-content/uploads/2024/11/DeanDivzio_RecLetter_fromAlexMelelli.pdf" target="_blank" className="underline text-blue">view/download the signed PDF here.</a></p>
                    </div>
                    <div className="px-12 py-8">
                        <p className="text-white text-xl font-extralight tracking-wider leading-relaxed mb-6">{`To Whom It May Concern,`}</p>
                        <p className="text-white text-xl font-extralight tracking-wide leading-relaxed mb-6">{`My name is Alex Melelli, and I am Dean Divizio’s business partner and, proudly, one of his
                            closest friends. We met as students at Western Michigan University and have collaborated
                            on numerous professional projects over the years, continuing to do so today.
                            Dean has taught me so much over the years about various aspects of multimedia,
                            including photography, video production, editing techniques, music production, and more.
                            He is one of the smartest people I know, and when he becomes invested in something he
                            loves, there is truly no stopping him.`}</p>
                        <p className="text-white text-xl font-extralight tracking-wide leading-relaxed mb-6">{`Dean also possesses exceptional leadership qualities. As the CEO of our company, he is
                            always thinking ahead and has a clear vision for the future. Whether managing day-to-day
                            business tasks or leading on set during a video shoot, wedding, or other event, I know I can
                            always trust him to lead the way and provide direction. Through countless media projects,
                            I’ve learned that these kinds of endeavors often require quick thinking, sound decision-making, and calm leadership at the top. Dean excels in all these areas.`}</p>
                        <p className="text-white text-xl font-extralight tracking-wide leading-relaxed mb-6">{`Dean’s communication skills are equally impressive. He is thorough in all his interactions,
                            ensuring that both clients and team members have a clear understanding of each project’s
                            scope and objectives. His attention to detail and ability to articulate his plans make
                            complex projects much more manageable and allow everyone involved to work with
                            confidence and direction. His dedication to clarity in communication has proven
                            invaluable in both small meetings and larger productions.`}</p>
                        <p className="text-white text-xl font-extralight tracking-wide leading-relaxed mb-6">{`
                            In addition to his leadership, Dean has a natural ability to connect with clients and guests,
                            even during large events. He is friendly, approachable, and always brings a sense of humor
                            that helps lighten the mood and make everyone feel at ease.`}</p>
                        <p className="text-white text-xl font-extralight tracking-wide leading-relaxed mb-12">{`If you are looking for a new team member, I highly recommend Dean Divizio. He is highly
                            motivated, and his positive impact is felt wherever he goes.`}</p>
                        <p className="text-white text-xl font-extralight tracking-wide leading-relaxed mb-6">{`Best Regards,`}</p>
                        <p className="text-white text-xl font-extralight tracking-wide leading-relaxed mb-0">{`Alex Melelli`}</p>
                        <p className="text-white text-xl font-extralight tracking-wide leading-relaxed mb-0">{`Chief Operations Officer`}</p>
                        <p className="text-white text-xl font-extralight tracking-wide leading-loose mb-0"><span className={ovrtoneFont.className} style={{color: '#00FF5D'}}>OVRTONE</span><span className={ovrtoneFont.className}>{` Media Group`}</span></p>
                    </div>
                    {/* <ParticleBG /> */}
                </div>
            </div>
        </main>
    );
}
