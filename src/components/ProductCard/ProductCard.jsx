import styles from "./ProductCard.module.css";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  function handleAdd() {
    addToCart(product.id, quantity, product.title);
;
  }

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h3 className={styles.title}>{product.title}</h3>
      <div className={styles.controls}>
        <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
          className={styles.input}
        />
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}
