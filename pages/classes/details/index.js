import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/home.module.css";

export default function ClassDetails() {
  return (
    <div className={styles.container}>
      <Head>
        <title>X Class</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Class Details</h1>
        <Link href="/order" passHref>
            <div className={styles.newsdetail}>Book Now</div>
        </Link>
        <Link href="/classes" passHref>
            <div className={styles.newsdetail}>Back to Classes</div>
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