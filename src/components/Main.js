import RestaurantList from "./RestaurantList";

const Main = ({ apiData }) => {
  return (
    <main>
      <RestaurantList apiData={apiData} />
    </main>
  );
};

export default Main;
