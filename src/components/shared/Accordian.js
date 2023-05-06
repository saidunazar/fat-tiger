import { useState } from "react";

const Accordian = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <section className="accordian-container">
        <div className="accordian-title">
          <h4>{title}</h4>
          {isVisible ? (
            <span
              className="fa fa-minus"
              onClick={() => {
                setIsVisible(!isVisible);
              }}
            ></span>
          ) : (
            <span
              className="fa fa-plus"
              onClick={() => {
                setIsVisible(!isVisible);
              }}
            ></span>
          )}
        </div>
        {isVisible && <p>{description}</p>}
      </section>
    </>
  );
};

export default Accordian;
