import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Audience from "./components/Audience/Audience";
import Features from "./components/Features/Features";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Banner />
        <Features />
        <Audience />
        <Team />
        <Footer />
      </main>
    </div>
  );
}
