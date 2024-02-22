
export default function Contact() {
    const accessKey = import.meta.env.VITE_REACT_APP_WEB3FORMS_KEY

    return (
        <div className='flex flex-col font-montserrat gap-10 p-10  text-lg lg:px-24 bg-green-50'>
            <h4 className="md:text-5xl text-3xl font-bold underline underline-offset-8  decoration-green-600" >Contact us </h4>
            <form action="https://api.web3forms.com/submit" method="POST"
            className="grid grid-cols-1 lg: grid-rows-2 lg:grid-cols-2 gap-10 lg:gap-y-5 lg:gap-x-10 lg:gap-1-0">
                <input type="hidden" name="access_key" value={accessKey}></input>
                <input className='py-4 pl-5 border-gray-300 border-2 rounded-md placeholder-gray-600' type='text' name='name' placeholder="Your Name" required/>
                <input className='py-4 pl-5 border-gray-300 border-2 rounded-md placeholder-gray-600 lg:order-1' type='email' name='email' placeholder="Your email" required/>
                <textarea className='py-4 pl-5 border-gray-300 border-2 rounded-md placeholder-gray-600 row-span-2 ' type='message' name='message' placeholder="Type your message here" required/>
                <button type='submit' className='flex bg-green-600 rounded-full ml-3  py-3 text-md max-w-36 font-medium justify-center lg:order-last'>Submit</button>
            </form>
            
        </div>
        
       
    )
}