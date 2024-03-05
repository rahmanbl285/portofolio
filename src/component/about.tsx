export const About = () => {
    return (
        <div className="pt-36 pb-32 bg-[#527853] h-screen flex items-center justify-center">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-10">
                        <h4 className="font-bold uppercase text-[#F7B787] text-lg mb-3">Tentang Oyen</h4>
                        <h2 className="font-bold text-white text-3xl mb-5 max-w-md">meow meow meow meow!</h2>
                        <p className="font-medium text-base text-white max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit natus libero voluptates corrupti molestiae. Ipsam?</p>
                    </div>
                    <div className="w-full px-4">
                        <h3 className="font-bold uppercase text-[#F7B787] text-2xl mb-4">Let's be meow!</h3>
                        <p className="font-medium text-base text-white mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde consectetur inventore fugiat? Non molestiae dicta dolorem voluptatem in.</p>
                        <div className="flex items-center justify-center">
                            {/* twitter */}
                            <a href="https://twitter.com">
                            <svg role="img" width={"20"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}