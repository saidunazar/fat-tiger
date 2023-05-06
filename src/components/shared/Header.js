import { Link } from "react-router-dom";
import LOGO from "/assets/fat-tiger-logo.png";
import useLogin from "../../utils/custom-hooks/useLogin";

const Header = () => {
  const [loginStatus, setLoginStatus] = useLogin();
  return (
    <header>
      <div className="header-left-section">
        <img
          src={LOGO}
          alt="fat-tiger-logo"
          className="brand-logo"
          tabIndex={1}
        />
      </div>
      <div className="header-right-section">
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
            Cart
          </li>
          <li onClick={() => setLoginStatus()}>
            <span
              className="fa fa-user-circle"
              style={loginStatus ? { color: "darkorange" } : { color: "grey" }}
            ></span>{" "}
            {loginStatus ? "Sign out" : "Sign in"}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
