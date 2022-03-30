import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TwoHalfLayout from "../src/common/layouts/TwoHalfLayout";
import SideNavBar from "../src/common/layouts/sidenavbar/SideNavBar";
import Header from "../src/common/layouts/header/Header";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div></div>
      {/* <TwoHalfLayout /> */}
      {/* <SideNavBar /> */}
      <Header />
    </div>
  );
};

export default Home;
