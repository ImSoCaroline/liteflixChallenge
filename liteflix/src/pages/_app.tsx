import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from "@./components/layout.tsx";
import "@./styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Liteflix</title>
        <meta
          name="description"
          content="Liteflix coding challenge generated with create next app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
