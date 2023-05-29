import { FC } from "react";
import styles from "./Home.module.css";
import { IProducts } from "@/services/items.services";
import { useRouter } from "next/router";
import Link from "next/link";

const Home: FC<IProducts[]> = ({ products }) => {
  console.log("products", products);
  
  return (
    <>
      <main className={styles.main}>
        {products?.length ? (
          products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div>{product.title}</div>
              <Link href={`/product/${product.id}`}>more</Link>
            </div>
          ))
        ) : (
          <div>no products</div>
        )}
      </main>
    </>
  );
};

export default Home;
