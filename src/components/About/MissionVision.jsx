import {mission,vision} from '../../assets';

export default function MissionVision() {
  return (
    <div className='flex flex-col lg:flex-row font-montserrat gap-10 p-10 text-lg lg:p-24 bg-[#E5FBEC] '>
      <div className="flex flex-col gap-5">
        <img src ={vision} className="w-[30%] lg:h-[50%]"></img>
        <span className='font-semibold'>VISION</span>
        <p>To Inspire & Lead the transition to Domestic Violence free horld and to deliver solutions to global humanitarian issues and problems</p>
      </div>
      <div className="flex flex-col gap-5">
        <img src ={mission} className="w-[30%] lg:h-[50%]"></img>
        <span className='font-semibold'>MISSION</span>
        <p>To create a robust support ecosystem for individuals who have suffered and suffer domestic violence</p>
      </div>
    </div>
  )
}
