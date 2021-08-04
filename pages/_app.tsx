import type { AppProps } from "next/app";
import "../styles/MainStyles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
