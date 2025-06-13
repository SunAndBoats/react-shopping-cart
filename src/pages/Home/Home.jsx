import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido a la tienda</h1>
      <p className={styles.info}>Explora nuestros productos y arma tu carrito.</p>
    </div>
  );
}
