import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";

export default function Cart() {
  const { cartItems } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const cartProductList = Object.entries(cartItems)
    .map(([id, quantity]) => {
      const product = products.find(p => p.id === parseInt(id));
      if (!product) return null;
      return { ...product, quantity };
    })
    .filter(Boolean);

  const total = cartProductList.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Your Cart</h1>
      {cartProductList.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartProductList.map(item => (
            <li key={item.id}>
              {item.title} — {item.quantity} × ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${total.toFixed(2)}</h2>
      <button disabled={cartProductList.length === 0}>
        Proceed to Checkout
      </button>
    </div>
  );
}
