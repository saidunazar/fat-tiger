import RestaurantCard from "./RestaurantCard";
import apiData from "../utils/mockData";
import { useEffect, useMemo, useState } from "react";

const RestaurantList = ({ searchText }) => {
  const [restaurantList, setRestaurantList] = useState(apiData);

  useEffect(() => {
    const filteredSearchResult = apiData.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurantList(filteredSearchResult);
  }, [searchText]);

  const filterRestaurantList = () => {
    const filteredList = restaurantList.filter(
      (restaurant) => restaurant.data.avgRating > 4
    );
    setRestaurantList(filteredList);
  };

  const showAllRestaurant = () => {
    setRestaurantList(apiData);
  };

  return (
    <div className="restaurant-list-container">
      <section className="filter-button-container">
        <span className="fa fa-filter"></span>
        <button
          className="btn btn-show-all"
          onClick={() => showAllRestaurant()}
        >
          All Restaurants
        </button>
        <button
          className="btn btn-filter"
          onClick={() => filterRestaurantList()}
        >
          Top Rated Restaurants
        </button>
      </section>
      <section className="restaurant-card-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.data.id}
            restaurantDetails={restaurant.data}
          />
        ))}
      </section>
    </div>
  );
};

export default RestaurantList;
