import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Audience from "./components/Audience/Audience";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header/>
        <Banner/>
        <Audience/>
      </main>
    </div>
  );
}
