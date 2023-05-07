import { useState } from "react";

const Accordian = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <main className="accordian-container">
        <section className="accordian-title">
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
        </section>
        {isVisible && <p>{description}</p>}
      </main>
    </>
  );
};

export default Accordian;
