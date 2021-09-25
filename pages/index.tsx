import type { NextPage } from "next";
import Head from "next/head";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kevin D Goveas</title>
        <meta name="Portfolio" content="Frontend Developer" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
