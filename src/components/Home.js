import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import { fetchData } from "../utils/api";
import Loader from "./shared/Loader";

const Home = () => {
  const [apiResponseData, setApiResponseData] = useState([]);

  useEffect(() => {
    fetchRetaurantDetails();
  }, []);

  const fetchRetaurantDetails = async () => {
    try {
      const data = await fetchData(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
      );
      setApiResponseData(data?.cards[2]?.data?.data?.cards);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      {apiResponseData?.length > 0 ? (
        <RestaurantList apiResponseData={apiResponseData} />
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default Home;
