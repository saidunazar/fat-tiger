import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import { fetchData } from "../utils/api";
import Loader from "./shared/Loader";
import { Outlet } from "react-router";
import { RESTAURANT_LIST_URL } from "../utils/constants";

const Home = () => {
  const [apiResponseData, setApiResponseData] = useState([]);

  useEffect(() => {
    fetchRetaurantDetails();
  }, []);

  const fetchRetaurantDetails = async () => {
    try {
      const data = await fetchData(RESTAURANT_LIST_URL);
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
      <Outlet />
    </main>
  );
};

export default Home;
