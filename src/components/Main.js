import RestaurantList from "./RestaurantList";

const Main = ({ searchText }) => {
  return (
    <main>
      <RestaurantList searchText={searchText} />
    </main>
  );
};

export default Main;
