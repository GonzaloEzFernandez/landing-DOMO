import ClientCard from "./ClientCard";

export default function Clients(props) {
  return (
    <div className="h-full lg:h-[70vh] w-full flex flex-col items-center lg:pt-20 px-2 bg-white lg:px-52 relative">
      <span className="uppercase text-gray-500 pt-8 text-xs font-semibold">Clients we worked with</span>
      <div className="flex mx-0 pt-8 ">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-gray-500 mx-6  lg:mx-16 w-9 sm:w-14 md:w-16 lg:w-20 "
          {...props}
        >
          <path d="M4.986 0a.545.545 0 00-.534.548l-.006 4.908c0 .145.06.283.159.39a.532.532 0 00.38.155h3.429l8.197 17.68a.536.536 0 00.488.319h5.811a.547.547 0 00.543-.548v-4.908a.543.543 0 00-.543-.548h-2.013L12.739.316A.55.55 0 0012.245 0H4.991zm.54 1.09h6.367l8.16 17.681a.536.536 0 00.488.318h1.818v3.817h-4.922L9.24 5.226a.536.536 0 00-.488-.318h-3.23zm2.013 8.237a.538.538 0 00-.486.31L.6 23.213a.55.55 0 00.032.528.533.533 0 00.454.25h6.169a.547.547 0 00.497-.31l3.38-7.165a.54.54 0 00-.003-.469l-3.093-6.41a.547.547 0 00-.494-.31zm.006 1.804l2.488 5.152-3.122 6.62H1.947z" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-gray-500 mx-6 lg:mx-16 w-9 sm:w-14 md:w-16 lg:w-20 "
          {...props}
        >
          <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z" />
        </svg>
        <svg
          viewBox="0 0 488 512"
          fill="currentColor"
          className="text-gray-500 mx-6 lg:mx-16 w-9 sm:w-14 md:w-16 lg:w-20 "
          {...props}
        >
          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-gray-500 mx-6 lg:mx-16 w-9 sm:w-14 md:w-16 lg:w-20 "
          {...props}
        >
          <path d="M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457-.263-1.027-.16-1.848.291-2.465.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783-2.253.98-4.483-.583-6.392-2.704 3.157-3.951 3.74-7.028 2.385-9.018-.795-1.14-1.933-1.695-3.394-1.695-2.944 0-4.563 2.49-3.927 5.382.37 1.565 1.352 3.343 2.917 5.332-.98 1.085-1.91 1.856-2.732 2.333-.636.344-1.245.558-1.828.609-2.679.399-4.778-2.2-3.825-4.88.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132.58-1.116c.45-.822.635-1.19 1.351-1.643.346-.21.77-.315 1.246-.315.954 0 1.698.558 2.016 1.007.158.239.345.557.582.953l.558 1.089.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025.533 1.22.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317 1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027 3.37.003 6.152-3.261 4.802-6.975z" />
        </svg>
        <svg
          viewBox="0 0 640 512"
          fill="currentColor"
          className="text-gray-500 mx-6 lg:mx-16 w-9 sm:w-14 md:w-16 lg:w-20 "
          {...props}
        >
          <path d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 01-4.1 6.27l-12.8 8.96a10.66 10.66 0 01-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 01-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0155.69 17.28 70.285 70.285 0 0117.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 013.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 01-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 012.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 00316.88 84.12 630.22 630.22 0 00241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z" />
        </svg>
        <div className="flex">
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 py-10 lg:absolute  lg:-bottom-20">
        <ClientCard
          title={'Get in touch with us'}
          text={'Maecenas sed diam eget risus varius blandit sit amet non magna.'}
          buttonText={'Hire us'}
        />
        <ClientCard
          title={'Get in touch with us'}
          text={'Maecenas sed diam eget risus varius blandit sit amet non magna.'}
          buttonText={'Hire us'}
        >
          <img className="absolute hidden lg:block lg:-bottom-40 scale-x-125" src="src/IMG/images-removebg-preview (1).png" alt="" />
          <img className="scale-100 lg:hidden" src="src/IMG/images-removebg-preview (1).png" alt="" />
        </ClientCard>
      </div>
    </div>
  )
}