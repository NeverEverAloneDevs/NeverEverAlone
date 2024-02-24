import { Link } from "react-router-dom";
import { footerlogo, linkedinin } from "../assets";
export default function Footer() {
    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-10 p-10 lg:p-24 lg:gap-20 font-montserrat text-lg">
                <div className="flex flex-col gap-4  lg:flex-start lg:w-[35%] w-full">
                    <h4 className="font-bold">For enquiries</h4>
                    <p>Our non-profit organization is active socially. Follow us on social network.</p>
                    <a href="https://www.linkedin.com/company/nevereveralone/mycompany/"><img className="w-8" src={linkedinin}></img></a>
                    

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
                    
                    <button onClick={()=>(window.location.href = "https://www.paypal.com/donate/?hosted_button_id=DP4VWZ99YL2S2")} className= 'bg-green-600 rounded-full  px-5 py-2 text-center max-w-40 font-medium'>Donate Here</button>
                    
                </div>
            </div>
            <div className="flex flex-col font-montserrat items-center py-10 border-t-4 border-gray-400 mx-10 lg:mx-24 gap-2">
                <img className='w-[50%] lg:w-[15%]' src={footerlogo}></img>
                <h5 className="text-[#147952] text-sm">Non Profit domestic Violence Support</h5>
                <h5 className="text-xs">©nevereveralone 2024 All rights reserved</h5>
            </div>
        </div>
        
    )
}