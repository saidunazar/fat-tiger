import { render, waitFor } from "@testing-library/react";
import Home from "../Home";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store/store";
import apiData from "../../utils/mock-data/mockData";
import "@testing-library/jest-dom";

describe("Home Component", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve(apiData);
        },
      });
    });
  });

  test("Spinner is showing", () => {
    const home = render(
      <StaticRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </StaticRouter>
    );

    const loader = home.getByTestId("loader");
    expect(loader).toBeTruthy();
  });

  test("Restaurants are listing", async () => {
    const home = render(
      <StaticRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </StaticRouter>
    );
    await waitFor(() => expect(home.getByTestId("restaurant-list")));
    const resList = home.getByTestId("restaurant-list");
    expect(resList.children.length).toBe(15);
  });
});
