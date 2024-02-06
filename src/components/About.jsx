import img40 from '../assets/About_WhoWeAre/image40.svg';
import img39 from '../assets/About_WhoWeAre/image39.svg'
export default function About() {
    return (
       <div>
                {/* who we are */}
			<div className="font-montserrat p-10">
					<div className="flex flex-row p-10">
						<div className="img flex flex-row gap-1">
							<div className="sm:w-80 w-10">
								<img className="" src={img40} alt='img40' />
							</div>
							<div className="sm:w-80 w-10">
								<img className="" src={img39} />
							</div>
						</div>
						<div className="content md:p-10">
							<h4  className="text-5xl font-bold">
							Who We Are
							</h4>
							<p className="mt-5 text-lg">
							Nevereveralone is a compassionate and dedicated organization comprised of individuals who are passionate about ending domestic violence and providing support to victims and survivors.
							</p>
							<p className="mt-5 text-lg">
							We are a diverse team of volunteers, advocates, professionals, and survivors who share a common goal of creating a world free from domestic violence. Through our collective expertise, empathy, and commitment, we strive to make a positive impact on the lives of those affected by domestic violence, offering them the support, resources, and empowerment they need to rebuild their lives and thrive.
							</p>
							<a className="who-we-are-button" href="www.google.com">Learn More </a>	
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
							<path d="M7.5 15L12.5 10L7.5 5" stroke="#147952" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</div>
						<div className="who-we-are-button-box">
						
						</div>
						
					</div>
				
					
			</div>

			{/* what is NeverEverAlone doing/ what we do */}
			<div className="what-we-do-section">
				<div className="what-we-do-left-box">
					<h4 className="what-we-do-title">What is NeverEverAlone Doing?</h4>
					<p className="what-we-do-title-content">
					Nevereveralone is working to Rebuild Lives and Restore Hope by developing an App for DV Victims & Survivors.
					</p>
				</div>
				<div className="what-we-do-right-box">
					<p className="what-we-do-right-content">
					Our app is dedicated to empowering domestic violence victims and survivors by providing them with the resources and support they need to take control of their lives. Our mission is to create a safe and confidential space where victims and survivors can find help and support to escape their abusive situations, heal from their experiences, and rebuild their lives. We strive to provide comprehensive resources that ensure victims and survivors have access to a network of support including legal assistance, counselling, safe shelter, and emergency services. Our app is designed to be user-friendly and accessible, with a focus on privacy, confidentiality, and security. We are committed to helping victims and survivors regain their sense of self-worth and independence, and to empowering them to live a life free from violence and abuse.
					</p>
				</div>
			</div>
                
        </div>
        )
}