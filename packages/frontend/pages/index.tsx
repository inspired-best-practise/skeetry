import type {NextPage} from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skeetry</title>
        <meta name="description" content="Social network for travel hunters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Skeetry</h1>

        <p className={styles.description}>Coming soon</p>
      </main>
    </div>
  );
};

export default Home;
