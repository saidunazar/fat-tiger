import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantList";
import { fetchData } from "../utils/api";
import Loader from "./shared/Loader";
import { Outlet } from "react-router";
import { RESTAURANT_LIST_URL } from "../utils/constants";
import useFetch from "../utils/custom-hooks/useFetch";

const Home = () => {
  const resData = useFetch(RESTAURANT_LIST_URL);
  const restaurantList = resData?.data?.cards[2]?.data?.data?.cards;
  return (
    <main>
      {restaurantList?.length > 0 ? (
        <RestaurantList apiResponseData={restaurantList} />
      ) : (
        <Loader />
      )}
      <Outlet />
    </main>
  );
};

export default Home;
