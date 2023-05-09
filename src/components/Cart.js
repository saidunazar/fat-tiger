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
    <main className="cart-container" data-testid="cart-container">
      <section className="cart-heading">
        <h4>
          {cartItems.items.length > 0
            ? "Your cart items:"
            : "Your cart is empty."}
        </h4>
      </section>
      <section
        className="cart-items-container"
        data-testid="cart-items-container"
      >
        {cartItems.items.map((item, index) => (
          <article className="cart-item" key={item.id}>
            <img src={CDN_URL + item.imageId} alt="dish-image" height="100px" />
            <section className="cart-item-details">
              <h4>{item.name}</h4>
              <p>{item?.description}</p>
              <p>
                <b>Price: </b>Rs {item?.price / 100}
              </p>
            </section>
            <span
              className="fa fa-remove"
              style={{ fontSize: "15px", color: "red", flexBasis: "5%" }}
              onClick={() => handleRemoveItem(item)}
              data-testid={`remove-icon-${index}`}
            ></span>
          </article>
        ))}
      </section>
      <section className="clear-cart-btn-container">
        {cartItems?.items.length > 0 && (
          <button
            className="clear-cart-btn"
            onClick={handleClearCart}
            data-testid="remove-all-btn"
          >
            Clear Cart
          </button>
        )}
      </section>
    </main>
  );
};

export default Cart;
