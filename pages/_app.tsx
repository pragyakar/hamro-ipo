import { useEffect, useState } from "react";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import Layout from "../components/Layout";
import { IActiveIPO } from "../services/getActiveIPOs";
import { useRouter } from "next/router";

export interface IAppState {
  selectedIpo: IActiveIPO;
  setSelectedIpo: (ipo: IActiveIPO) => void;
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [selectedIpo, setSelectedIpo] = useState<string>("");

  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };
    const handleEnd = () => {
      setIsLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleEnd);
    router.events.on("routeChangeError", handleEnd);
  }, [router]);

  return (
    <Layout>
      {isLoading ? (
        "Loading..."
      ) : (
        <Component {...pageProps} selectedIpo={selectedIpo} setSelectedIpo={setSelectedIpo} />
      )}
    </Layout>
  );
};

export default MyApp;
