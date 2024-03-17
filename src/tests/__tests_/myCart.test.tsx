import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyCart from "../../component/myCart";

test(" renders My cart", async () => {
  render(<MyCart />);

  const myCartHeading = screen.getByRole("heading", {
    name: "My Cart",
  });

  expect(myCartHeading).toBeInTheDocument();
});

test('renders total cost'), () => {
  render( <MyCart />);

  const totalCost = screen.getByRole('paragraph',{name:'Total Cost'})

  expect(totalCost).toBeInTheDocument();
}

