import { useEffect, useState } from "react";
import NOT_FOUND_IMAGE from "../../assets/not-found.svg";
import apiData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import RestaurantFilter from "./RestaurantFilter";

const RestaurantList = ({ apiResponseData }) => {
  const [restaurantList, setRestaurantList] = useState(apiResponseData);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const filteredSearchResult = apiData.filter((restaurant) =>
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
    setRestaurantList(apiData);
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
            <RestaurantCard
              key={restaurant.data.id}
              restaurantDetails={restaurant.data}
            />
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
