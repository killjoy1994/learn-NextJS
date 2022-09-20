import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <h1 className={styles["title-homepage"]}>Welcome Bagus Nugroho</h1>
      <Footer />
    </>
  );
};

export default Home;
