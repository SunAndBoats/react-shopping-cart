/*import { render, screen, fireEvent } from "@testing-library/react";
import { CartProvider } from "../../context/CartContext";
import ProductCard from "./ProductCard";

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 10,
  image: "https://via.placeholder.com/150",
};

test("adds items to cart", () => {
  render(
    <CartProvider>
      <ProductCard product={mockProduct} />
    </CartProvider>
  );

  fireEvent.click(screen.getByText("Add to cart"));
  // puedes testear efectos colaterales con mocks del contexto o spies
});
*/