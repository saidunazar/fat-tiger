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
    <article className="restaurant-card" tabIndex={4}>
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={`${name} restaurant logo`}
        className="restaurant-card-logo"
      />
      <h4>{name}</h4>
      <p className="resutaurant-cusine">{cuisines.join(", ")}</p>
      <section className="restaurant-card-more-info">
        <p className="restaurant-rating">
          <span className="fa fa-star checked"></span>
          {avgRating}
        </p>
        <p aria-label="Delivery Time">{deliveryTime} mins</p>
        <p>{costForTwoString}</p>
      </section>
    </article>
  );
};

export default RestaurantCard;
