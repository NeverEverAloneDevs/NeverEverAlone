import {whoweare1,whoweare2} from '../../assets';

import { Link } from 'react-router-dom';
export default function About() {
    return (
       <div>
			
					<div className=" font-montserrat p-10 flex flex-col md:flex-row justify-center  gap-10">
						<div className="img w-full flex flex-row pt-10 gap-5 justify-center">
							<div className="w-auto  mt-16">
								<img className="" src={whoweare1}  />
							</div>
							<div className="w-auto ">
								<img className="" src={whoweare2} />
							</div>
						</div>
						<div className="content w-full flex flex-col pt-10 gap-5 content-center">
							<h4  className="md:text-5xl text-3xl font-bold underline underline-offset-8  decoration-green-600">
							Who We Are
							</h4>
							<p className="mt-5 text-lg">
							Nevereveralone is a compassionate and dedicated organization comprised of individuals who are passionate about ending domestic violence and providing support to victims and survivors.
							</p>
							<p className="mt-5 text-lg">
							We are a diverse team of volunteers, advocates, professionals, and survivors who share a common goal of creating a world free from domestic violence. Through our collective expertise, empathy, and commitment, we strive to make a positive impact on the lives of those affected by domestic violence, offering them the support, resources, and empowerment they need to rebuild their lives and thrive.
							</p>
						</div>
					</div>
				
				
     
        </div>
        )
}