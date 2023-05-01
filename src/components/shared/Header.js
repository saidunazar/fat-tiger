import LOGO from "/assets/fat-tiger-logo.png";

const Header = () => {
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
          <li tabIndex={3}>Offers</li>
          <li>Help</li>
          <li>Sign In</li>
          <li>
            Cart <span className="fa fa-shopping-cart"></span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
