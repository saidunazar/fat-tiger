import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store/store";
import { StaticRouter } from "react-router-dom/server";
import RestaurantMenu from "../RestaurantMenu";
import menuItem from "../../utils/mock-data/menuMockData";

describe("Restaurant Menu Component", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve(menuItem);
        },
      });
    });
  });

  test("Menu is loading", async () => {
    const menuComponent = render(
      <Provider store={store}>
        <StaticRouter>
          <RestaurantMenu />
        </StaticRouter>
      </Provider>
    );

    await waitFor(() =>
      expect(menuComponent.getByTestId("restaurant-menu-container"))
    );
    const menu = menuComponent.getByTestId("menu-list");
    expect(menu.children.length).toBe(51);
  });
});
