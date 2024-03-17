
export default function ClientCard({ title, text, buttonText, children }) {
    return (
        <div className=" bg-[#3871FF] flex flex-col lg:flex-row top-0 text-white  rounded-sm overflow-hidden">
            <div className="flex items-center justify-center p-4">
                <div className="flex flex-col items-center justify-center lg:items-start gap-6 w-2/3">
                    <h2 className="text-3xl text-semibold"> {title} </h2>
                    <p className=""> {text} </p>
                    <button className="px-8 py-2 text-white border-2 text-sm font-medium border-gray-400 rounded-sm"> {buttonText} </button>
                </div>
                <div className="w-1/3 relative">
                    {children}

                </div>
            </div>
        </div>
    )
}
