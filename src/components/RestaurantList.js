import { useEffect, useState } from "react";
import NOT_FOUND_IMAGE from "../../assets/not-found.svg";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import RestaurantFilter from "./RestaurantFilter";

const RestaurantList = ({ apiResponseData }) => {
  const [restaurantList, setRestaurantList] = useState(apiResponseData);
  const [searchText, setSearchText] = useState("");
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("Random cleanup function🤖");
  //   }, 1000);

  //   return () => {
  //     setInterval(timer);
  //   };
  // }, []);
  useEffect(() => {
    const filteredSearchResult = apiResponseData.filter((restaurant) =>
      restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurantList(filteredSearchResult);
  }, [searchText]);

  const filterRestaurantList = () => {
    const filteredList = restaurantList.filter(
      (restaurant) => restaurant?.data?.avgRating > 4
    );
    setRestaurantList(filteredList);
  };

  const showAllRestaurant = () => {
    setRestaurantList(apiResponseData);
  };

  return (
    <div className="restaurant-list-container">
      <section className="filter-container">
        <RestaurantFilter
          showAllRestaurant={showAllRestaurant}
          filterRestaurantList={filterRestaurantList}
          setSearchText={setSearchText}
        />
      </section>
      <section className="restaurant-card-container">
        {restaurantList.length > 0 ? (
          restaurantList.map((restaurant) => (
            <Link
              to={`/restaurant-menu/${restaurant.data.id}`}
              key={restaurant.data.id}
            >
              <RestaurantCard restaurantDetails={restaurant.data} />
            </Link>
          ))
        ) : (
          <div className="no-restaurant-found">
            <img src={NOT_FOUND_IMAGE} alt="not-found-dino" />
            <h4>Sorry, no restaurant found.</h4>
          </div>
        )}
      </section>
    </div>
  );
};

export default RestaurantList;
