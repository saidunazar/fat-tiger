import { render } from "@testing-library/react";
import Header from "../shared/Header";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store/store";

describe("Header Component", () => {
  let headerComponent;
  beforeEach(() => {
    headerComponent = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  });
  test("Logo should load on when header component renders", () => {
    const logo = headerComponent.getByTestId("header-logo");
    expect(logo).toBeTruthy();
  });

  test("Check whether the logged in status icon", () => {
    const status = headerComponent.getByTestId("logged-in-status");
    expect(status.innerHTML).toBe("Sign in");
  });

  test("Check whether the cart is showin nothing when the app loads", () => {
    const cart = headerComponent.getByTestId("header-cart");
    expect(cart.innerHTML).toBe("Cart ");
  });
});
