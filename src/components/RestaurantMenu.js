import { useParams } from "react-router";
import { fetchData } from "../utils/api";
import Loader from "./shared/Loader";
import { CDN_URL, MENU_URL } from "../utils/constants";
import { addItem } from "../utils/store/cartSlice";
import { useDispatch } from "react-redux";
import menuItem from "../utils/mock-data/menuMockData";
import useFetch from "../utils/custom-hooks/useFetch";
//import UserContext from "../utils/UserContext";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resData = useFetch(MENU_URL + id);
  const menuItems =
    resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.["REGULAR"]?.cards[1]
      ?.card?.card?.itemCards;

  const dispatch = useDispatch();
  //const { userDetails, cartItems, setCartItem } = useContext(UserContext);

  const handleAddToCart = (menuItem) => {
    const { id, name, description, price, imageId } = menuItem?.card?.info;
    //setCartItem([...cartItems, { id, name, price, imageId }]);
    dispatch(addItem({ id, name, description, price, imageId }));
  };

  return (
    <>
      {menuItems?.length > 0 ? (
        <main
          className="restaurant-menu-container"
          data-testid="restaurant-menu-container"
        >
          <section className="restaurant-heading">
            <h3>Restaurant Menu:</h3>
          </section>
          <section className="restaurant-menu-list" data-testid="menu-list">
            {menuItems.map((menuItem) => (
              <article className="menu-item" key={menuItem.card.info.id}>
                <img
                  src={CDN_URL + menuItem.card.info.imageId}
                  height="100px"
                  alt="dish-image"
                  className="menu-dish-image"
                />
                <h4>{menuItem.card.info.name}</h4>
                <section className="menu-item-addinfo">
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
                </section>
              </article>
            ))}
          </section>
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default RestaurantMenu;
