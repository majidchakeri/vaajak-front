import { AccordionProps } from "@/components/usefulComponents/accordion/accordionTypes";

import React, { useState } from "react";

const Components: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // If the clicked index is already open, close it, otherwise open the new index
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="accordionExample">
      {items?.map((item, index) => (
        <div key={index} className="collapse collapse-plus bg-base-200 mt-4">
          <input
            type="checkbox" // Changed from radio to checkbox
            name={`my-accordion-${index}`}
            id={`my-accordion-${index}`} // Added an id for the label to reference
            checked={openIndex === index} // Controlled component
            onChange={() => handleToggle(index)} // Toggle the accordion on change
          />
          <label // Added a label to make the title clickable
            htmlFor={`my-accordion-${index}`}
            className="collapse-title text-xl font-medium"
          >
            {item.question}
          </label>

          

          <div className="collapse-content">{item.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default Components;
