import styles from "./Cart.module.css";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { cartItems } = useCart();

  const isEmpty = Object.keys(cartItems).length === 0;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tu carrito</h2>
      {isEmpty ? (
        <p className={styles.empty}>El carrito está vacío.</p>
      ) : (
        Object.entries(cartItems).map(([id, quantity]) => (
          <div key={id} className={styles.item}>
            Producto ID: {id} — Cantidad: {quantity}
          </div>
        ))
      )}
    </div>
  );
}
