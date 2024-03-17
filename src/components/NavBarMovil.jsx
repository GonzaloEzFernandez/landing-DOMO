import { useState } from "react"

function NavBarMovil() {

    const [expand, setExpand] = useState(false)

    const handleToggle = () => {
        setExpand(!expand)
    }

    const handleClose = () => {
        setExpand(false)
    }
    return (
        <div className="xl:hidden ">
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

                    <ul className="lg:hidden flex flex-col  ">
                        <li className="">


                        </li>
                        <li className="">

                        </li>
                        <li className="">

                        </li>
                        <li>

                        </li>
                        <li className="">

                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default NavBarMovil
