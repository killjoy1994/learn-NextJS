import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../Components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <h1>Welcome Bagus Nugroho</h1>
    </>
  );
};

export default Home;
