import React, { useState } from 'react';
import { IFaq } from '../../../constants/faqs';
import CustomAccordian from './components/CustomAccordian';

interface FaqsProps {
  faqs: IFaq[];
}

const Faqs = ({ faqs }: FaqsProps) => {
  const [disclosures, setDisclosures] = useState(
    faqs.map((faq) => ({
      id: faq.question,
      isOpen: false,
      buttonText: faq.question,
      panelText: faq.answer,
    }))
  );

  const handleClick = (id: any) => {
    setDisclosures(
      disclosures.map((d) =>
        d.id === id ? { ...d, isOpen: !d.isOpen } : { ...d, isOpen: false }
      )
    );
  };

  return (
    <div>
      <div className=" mt-[105px] flex items-center justify-center flex-col ">
        {disclosures.map(({ id, isOpen, buttonText, panelText }) => (
          <div key={id} className="mb-[10px] bg-[#000] w-full px-[20px]">
            <CustomAccordian
              id={id}
              isOpen={isOpen}
              buttonText={buttonText}
              panelText={panelText}
              onClick={() => handleClick(id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
