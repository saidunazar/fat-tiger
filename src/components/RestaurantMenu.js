import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { fetchData } from "../utils/api";
import Loader from "./shared/Loader";
import { Error } from "./Error";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    try {
      const data = await fetchData(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
          id
      );
      setError(false);
      setRestaurantMenu(
        data?.cards[2]?.groupedCard?.cardGroupMap?.["REGULAR"]?.cards[1]?.card
          ?.card?.itemCards
      );
    } catch (err) {
      setError(true);
    }
  };
  if (error) {
    return <h4>Sorry, restaurant is unavailable right now. </h4>;
  }
  return (
    <>
      {restaurantMenu?.length > 0 ? (
        <div className="restaurant-menu-container">
          <section className="restaurant-heading">
            <h4>Restaurant Menu:</h4>
          </section>
          <section className="restaurant-menu-list">
            {restaurantMenu.map((menuItem) => (
              <div className="menu-item" key={menuItem.card.info.id}>
                <img
                  src={CDN_URL + menuItem.card.info.imageId}
                  height="80px"
                  alt="dish-image"
                  className="menu-dish-image"
                />
                <h4>{menuItem.card.info.name}</h4>
                <div className="menu-item-addinfo">
                  <span className="menu-item-veg-category">
                    {menuItem.card.info.itemAttribute.vegClassifier ===
                    "VEG" ? (
                      <span
                        className="fa fa-dot-circle-o"
                        style={{ color: "green" }}
                      ></span>
                    ) : (
                      <span
                        className="fa fa-dot-circle-o"
                        style={{ color: "red" }}
                      ></span>
                    )}
                  </span>
                  <p>
                    <b>Price:</b> Rs {menuItem.card.info.price / 100}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default RestaurantMenu;
