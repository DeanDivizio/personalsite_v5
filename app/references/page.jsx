import ReferenceLetterCard from "../../components/ReferenceLetterCard"
import Footer from "../../components/Footer"

export default function ReferencesLanding() {

    return (
        <main className="">
            <div className="w-screen min-h-[98vh] flex flex-row justify-center items-start pb-12 pageBodyContainer" >
                <div className="h-full flex flex-col">
                    <div className="pt-36 md:pt-48 pb-12 md:pb-24 px-8 text-center flex flex-col justify-center">
                        <h1 className="text-6xl mb-12 2xl:mb-0 text-center font-medium"><span className="text-transparent titleFade bg-clip-text">References</span></h1>
                    </div>
                    <div className="contentFade flex flex-wrap flex-shrink-0 justify-center gap-4 2xl:gap-12 px-4">
                        <ReferenceLetterCard
                            name="Alex Melelli"
                            initials="AM"
                            image={"http://newapi.deandivizio.com/wp-content/uploads/2025/04/AlexMelelli_Avatar.jpg"}
                            link={"/references/alexmelelli"}
                            subtitle="Co-Founder of OVRTONE Media Group"
                            isAlex
                        />
                        <ReferenceLetterCard
                            name="Doug McLiechey"
                            initials="DM"
                            image={"http://newapi.deandivizio.com/wp-content/uploads/2025/04/DougMcLiechey_Avatar.jpg"}
                            link={"/references/dougmcliechey"}
                            subtitle="CTO of Creative Path Solutions"
                        />
                        <ReferenceLetterCard
                            name="Sue Wolters"
                            initials="SW"
                            link={"/references/suewolters"}
                            subtitle="Supervising Manager at Einstein's Bagels"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}