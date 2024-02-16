import img40 from '../assets/About_WhoWeAre/image40.svg';
import img39 from '../assets/About_WhoWeAre/image39.svg';
import { Link } from 'react-router-dom';
export default function About() {
    return (
       <div>
			<div className="font-montserrat px-10">
					<div className="flex flex-col md:flex-row justify-center gap-10">
						<div className="img w-full flex flex-row pt-10 gap-5 justify-center">
							<div className="w-auto  mt-20">
								<img className="" src={img40} alt='img40' />
							</div>
							<div className="w-auto ">
								<img className="" src={img39} />
							</div>
						</div>
						<div className="content w-full flex flex-col pt-10  gap-5">
							<h4  className="md:text-5xl text-3xl font-bold underline underline-offset-8  decoration-green-600">
							Who We Are
							</h4>
							<p className="mt-5 text-lg">
							Nevereveralone is a compassionate and dedicated organization comprised of individuals who are passionate about ending domestic violence and providing support to victims and survivors.
							</p>
							<p className="mt-5 text-lg">
							We are a diverse team of volunteers, advocates, professionals, and survivors who share a common goal of creating a world free from domestic violence. Through our collective expertise, empathy, and commitment, we strive to make a positive impact on the lives of those affected by domestic violence, offering them the support, resources, and empowerment they need to rebuild their lives and thrive.
							</p>
							<div className='mt-5 flex items-center'>
								<Link to='' className="who-we-are-button" href="www.google.com">Learn More </Link>	
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
								<path d="M7.5 15L12.5 10L7.5 5" stroke="#147952" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
							</div>
							
						</div>
					</div>
				
					
			</div>
     
        </div>
        )
}