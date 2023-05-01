const RestaurantFilter = ({
  showAllRestaurant,
  filterRestaurantList,
  setSearchText,
}) => {
  return (
    <>
      <div>
        <span className="fa fa-filter"></span>
        <button
          className="btn btn-show-all"
          onClick={() => showAllRestaurant()}
        >
          All Restaurants
        </button>
        <button
          className="btn btn-filter"
          onClick={() => filterRestaurantList()}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div>
        <span className="fa fa-search" style={{ marginRight: "5px" }}></span>
        <input
          type="search"
          tabIndex={2}
          className="search-bar"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </>
  );
};

export default RestaurantFilter;
