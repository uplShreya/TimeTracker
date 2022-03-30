import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import TwoHalfLayout from "../src/common/layouts/TwoHalfLayout";
import SideNavBar from "../src/common/layouts/sidenavbar/SideNavBar";
import Header from "../src/common/layouts/header/Header";
import ProjectPage from "../src/container/projectscontainer/ProjectPage";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <TwoHalfLayout
        sideView={<SideNavBar />}
        headerView={<Header />}
        renderView={<ProjectPage />}
      />
    </>
  );
}

export default MyApp;
