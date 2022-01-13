import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from "../../../styles/clubs/[id]/Index.module.css";
import { getGymById } from "../../../src/utils/fetchApi/clubs";
import { TopBar } from "../../../src/components/navigation/TopBar";
import Loading from "../../../src/components/page/Loading";

export default function ClubDetails() {
  const router = useRouter();
  const [gym, setGym] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = router.query.id;
    if (id)
      getGymById(setLoading, setGym, id);
  }, [router.query.id]);

  // if (gym == {})
  console.log(gym);

  return (
    (loading || gym === {}) ? (
      <Loading />
    ) : (
      <div className={styles.container}>
        <Head>
          <title>{gym.name}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <TopBar label={'Clubs'} />

        <div className={styles.bghome} style={{ backgroundImage: `url(${gym?.picture})` }}>
          <div className={styles.gymcard}>
            <h2>{gym.name}</h2>
            <div className={styles.gymaddress}>
              <LocationOnIcon className={styles.locationicon} />
              <p>{gym.address.address}, {gym.address.district}</p>
            </div>
          </div>
        </div>

        <main className={styles.main}>
          <h1 style={{ color: "#fff", fontWeight: 600 }}>About</h1>
          <p style={{
            color: "#fff",
            marginTop: 0,
            fontWeight: 200,
            position: "relative",
            textAlign: "justify",
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis laoreet nibh sit amet vulputate. Pellentesque rutrum lacinia ex, vel vehicula arcu vestibulum at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
          </p>
          <br /><br /><br />
        </main>
      </div>
    )
  );
}