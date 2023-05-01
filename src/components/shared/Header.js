import LOGO from "/assets/fat-tiger-logo.png";

const Header = ({ setSearchText }) => {
  return (
    <header>
      <div className="header-left-section">
        <img
          src={LOGO}
          alt="fat-tiger-logo"
          className="brand-logo"
          tabIndex={1}
        />
        <input
          type="search"
          tabIndex={2}
          className="search-bar"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="header-right-section">
        <ul className="header-nav">
          <li tabIndex={3}>Search</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
