import {founder} from '../../assets'

export default function Founder() {
  return (
    <div className='flex flex-col lg:flex-row font-montserrat gap-10 p-10 text-lg lg:p-24'>
      <img src={founder}>
      </img>
      <div className='flex flex-col font-montserrat gap-10  text-lg'>
        <h4 className='lg:text-4xl text-3xl font-bold underline underline-offset-8  decoration-green-600'>Meet our Founder</h4>
        <p>As the visionary founder of Nevereveralone, Karthikaa is driven by a profound commitment to leveraging innovation for the betterment of those affected by domestic violence. With a personal journey as a survivor and a heartfelt connection with over 900 individuals worldwide who have endured domestic violence, Karthikaa embarked on a mission to establish a platform where victims could find solace, support, and the unwavering assurance that they are never alone.
        </p>
        
        <p>
          Recognizing the pressing need for accessible assistance and the challenges faced by those trapped in abusive relationships, Karthikaa founded Nevereveralone. Fueled by a deep understanding of these issues, she assembled a team of like-minded individuals to develop innovative solutions. Harnessing the power of technology, they created a product that serves as a lifeline for millions of individuals grappling with domestic violence.
          Through Karthikaa’s leadership and dedication, Nevereveralone continues to pave the way towards a safer and more supportive world for all those affected by domestic violence.
        </p>
      </div>
    </div>
  )
}
