import NavBarMovil from "./NavBarMovil";

export default function NavBAr() {
    return (
        <div className="absolute w-full flex justify-between items-center pt-9 px-8 lg:px-20 xl:px-52 z-10  ">
            <span className="text-white font-semibold">complete labs</span>

            <ul className="hidden md:items-center xl:flex">
                <li>
                    <a className="text-white pr-10" href="">Home</a>
                </li>
                <li>
                    <a className="text-gray-400 pr-10" href="">Service</a>
                </li>
                <li>
                    <a className="text-gray-400 pr-10" href="">Technology</a>
                </li>
                <li>
                    <a className="text-gray-400 pr-10" href="">Case studies</a>
                </li>
                <li>
                    <a className="text-gray-400 pr-10" href="">About</a>
                </li>
                <li className="flex items-center text-white">
                    <a className=" flex items-center gap-2" href="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                        </svg>
                        Hire us</a>
                </li>
            </ul>
            <NavBarMovil />
        </div>
    )
}
