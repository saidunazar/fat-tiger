import { render } from "@testing-library/react";
import Header from "../shared/Header";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store/store";

describe("Header Component", () => {
  test("Logo should load on when header component renders", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const logo = header.getByTestId("header-logo");
    expect(logo).toBeTruthy();
  });

  test("Check whether the logged in status icon", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const status = header.getByTestId("logged-in-status");
    expect(status.innerHTML).toBe("Sign in");
  });

  test("Check whether the cart is showin nothing when the app loads", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const cart = header.getByTestId("header-cart");
    expect(cart.innerHTML).toBe("Cart ");
  });
});
