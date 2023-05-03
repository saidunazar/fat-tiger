import { useParams } from "react-router";

const Offers = () => {
  const { id } = useParams();
  return (
    <>
      <h4>Here is your offers: {id}!🚀 </h4>
    </>
  );
};

export default Offers;
