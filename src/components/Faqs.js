import { useState } from "react";
import Accordian from "../components/shared/Accordian";
import { faqMockData } from "../utils/mock-data/faqMockData";

const Faqs = () => {
  const [accordianData, setAccordianData] = useState(faqMockData);
  const [isVisible, setIsVisible] = useState("auto");
  return (
    <>
      {accordianData.map((item, index) => (
        <Accordian
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </>
  );
};

export default Faqs;
