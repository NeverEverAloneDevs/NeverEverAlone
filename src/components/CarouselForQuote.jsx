
export default function CarouselForQuote(props) {
  return (
    <div>
      <div className="flex flex-col start-left justify-center sm:py-60 py-20 inset-0 pl-20 pr-10 md:pr-60">
        <h5 className="font-montserrat text-gray-300 text-lg sm:text-3xl py-3 items-center" style={{ lineHeight: '1.5em' }}>
        {props.quote}
        </h5>
        <p className=" font-montserrat text-white text-lg md-xl py-3 ">
        -{props.author}
        </p>
        <button className="font-montserrat bg-green-600 rounded-full px-1 py-3 mt-4 w-32">Get Help</button>
      </div>
    </div>
  )
}
