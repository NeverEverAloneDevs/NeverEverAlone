export default function NavBarContent() {

    return (
        <div className=" font-montserrat bg-cover bg-center bg-[url('./assets/getHelp.svg')] h-screen sm:w-auto bg-image-mobile sm:bg-image-desktop" >
            <div className="flex flex-col start-left justify-center sm:py-60 py-20 inset-0 pl-20 pr-10 md:pr-60">
                <h5 className="font-montserrat text-gray-300 text-lg sm:text-3xl py-3 items-center" style={{ lineHeight: '1.5em' }}>
                “Domestic violence is a human rights violation, and it’s our duty to ensure that every person has the right to live free from fear and abuse.”
                </h5>
                <p className=" font-montserrat text-white text-lg md-xl py-3 ">
                -Emma Watson
                </p>
                <button className="font-montserrat bg-green-600 rounded-full px-1 py-3 mt-4 w-32">Get Help</button>
            </div>
        </div>
    )
}