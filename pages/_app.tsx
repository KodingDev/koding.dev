import "../styles/globals.css";
import "@fontsource/roboto";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo titleTemplate="Koding | %s" />
      <Component {...pageProps} />
    </>
  );
}

// noinspection JSUnusedGlobalSymbols
export default App;
