import {left, right, appstore, googleplay} from '../assets';
export default function DownloadApp() {
  return (
    <div className="flex flex-col lg:flex-row justify-between font-montserrat  bg-[#E5FBEC] text-lg items-center ">
      <img src={left}></img>
      <div className='flex flex-col p-10 justify-center items-center py-10 text-center'>
        <span className='flex text-3xl font-semibold items-center justify-center lg:justify-between text-green-700 py-5'>Currently under Development</span>
        <div className='flex flex-col  gap-5 py-5 w-fit'>
          <img className='lg:max-w-full' src={appstore}></img>
          <img className='lg:max-w-full' src={googleplay}></img>
        </div>
      </div>
      <img className='hidden lg:block' src={right}></img>
      
 
    </div>
  )
}
