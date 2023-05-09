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

  test("Spinner is showing", async () => {
    const { getByTestId } = render(
      <StaticRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </StaticRouter>
    );
    const loader = getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  test("Restaurants are listing", async () => {
    const { getByTestId } = render(
      <StaticRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </StaticRouter>
    );
    await waitFor(() =>
      expect(getByTestId("restaurant-list")).toBeInTheDocument()
    );
    const resList = getByTestId("restaurant-list");
    expect(resList.children.length).toBe(15);
  });
});
