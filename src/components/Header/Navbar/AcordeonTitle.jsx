import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="p-4">
      <button
        onClick={handleToggle}
        className="font-bold text-gray-800 hover:bg-gray-100 w-full text-left flex justify-between items-center"
      >
        <span >{title}</span>
        <span className="ml-auto"><FontAwesomeIcon icon={isOpen ? faArrowDown : faArrowLeft} className=" text-gray-500"/></span>
        
      </button>
      {isOpen && <ul className="pl-8 pt-3 ">{children}</ul>}
    </li>
  );
}

export default AccordionItem;
