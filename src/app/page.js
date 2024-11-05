import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header/>
        <Banner/>
        
      </main>
    </div>
  );
}
