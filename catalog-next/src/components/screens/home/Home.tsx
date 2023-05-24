import { FC } from "react";
import styles from './Home.module.css'

const Home: FC = () => {
  return (
     <>
      <main className={styles.main}>
        <div className={styles.description}>
          main page
        </div>
      </main>
    </>
  )
};

export default Home;
