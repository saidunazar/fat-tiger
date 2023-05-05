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
            <Link to="/offers">Offers</Link>
          </li>
          <li onClick={() => setLoginStatus()}>
            {loginStatus ? "Sign Out" : "Sign In"}
          </li>
          <li>
            Cart <span className="fa fa-shopping-cart"></span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
