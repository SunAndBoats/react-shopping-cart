import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { cartItems } = useCart();
  const totalItems = Object.values(cartItems).reduce((sum, n) => sum + n, 0);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/shop" className={styles.link}>Shop</Link>
      <Link to="/cart" className={styles.link}>
        Cart <span className={styles.cartCount}>{totalItems}</span>
      </Link>
    </nav>
  );
}
