import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function about() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About!</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to about page!</h1>
      </main>
    </div>
  );
}
