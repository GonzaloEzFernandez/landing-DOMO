
export default function Footer(props) {
    return (
        <div className='h-full py-20 lg:h-[55vh] xl:h[50vh] flex flex-col lg:flex-row p-4 lg:p-0 gap-16 items-center justify-center leading-7 text-sm bg-[#283345] xl:px-28'>
            <div className='lg:w-2/3 lg:flex flex-col justify-center lg:px-20'>
                <div>
                    <h3 className=' font-bold text-white py-2'>completeet labs</h3>
                    <p className='text-[#90969F] pb-5 '>
                        Fusce dapibus,  tellus ac cursus cmmodo, totor mauris condimentum nibh, ut fermentum massa justo sit amet risus- Donec ulllamcorper nulla.
                    </p>
                </div>
                <div className="flex item-center gap-6 ">
                    <svg fill="none" viewBox="0 0 15 15" height="1.5em"
                        width="1.5em"
                        className="text-gray-400"
                        {...props}>
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M7.233 4.696c0-1.727 1.4-3.127 3.127-3.127 1.014 0 1.823.479 2.365 1.175a5.246 5.246 0 001.626-.629 2.634 2.634 0 01-1.148 1.45l.002.003a5.26 5.26 0 001.5-.413l-.001.002c-.337.505-.76.95-1.248 1.313.026.177.04.354.04.53 0 3.687-2.809 7.975-7.975 7.975a7.93 7.93 0 01-4.296-1.26.5.5 0 01-.108-.748.45.45 0 01.438-.215c.916.108 1.83-.004 2.637-.356a3.086 3.086 0 01-1.69-1.876.45.45 0 01.103-.448 3.07 3.07 0 01-1.045-2.31v-.034a.45.45 0 01.365-.442 3.068 3.068 0 01-.344-1.416c0-.468.003-1.058.332-1.59a.45.45 0 01.323-.208.5.5 0 01.538.161 6.964 6.964 0 004.46 2.507v-.044zm-1.712 7.279a6.936 6.936 0 01-2.249-.373 5.318 5.318 0 002.39-1.042.45.45 0 00-.27-.804 2.174 2.174 0 01-1.714-.888c.19-.015.376-.048.556-.096a.45.45 0 00-.028-.876 2.18 2.18 0 01-1.644-1.474c.2.048.409.077.623.084a.45.45 0 00.265-.824A2.177 2.177 0 012.48 3.87c0-.168.003-.317.013-.453a7.95 7.95 0 005.282 2.376.5.5 0 00.513-.61 2.127 2.127 0 012.071-2.614c1.234 0 2.136 1.143 2.136 2.432 0 3.256-2.476 6.974-6.975 6.974z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <svg
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        height="1.5em"
                        width="1.5em"
                        className="text-gray-400"
                        {...props}
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={32}
                            d="M448 256 A192 192 0 0 1 256 448 A192 192 0 0 1 64 256 A192 192 0 0 1 448 256 z"
                        />
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={32}
                            d="M432.94 255.05a192 192 0 01-176.31-180.7M255 433.61A192 192 0 0074.29 256.69M120.24 120.24l271.52 271.52M120.24 391.76l271.52-271.52"
                        />
                    </svg>

                    <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1.5em"
                        width="1.5em"
                        className="text-[#283345] bg-gray-400"
                        {...props}
                    >
                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z" />
                    </svg>
                    <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1.5em"
                        width="1.5em"
                        className="text-gray-400"
                        {...props}
                    >
                        <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                    </svg>
                </div>
            </div>
            <div className="w-full lg:w-2/3 ">
                <div className="grid grid-cols-3  gap-5 text-xs text-white font-semibold ">
                    <span className="uppercase">sistemap</span>
                    <span className="uppercase">case studies</span>
                    <span className="uppercase">contact</span>

                    <div className="grid col-span-1 gap-2 text-sm font-normal  text-[#90969F] ">
                        <a href="">home</a>
                        <a href="">Technology</a>
                        <a href="">Services</a>
                        <a href="">About</a>
                    </div>
                    <div className="grid col-span-1 gap-2 text-sm font-normal text-[#90969F] ">
                        <a href="">Swiss Airlines</a>
                        <a href="">Google</a>
                        <a href="">Apple</a>
                        <a href="">Nike</a>
                    </div>
                    <div className="grid col-span-1 items-center h-0 gap-2 text-sm font-normal text-[#90969F] ">
                        <a className="" href="">Jobs</a>
                        <a className=" " href="">Hire us</a>
                    </div>
                </div>
            </div >
        </div>
    )
}
