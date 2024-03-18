import { useEffect, useState } from "react";
import NavBarMovil from "./NavBarMovil";
import { Link as ScrollLink } from "react-scroll"

export default function NavBAr() {

    const [show, setShow] = useState(false)


    const scrollHeader = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHeader)
        return () => window.removeEventListener("scroll", scrollHeader)
    }, [])


    return (
        <nav className="fixed top-0 left-0 right-0 z-10">
            <div className={`mx-auto max-w-[1520px] px-8 xl:px-40 h-[74px] flex justify-between items-center bg-transparent transition-all duration-300 ${show ? "bg-[#222c3b]" : ""}`}>
                <span className="text-white font-semibold">complete labs</span>

                <ul className="hidden lg:items-center lg:flex text-gray-400 ">
                    <li className="">
                        <ScrollLink
                            to="hero"
                            spy={true}
                            smooth={true}
                            offset={-80} // Ajusta según sea necesario
                            duration={80}
                            activeClass="active"

                        >
                            <a className="px-8" href="hero">Home</a>
                        </ScrollLink >
                    </li>
                    <li>
                        <ScrollLink
                            to="aurservices"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={80}
                            activeClass="active"
                            className="cursor-pointer transition-colors "
                        >
                            <a className="px-8" href="aurservices">Service</a>
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            rollLink
                            to="technology"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={80}
                            activeClass="active"
                            className="cursor-pointer transition-colors"
                        >

                            <a className="px-8" href="technology">Technology</a>
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            rollLink
                            to="clients"
                            spy={true}
                            smooth={true}
                            offset={60} // Ajusta según sea necesario
                            duration={80}
                            activeClass="active"
                            className="cursor-pointer transition-colors ">
                            <a className="px-8" href="clients">Case studies</a>
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            rollLink
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={80}
                            duration={80}
                            activeClass="active"
                            className="cursor-pointer transition-colors ">
                            <a className="text-gray-400 px-8" href="about">About</a>
                        </ScrollLink>
                    </li>
                    <li className="flex items-center text-white">
                        <ScrollLink
                            rollLink
                            to=""
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={80}
                            activeClass="active"
                            className="pl-8">
                            <a className=" flex items-center gap-2" href="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                                </svg>
                                Hire us</a>
                        </ScrollLink>
                    </li>
                </ul>
                <NavBarMovil />
            </div>
        </nav>
    )
}
