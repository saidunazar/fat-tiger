import { fireEvent, render } from "@testing-library/react";
import Cart from "../cart";
import { Provider } from "react-redux";
import store from "../../utils/store/store";
import { addItem } from "../../utils/store/cartSlice";

describe("Cart Component", () => {
  let cartComponent;
  store.dispatch(
    addItem({
      items: [
        {
          id: "30564604",
          name: "Bhalla Papdi",
          description:
            "A mix of vada and papdi drenched in thick yoghurt drizzled with tangy tamarind and spicy green chutneys",
          price: "13900",
          imageId: "hq8i4f0svlixpwofmlh3",
        },
        {
          id: "30564605",
          name: "Kozhi Fry",
          description: "Tangy tamarind and spicy green chutneys",
          price: "13900",
          imageId: "hq8i4f0svlixpwofmlh3",
        },
      ],
    })
  );
  beforeEach(() => {
    cartComponent = render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
  });
  test("Cart component is loaded", () => {
    expect(cartComponent.getByTestId("cart-container"));
  });
  test("Remove cart item is working", () => {
    const removeIcon = cartComponent.getByTestId("remove-icon-0");
    fireEvent.click(removeIcon);
    const cartList = cartComponent.getByTestId("cart-items-container");
    expect(cartList.children.length).toBe(1);
  });
  test("Remove all items working", () => {
    const removeAllBtn = cartComponent.getByTestId("remove-all-btn");
    fireEvent.click(removeAllBtn);
    const cartList = cartComponent.getByTestId("cart-items-container");
    expect(cartList.children.length).toBe(0);
  });
});
