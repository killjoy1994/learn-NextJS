import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../Components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout pageTitle="Homepage">
        <h1 className={styles["title-homepage"]}>Welcome Bagus Nugroho</h1>
      </Layout>
    </>
  );
};

export default Home;
