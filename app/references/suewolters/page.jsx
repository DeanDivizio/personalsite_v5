export default function SueReference() {
    return (
        <main className="pageBodyContainer">
            <div id="bio" className="contentFade w-screen flex flex-row justify-center items-start bg-black bg-opacity-65">
                <div className="h-full backdrop-blur-sm flex flex-col">
                    <div className="py-64 px-8 text-center flex flex-col justify-center h-[80vh] lg:h-[90vh]">
                        <h1 className="text-6xl sm:text-8xl mb-6 font-semibold w-full"><span className="text-transparent bg-clip-text titleFade text-center">{`Sue Wolters`}</span></h1>
                        <h4 className="text-xl sm:text-2xl font-extralight mb-16 text-white contentFade">{`Supervising Manager at Einstein's Bagels`}</h4>
                    </div>
                    <div className="pb-16 contentFade h-[10vh]">
                        <p className="text-sm italic text-white text-center px-12">{`Below is the content of Sue's letter. You can `}<a href="https://api.deandivizio.com/wp-content/uploads/2024/11/DeanDivizio_RecLetter_fromSueWolters.pdf" target="_blank" className="underline text-blue">view/download the signed PDF here.</a></p>
                    </div>
                    <div className="px-12 py-8">
                        <p className="text-white text-xl font-extralight tracking-wider leading-relaxed mb-6">{`To Whom It May Concern,`}</p>
                        <p className="text-white text-xl font-extralight tracking-wide leading-relaxed mb-6">{`My name is Sue Wolters and I'm Dean's manager at Einstein's Bagels. Dean is a truly wonderful person and an asset to my team. He came recommended by one of my bosses and has been nothing short of a great fit. He is punctual, resourceful, and detail oriented, to say the least.`}</p>
                        <p className="text-white text-xl font-extralight tracking-wide leading-relaxed mb-6">{`Dean is always on time - or early, which is a great start (especially considering he starts at six in the morning). Once he's here, he never fails to face the day with a solution-oriented and positive attitude.
                                We get thrown our fair share of curve balls from week to week and Dean is always there to face the challenges head on and come up with creative and effective solutions. He takes his work seriously.
                                Whether he's helping with inventory logistics or just frosting cinnamon rolls, I can always trust he'll go above and beyond to really nail whatever he's set on at the moment.`}</p>
                        <p className="text-white text-xl font-extralight tracking-wide leading-relaxed mb-6">{`He's a good team player and very bright. By his second week here, he was reconciling inventory and fulfilling other corporate requirements on my behalf, per his initiative - not my request. He works well with the rest of the team and is never afraid or hesitant to stop what he's doing and help somewhere else when needed. Between helping to teach other employees, flipping between front of house and back of house as needed, and even filling in for me on occasion, Dean's proven to me every chance he's had that he values and cares for the team's needs.`}</p>
                        <p className="text-white text-xl font-extralight tracking-wide leading-relaxed mb-12">{`I truly believe he'll be an incredible asset to any team he joins. Between his strong character, eagerness to learn, and desire to make a positive impact on everything he's involved in, I can confidently say Dean is someone who will succeed in any endeavor he puts his mind to. I would absolutely recommend him for any position he feels qualified for.`}</p>
                        <p className="text-white text-xl font-extralight tracking-wide leading-relaxed mb-6">{`Sincerely,`}</p>
                        <p className="text-white text-xl font-extralight tracking-wide leading-relaxed mb-0">{`Sue Wolters`}</p>
                        <p className="text-white text-xl font-extralight tracking-wide leading-relaxed mb-0">{`Supervising Manager`}</p>
                        <p className="text-white text-xl font-extralight tracking-wide leading-loose mb-0">{`Einstein Brother's Bagels`}</p>
                        <p className="text-white text-xl font-extralight tracking-wide underline leading-loose mb-0"><a href="tel:6163319436">{`(616) 331-9436`}</a></p>
                    </div>
                </div>
            </div>
        </main>
    );
}
