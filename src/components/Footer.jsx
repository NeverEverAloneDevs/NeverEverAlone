import { Link } from "react-router-dom";
import { footerlogo, linkedinin } from "../assets";
export default function Footer() {
    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-10 p-10 lg:p-24 lg:gap-20 font-montserrat text-lg">
                <div className="flex flex-col gap-4  lg:flex-start lg:w-[35%] w-full">
                    <h4 className="font-bold">For enquiries</h4>
                    <p>Our non-profit organization is active socially. Follow us on social network.</p>
                    <img className="w-8" src={linkedinin}></img>

                </div>
                <div className="flex flex-col gap-4  lg:flex-start lg:w-[30%] w-full">
                    <h4 className="font-bold">Legal</h4>
                    <p>Terms of use</p>
                    <p>Privacy Policy</p>
                    <p>FAQ</p>
                </div>
                <div className="flex flex-col gap-4  lg:flex-start lg:w-[40%] w-full">
                    <h4 className="font-bold">Want to support us?</h4>
                    <p>Your generosity will directly impact the lives of millions of domestic violence victims and survivors, facilitating their journey towards rebuilding their lives, including their families, and most importantly, their children.</p>
                    
                    <button onClick={()=>(window.location.href = "https://gofund.me/00d45e21")} className= 'bg-green-600 rounded-full  px-5 py-2 text-center max-w-40 font-medium'>Donate Here</button>
                    
                </div>
            </div>
            <div className="flex justify-center py-10 border-t-4 border-gray-400 mx-10 lg:mx-24">
                <img className='w-[50%] lg:max-w-80' src={footerlogo}></img>
            </div>
        </div>
        
    )
}