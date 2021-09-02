import Head from "next/head";
import Internships from "../components/Internships";
import LandingPage from "../components/Landing";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>• Kevin D Goveas •</title>
        <link rel="icon" href="/Icon.png" />
      </Head>
      <LandingPage />
      {/* <Internships /> */}
      <Projects />
    </>
  );
}
