import {linkedinin} from '../../assets';

export default function Member(props) {
  return (
    <div >
        <div className="flex flex-col items-center gap-8 lg:gap-4 bg-[#F6FCF8] rounded-md py-12 lg:py-5">
          <img src={props.photo} className=" w-[45%] lg:w-[50%]"></img>
          <span className="font-semibold">{props.name}</span>
          <span className="">{props.title}</span>
          <a href={props.linkedin} className='rounded-full border border-[#4AC16A] p-3'><img className="w-4" src={linkedinin}></img></a>
        </div>
        
      </div>
  )
}
