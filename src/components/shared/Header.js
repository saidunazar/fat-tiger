import { Link } from "react-router-dom";
import LOGO from "/assets/fat-tiger-logo.png";
import useLogin from "../../utils/custom-hooks/useLogin";
import { useContext } from "react";
import UserContext from "../../utils/UserContext";

const Header = () => {
  const [loginStatus, setLoginStatus] = useLogin();
  const { cartItems } = useContext(UserContext);
  return (
    <header>
      <section className="header-left-section">
        <img
          src={LOGO}
          alt="fat-tiger-logo"
          className="brand-logo"
          tabIndex={1}
        />
      </section>
      <section className="header-right-section">
        <ul className="header-nav">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li tabIndex={3}>
            <Link to="/faqs">Faqs</Link>
          </li>
          <li>
            <span
              className="fa fa-shopping-cart"
              style={{ color: "darkorange" }}
            ></span>{" "}
            Cart {cartItems.length > 0 ? cartItems.length : ""}
          </li>
          <li onClick={() => setLoginStatus()}>
            <span
              className="fa fa-user-circle"
              style={loginStatus ? { color: "darkorange" } : { color: "grey" }}
            ></span>{" "}
            {loginStatus ? "Sign out" : "Sign in"}
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
