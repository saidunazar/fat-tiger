import { useState, useContext } from "react";
import Accordian from "../components/shared/Accordian";
import { faqMockData } from "../utils/mock-data/faqMockData";

const Faqs = () => {
  const [accordianData, setAccordianData] = useState(faqMockData);
  return (
    <>
      <h3 style={{ textAlign: "center" }}>FAQS</h3>
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
