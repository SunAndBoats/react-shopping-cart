import { useState } from "react";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <div>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} width={100} />
      <p>${product.price}</p>
      <div>
        <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
        />
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>
      <button onClick={() => addToCart(product.id, quantity)}>
        Add to cart
      </button>
    </div>
  );
}
