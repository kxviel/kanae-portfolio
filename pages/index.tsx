import Head from "next/head";
import Internships from "../components/Internships";
import LandingPage from "../components/Landing";
import Projects from "../components/Projects";
import { useMediaQuery } from "react-responsive";
import PhoneProjects from "../components/Projects.Phone";
import Footer from "../components/Footer";

export default function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 684px)" });

  return (
    <>
      <Head>
        <title>• Kevin D Goveas •</title>
        <link rel="icon" href="/Icon.png" />
      </Head>
      <LandingPage />
      {/* <Internships /> */}
      {!isTabletOrMobile && <Projects />}
      {isTabletOrMobile && <PhoneProjects />}
      <Footer />
    </>
  );
}
