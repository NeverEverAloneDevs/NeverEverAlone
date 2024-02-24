import Member from './Member';
import team from './teamcontent';

export default function Teams() {
  return (
    <div className='flex flex-col font-montserrat gap-10 p-10 text-lg lg:px-24'>
      <div className='flex flex-col font-montserrat gap-10  text-lg'> 
        <h5 className='lg:text-4xl text-3xl font-bold underline underline-offset-8  decoration-green-600' >Our Team</h5>
        <p className=''>Nevereveralone is a compassionate and dedicated organization comprised of individuals who are passionate about ending domestic violence and providing support to victims and survivors. Through our collective expertise, empathy, and commitment, we strive to make a positive impact on the lives of those affected by domestic violence, offering them the support, resources, and empowerment they need to rebuild their lives and thrive.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-8">
        {team.map((member,index)=><Member key={index}{...member}/>)}
      </div>
      
    </div>
  )
}
