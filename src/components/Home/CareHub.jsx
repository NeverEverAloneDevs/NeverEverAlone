import {support1,support2,support3} from '../../assets';

export default function CareHub() {
    return (
        <div className="flex flex-col font-montserrat p-10 lg:p-24 ">

            <div className="py-5">
                <h4 className="md:text-5xl text-3xl font-bold underline underline-offset-8  decoration-green-600">Comprehensive Care Hub</h4>
            </div>

            <div className="flex flex-col md:flex-row space-between gap-10 text-lg pt-5">
                <div className="flex flex-col w-full md:w-[30%] ">
                    <img className="w-full" src={support1}></img>
                    <h5 className='font-bold py-5'>Emotional Support</h5>
                    <p>
                    We provide a safe and confidential space for individuals to share their experiences, receive empathetic listening, and access emotional support.
                    </p>
                </div>    
                <div className="flex flex-col w-full md:w-[30%] ">
                    <img className="w-[100%]" src={support2}></img>
                    <h5 className='font-bold py-5'>Resources and Information</h5>
                    <p>
                    We offer comprehensive resources, educational materials, and information about domestic violence, including safety planning, legal rights, counseling options, and community support services. 
                    </p>
                </div> 
                <div className="flex flex-col w-full md:w-[30%] ">
                    <img className="w-[100%]" src={support3}></img>
                    <h5 className='font-bold py-5'>Advocacy and awareness</h5>
                    <p>
                    We provide a safe and confidential space for individuals to share their experiences, receive empathetic listening, and access emotional support.
                    </p>
                </div>                
            </div>
            
        </div>
    )
}