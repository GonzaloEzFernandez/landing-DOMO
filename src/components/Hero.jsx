import Button from "./UI/Button";

export default function Hero() {
    return (
        <section className="flex items-center justify-center px-8 h-screen  lg:h-[110vh] lg:px-20 xl:px-40 bg-[#283345] font-bold relative ">
            <div className=" flex flex-col justify-center gap-8 lg:w-1/2 z-10 ">
                <h1 className="text-[44px] leading-[55px] text-white ">We build beautiful and relible web solutions</h1>
                <div>
                    <p className="text-lg font-semibold text-gray-400">We strongly that communication, trust and transparency are the essential elements of successful business relationship.  Ready for the journey?</p>
                    <p className="text-gray-400"></p>
                </div>
                <div className="flex items-center gap-7">
                    <Button>Learn more</Button>
                    <button className="flex items-center gap-2 px-8 py-2 text-sm text-white rounded-sm bg-[#3871FF]">Our Project<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                    </button>
                </div>
            </div>
            <div className="z-0 w-1/2">
                <img className="hidden lg:block h-full  top-5 right-1 scale-110 absolute object-cover w-[640px] " src="./IMG/asset-background.jpg" alt="image-domo" />
                <img className="md:-right-28 lg:hidden  h-full top-0 opacity-40 -right-14 scale-110 absolute object-cover w-[640px] " src="./IMG/asset-background.jpg" alt="image-domo" />
            </div>
        </section >
    )
}
