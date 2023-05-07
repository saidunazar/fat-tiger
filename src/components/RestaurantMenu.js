import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";

import { fetchData } from "../utils/api";
import Loader from "./shared/Loader";
import { CDN_URL, MENU_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const { userDetails, cartItems, setCartItem } = useContext(UserContext);
  const randomArr = [{ name: "saidu" }, { name: "tom" }];

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    try {
      const data = await fetchData(MENU_URL + id);
      setError(false);
      setRestaurantMenu(
        data?.cards[2]?.groupedCard?.cardGroupMap?.["REGULAR"]?.cards[1]?.card
          ?.card?.itemCards
      );
    } catch (err) {
      setError(true);
    }
  };

  const handleAddToCart = (menuItem) => {
    const { id, name, price, imageId } = menuItem?.card?.info;
    setCartItem([...cartItems, { id, name, price, imageId }]);
  };

  if (error) {
    return <h4>Sorry, restaurant is unavailable right now. </h4>;
  }
  return (
    <>
      {restaurantMenu?.length > 0 ? (
        <div className="restaurant-menu-container">
          <section className="restaurant-heading">
            <h3>Hello {userDetails.name}, here is your menu!</h3>
          </section>
          <section className="restaurant-menu-list">
            {restaurantMenu.map((menuItem) => (
              <div className="menu-item" key={menuItem.card.info.id}>
                <img
                  src={CDN_URL + menuItem.card.info.imageId}
                  height="130px"
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
                  <button
                    className="add-to-cart-button"
                    onClick={() => handleAddToCart(menuItem)}
                  >
                    ADD <i className="fa fa-plus"></i>
                  </button>

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
