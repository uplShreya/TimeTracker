import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TwoHalfLayout from "../src/common/layouts/TwoHalfLayout";
import SideNavBar from "../src/common/layouts/sidenavbar/SideNavBar";
// import TimeTracker from "../src/container/timetracker/TimeTracker";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div>
    </div>
      {/* <TwoHalfLayout /> */}
      {/* <SideNavBar /> */}
    </div>
  );
};

export default Home;
