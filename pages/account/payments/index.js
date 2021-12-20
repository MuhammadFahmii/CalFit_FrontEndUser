import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";

export default function MyPaymentMethods() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Payment Methods</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Payment Methods</h1>
        <Link href="/account" passHref>
          <div className={styles.newsdetail}>Back to Account</div>
        </Link>
        <Link href="/account/payments/add" passHref>
          <div className={styles.newsdetail}>New Payment Methods</div>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
