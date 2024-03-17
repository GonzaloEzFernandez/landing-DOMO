import OurServicesCard from "./OurServicesCard";

export default function AurServices() {
    return (
        <section className="flex flex-col pb-8 gap-14 lg:items-center px-8 lg:px-52 font-bold bg-transparent text-white h-full rounded-sm lg:h-[60vh] xl:h-[65vh] relative">
            <div className="flex flex-col items-center gap-5 ">
                <h2 className="text-3xl font-semibold text-center">Our Service</h2>
                <p className="lg:w-3/4 text-lg font-semibold text-gray-400 lg:text-center">We feel very strong about skills when it comes to planning, designing and coding applications. Here is what we love to do!</p>
            </div>
            <div className="flex flex-col items-center lg:flex-row gap-8 text-white lg:absolute -bottom-16">
                <OurServicesCard
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                    </svg>
                    }
                    title={'Business & Product Concept'}
                    text={
                        `Analyse business and product concepts at Start-up Worshops or Ongoing Projects´
                    Audits and prepare a viable and sensible product roadmap for achieving a perfect market fit.
                `}
                    buttonText={"Learn more"}
                />
                <OurServicesCard
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                    </svg>

                    }
                    title={'Business & Product Concept'}
                    text={
                        `Analyse business and product concepts at Start-up Worshops or Ongoing Projects´
                    Audits and prepare a viable and sensible product roadmap for achieving a perfect market fit.
                `}
                    buttonText={"Learn more"}
                />
                <OurServicesCard
                    icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                    </svg>

                    }
                    title={'Business & Product Concept'}
                    text={
                        `Analyse business and product concepts at Start-up Worshops or Ongoing Projects´
                    Audits and prepare a viable and sensible product roadmap for achieving a perfect market fit.
                `}
                    buttonText={"Learn more"}
                />
            </div>
        </section>
    )
}
