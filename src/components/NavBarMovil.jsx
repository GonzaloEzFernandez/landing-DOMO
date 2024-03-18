import { useState } from "react"
import { Link as ScrollLink } from "react-scroll"


function NavBarMovil() {

    const [expand, setExpand] = useState(false)

    const handleToggle = () => {
        setExpand(!expand)
    }

    const handleClose = () => {
        setExpand(false)
    }
    return (
        <div className="lg:hidden ">
            <button onClick={handleToggle}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-gray-200"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>

            {expand && (
                <div className="h-screen w-screen fixed z-40 top-0 right-0 backdrop-blur-sm"></div>
            )}

            {expand && (
                <div className="text-xl font-semibold bg-[#283345] h-screen w-72 fixed right-0 top-0 -transale-x-100 z-40 transition-all ease-in-out ">
                    <button onClick={handleClose} className="ml-[205px] pt-5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8 dark:text-[#ffff]"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    <ul className="lg:hidden flex flex-col transition-colors  ">
                        <li className="w-full block">
                            <ScrollLink
                                to="hero"
                                spy={true}
                                smooth={true}
                                offset={-80} // Ajusta según sea necesario
                                duration={80}
                                activeClass="activeLogo"
                            >
                                <a className="text-gray-100 hover:bg-[#1d2532] w-full block py-4 transition-colors pl-6 " href="">Home</a>

                            </ScrollLink>
                        </li>
                        <li className="">
                            <a className="text-gray-100 hover:bg-[#1d2532] w-full block py-4 transition-colors pl-6 " href="">Service</a>
                        </li>
                        <li className="">
                            <a className="text-gray-100 hover:bg-[#1d2532] w-full block py-4 transition-colors pl-6 " href="">Technology</a>
                        </li>
                        <li>
                            <a className="text-gray-100 hover:bg-[#1d2532] w-full block py-4 transition-colors pl-6 " href="">Case studies</a>
                        </li>
                        <li>
                            <a className="text-gray-100 hover:bg-[#1d2532] w-full block py-4 transition-colors pl-6 " href="">About</a>
                        </li>
                        <li className=" text-white">
                            <a className="flex items-center gap-2 text-gray-100 hover:bg-[#1d2532] w-full py-4 transition-colors pl-6 " href="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                                </svg>
                                Hire us</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default NavBarMovil
