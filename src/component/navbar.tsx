export const Navbar = () => {
    return (
        <div className="p-3 flex fixed top-0 left-0 w-full bg-white z-10">
            <div className="font-bold flex-1">
                <div className="flex">
                    <h1 className="text-[#527853]">PORTO</h1>
                    <h1 className="text-[#EE7214]">FOLIO</h1>                
                </div>

            </div>
            <div>
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm mr-10">
                <li>
                    <a href="#" className="font-bold">HOME</a>
                </li>
                <li>
                    <a href="#" className="font-semibold">ABOUT ME</a>
                </li>
                <li>
                    <a href="#" className="font-semibold">PROJECT</a>
                </li>
            </ul>
            </div>
        </div>
    )
}