import { useState } from "react";
import Accordian from "../components/shared/Accordian";

const Faqs = () => {
  const [accordianData, setAccordianData] = useState(sampleData);
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

const sampleData = [
  {
    title: "How do I place an order on your platform?",
    description:
      "Placing an order on our platform is easy! Simply browse the available restaurants in your area, select the food items you'd like to order, and add them to your cart. Once you're finished selecting your items, proceed to checkout and enter your payment and delivery information. Your order will be sent to the restaurant and you'll receive updates on the status of your order.",
  },
  {
    title: "How do I pay for my order?",
    description:
      "We accept a variety of payment methods, including credit cards, debit cards, and mobile payment options like Apple Pay and Google Pay. You can securely enter your payment information during the checkout process.",
  },
  {
    title: "How long does it take for my order to be delivered?",
    description:
      "Delivery times can vary depending on the restaurant and your location, but most orders are delivered within 45-60 minutes. You'll receive updates on the status of your order and an estimated delivery time.",
  },
  {
    title: "Can I cancel my order?",
    description:
      "Most orders can be cancelled within a short window of time after placing the order. However, once the restaurant begins preparing your order, it may not be possible to cancel. You can check the status of your order and contact the restaurant directly to inquire about cancelling.",
  },
];

export default Faqs;
