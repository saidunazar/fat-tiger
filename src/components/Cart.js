import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart, removeItem } from "../utils/store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cartItem);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item.id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <main className="cart-container">
      <section className="cart-heading">
        <h4>
          {cartItems.items.length > 0
            ? "Your cart items:"
            : "Your cart is empty."}
        </h4>
      </section>
      <section className="cart-items-container">
        {cartItems.items.map((item) => (
          <article className="cart-item" key={item.id}>
            <img src={CDN_URL + item.imageId} alt="dish-image" height="100px" />
            <section className="cart-item-details">
              <h4>
                {item.name}{" "}
                <span
                  className="fa fa-remove"
                  style={{ fontSize: "14px", color: "red" }}
                  onClick={() => handleRemoveItem(item)}
                ></span>
              </h4>
              <p>{item?.description}</p>
              <p>Rs {item?.price / 100}</p>
            </section>
          </article>
        ))}
      </section>
      <section className="clear-cart-btn-container">
        {cartItems?.items.length > 0 && (
          <button className="clear-cart-btn" onClick={handleClearCart}>
            Clear Cart
          </button>
        )}
      </section>
    </main>
  );
};

export default Cart;
