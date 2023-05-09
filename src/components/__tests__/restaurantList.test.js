import { render, waitFor, fireEvent } from "@testing-library/react";
import RestaurantList from "../RestaurantList";
import "@testing-library/jest-dom";
import { StaticRouter } from "react-router-dom/server";
import apiData from "../../utils/mock-data/mockData";

describe("Restaurant List Component", () => {
  let restaurantListComponent;
  beforeEach(() => {
    const restaurantList = apiData?.data?.cards[2]?.data?.data?.cards;
    restaurantListComponent = render(
      <StaticRouter>
        <RestaurantList apiResponseData={restaurantList} />
      </StaticRouter>
    );
  });
  test("Restaurant search functionality", async () => {
    await waitFor(() =>
      expect(restaurantListComponent.getByTestId("search-bar"))
    );
    const searchInput = restaurantListComponent.getByTestId("search-bar");
    fireEvent.change(searchInput, {
      target: {
        value: "c",
      },
    });
    const resList = restaurantListComponent.getByTestId("restaurant-list");
    expect(resList.children.length).toBe(4);
  });
  test("Top rated restaurant filter is working", () => {
    const topRatedFilter =
      restaurantListComponent.getByTestId("top-rated-filter");
    fireEvent.click(topRatedFilter);
    const resList = restaurantListComponent.getByTestId("restaurant-list");
    expect(resList.children.length).toBe(12);
  });
  test("All restaurant button is working", () => {
    const allRatedFilter = restaurantListComponent.getByTestId("show-all-btn");
    fireEvent.click(allRatedFilter);
    const resList = restaurantListComponent.getByTestId("restaurant-list");
    expect(resList.children.length).toBe(15);
  });
});
