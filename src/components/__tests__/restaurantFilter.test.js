import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantFilter from "../RestaurantFilter";

describe("Restaurant Filter Component", () => {
  let filterComponent;
  beforeEach(() => {
    filterComponent = render(<RestaurantFilter />);
  });
  test("Search field is display", () => {
    const searchField = filterComponent.getByTestId("search-bar");
    expect(searchField).toBeInTheDocument();
  });
});
