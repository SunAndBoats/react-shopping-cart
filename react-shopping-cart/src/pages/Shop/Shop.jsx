import { useEffect, useState } from "react";

import ProductCard from "../../components/ProductCard/ProductCard.jsx";


export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      <div>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
