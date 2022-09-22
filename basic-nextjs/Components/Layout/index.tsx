import React, { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./Layout.module.css";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

const Layout = (props: LayoutProps) => {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>Next JS | {pageTitle}</title>
        <meta name="description" content="Website NextJs Basic" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
