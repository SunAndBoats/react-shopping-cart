import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();
  const totalItems = Object.values(cartItems).reduce((sum, n) => sum + n, 0);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart ({totalItems})</Link> {/* 👈 nuevo */}
    </nav>
  );
}
