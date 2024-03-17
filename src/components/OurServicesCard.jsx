import Button from "./UI/Button";

export default function OurServicesCard({ icon, title, text, buttonText }) {
    return (
        <article className="flex flex-col justify-center items-center  gap-7 py-6 px-6 text-center font-light bg-white rounded-sm w-80">
            <span className="p-4 rounded-full text-white bg-[#4479FF]"> {icon} </span>
            <h3 className="text-xl font-normal text-black"> {title} </h3>
            <p className="text-gray-500 font-normal"> {text} </p>
            <Button className="text-white"> {buttonText} </Button>
        </article>
    )
}
