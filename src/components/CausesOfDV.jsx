import { useState } from "react";

import Accordion from './Accordion';
import causes from './contents.js';

export default function CausesOfDV() {

  const [accordionOpen, setAccordionOpen]= useState(false);

  return (
    <div className='flex flex-col font-montserrat gap-10 p-10 text-lg lg:px-24'>
      <div className='flex flex-col font-montserrat gap-10  text-lg'> 
        <h5 className='md:text-5xl text-3xl font-bold underline underline-offset-8  decoration-green-600' >Causes of Domestic Violence</h5>
        <p className=''>Domestic violence is a complex phenomenon with multiple contributing factors. It is essential to recognize that no single factor can explain or justify abusive behavior. Rather, domestic violence typically results from a combination of various elements. Some of the commonly identified causes and risk factors associated with domestic violence include:</p>
      </div>
      {/* accordian contents */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-24'>
      {causes.map((cause,index)=>(<Accordion key={index} title={cause.title} content = {cause.content}/>))}
      </div>

      <div className="py-10">
        <p>It’s important to understand that these factors are interrelated and may interact in complex ways. Additionally, many people who experience these risk factors do not become abusive, and many factors contribute to healthy relationships. Addressing domestic violence requires a comprehensive approach that includes prevention, intervention, and support for both survivors and perpetrators. If you or someone you know is experiencing domestic violence, seeking help from local support services or law enforcement is crucial.</p>
      </div>
      
    </div>
  )
}
