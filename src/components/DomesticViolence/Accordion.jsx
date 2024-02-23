import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp,faAngleDown } from '@fortawesome/free-solid-svg-icons';
export default function Accordion(props) {
  const [accordionOpen, setAccordionOpen]= useState(false);

  return (
    <div className='grid grid-cols-1 w-full border-b-2 '>
          <button onClick={()=>setAccordionOpen((prev)=>!prev)} className="flex justify-between w-full py-4 ">
          <span className="font-bold ">{props.title}</span>
          { accordionOpen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
          </button>
          {accordionOpen && (<p className="py-4">{props.content}</p>)}
        </div>
  )
}
