import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurantDetails }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwoString,
    deliveryTime,
    avgRating,
  } = restaurantDetails;
  return (
    <div className="restaurant-card" tabIndex={4}>
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-logo"
        className="restaurant-card-logo"
      />
      <h4>{name}</h4>
      <p className="resutaurant-cusine">{cuisines.join(", ")}</p>
      <div className="restaurant-card-more-info">
        <p className="restaurant-rating">
          <span className="fa fa-star checked"></span>
          {avgRating}
        </p>
        <p aria-label="Delivery Time">{deliveryTime} mins</p>
        <p>{costForTwoString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
