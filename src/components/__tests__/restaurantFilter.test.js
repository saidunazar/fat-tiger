import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantFilter from "../RestaurantFilter";

describe("Restaurant Filter Component", () => {
  test("Search field is display", () => {
    const filterComponent = render(<RestaurantFilter />);
    const searchField = filterComponent.getByTestId("search-bar");
    expect(searchField).toBeInTheDocument();
  });
});
