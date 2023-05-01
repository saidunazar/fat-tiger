import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";

const Main = () => {
  const [apiResponseData, setApiResponseData] = useState([]);

  useEffect(() => {
    fetchRetaurantDetails();
  }, []);

  const fetchRetaurantDetails = async () => {
    try {
      const apiResponse = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonResponse = await apiResponse.json();
      setApiResponseData(jsonResponse?.data?.cards[2]?.data?.data?.cards);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <RestaurantList apiResponseData={apiResponseData} />
    </main>
  );
};

export default Main;
