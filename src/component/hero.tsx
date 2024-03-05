import img from "../assets/meng2.png"

export const Hero = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="container">
                <div className="flex flex-grown max-h-screen">
                    <div className="w-full self-center px-4 lg:w-1/2">
                        <h1 
                        className="text-base font-semibold
                        md:text-xl">Hello guys! I'm</h1>
                        <div className="flex gap-2">
                            <h1 className="block font-bold text-primary text-4xl mt-1 mb-1
                            lg:text-5xl">Kucing</h1>
                            <h1 className="block font-bold text-4xl mt-1 mb-1
                            lg:text-5xl text-[#EE7214]">Oyen</h1>
                        </div>

                        <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">Fullstack Web Develomeow</h2>
                        <p className="font-medium text-slate-400 mb-10 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia commodi inventore fugit at cupiditate nisi ipsa perspiciatis et harum fuga.</p>

                        <button className="text-base font-semibold text-white
                        bg-primary py-3 px-8 rounded-full hover:shadow-lg
                        hover:opacity-80 transition duration-300">
                            Meow meow?
                        </button>
                    </div>
                    <div className="flex items-center justify-center w-full self-end lg:w-1/2 hidden md:block lg:block">
                        <div className="mt-10 lg:mt-9 lg:right-0 lg:object-cover">
                            <img src={img} alt="Kucing" className="h-auto max-w-full mx-auto object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}