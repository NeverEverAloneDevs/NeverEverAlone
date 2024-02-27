import {mission,vision} from '../../assets';

export default function MissionVision() {
  return (
    <div className='flex flex-col lg:flex-row font-montserrat gap-10 p-10 text-lg lg:p-24 bg-[#E5FBEC] '>
      <div className="flex flex-col gap-5">
        <img src ={vision} className="w-[30%] lg:h-[50%]"></img>
        <span className='font-semibold'>VISION</span>
        <p>To Inspire & Lead the Transition to Domestic Violence Free World and to Deliver Solutions to Global Humanitarian Issues and Problems</p>
      </div>
      <div className="flex flex-col gap-5">
        <img src ={mission} className="w-[30%] lg:h-[50%]"></img>
        <span className='font-semibold'>MISSION</span>
        <p>To Create a Robust Support Ecosystem for Individuals who have Suffered and Suffer Domestic Violence</p>
      </div>
    </div>
  )
}
