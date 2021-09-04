import Head from "next/head";
import Internships from "../components/Internships";
import LandingPage from "../components/Landing";
import Projects from "../components/Projects";
import PhoneProjects from "../components/Projects.Phone";
import Footer from "../components/Footer";
import { Media, MediaContextProvider } from "../Media";
export default function Home() {
  return (
    <>
      <Head>
        <title>• Kevin D Goveas •</title>
        <link rel="icon" href="/Icon.png" />
      </Head>
      <MediaContextProvider>
        <LandingPage />
        <Media lessThan="sm">
          <PhoneProjects />
        </Media>
        <Media greaterThanOrEqual="sm">
          <Projects />
        </Media>
        <Footer />
      </MediaContextProvider>
    </>
  );
}
