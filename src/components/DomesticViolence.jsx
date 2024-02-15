import dv from '../assets/DomesticViolence.svg';
import { Outlet } from 'react-router-dom';
export default function DomesticViolence() {
    return (
        <div className="font-montserrat flex md:flex-row flex-col bg-green-100 gap-10 text-lg md:items-center lg:justify-center">
            <div className="w-full p-10 lg:p-24">
                <h4 className="md:text-5xl text-3xl font-bold underline underline-offset-8  decoration-green-600">Understanding Domestic Violence</h4>
                <p className="mt-8">
                Domestic violence is a pattern of behaviour in which one person in a relationship tries to control and dominate the other person through physical, emotional, or sexual abuse. It can occur in any type of relationship, including those between intimate partners, family members, and roommates.
                <br />
                <br />
                Victims of domestic violence often experience fear, anxiety, and isolation. They may feel trapped in their situation and be unable to leave due to financial, emotional, or physical barriers. Victims may also feel ashamed or embarrassed about their situation and struggle to seek help. This is why the app we are creating has the option to stay anonymous and get help safely from their home or wherever they are comfortable without being Judged and associating shame with it!
                </p>
                <div className='mt-5 flex items-center'>
                    <a className="who-we-are-button" href="www.google.com">Learn More </a>	
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="#147952" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
				</div>
            </div>
            <div className="md:w-full md:right-0 flex justify-center">
            <img className="" src={dv} alt='img40'></img>
            </div>
            <Outlet/>
        </div>
    )
}