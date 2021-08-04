import Head from "next/head";
import { Container } from "react-bootstrap";
import LandingPage from "../components/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>• Kevin D Goveas •</title>
        <link rel="icon" href="/Icon.png" />
      </Head>
      <LandingPage />
    </>
  );
}
