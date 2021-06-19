import { useState } from "react";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import Layout from "../components/Layout";
import { IActiveIPO } from "../services/getActiveIPOs";

export interface IAppState {
  selectedIpo: IActiveIPO;
  setSelectedIpo: (ipo: IActiveIPO) => void;
}

const MyApp = ({ Component, pageProps }: AppProps) => {

  const [selectedIpo, setSelectedIpo] = useState<string>('');

  return (
    <Layout>
      <Component {...pageProps} selectedIpo={selectedIpo} setSelectedIpo={setSelectedIpo}/>
    </Layout>
  );
};

export default MyApp;
