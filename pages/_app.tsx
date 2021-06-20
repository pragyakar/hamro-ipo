import { useEffect, useState } from "react";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import Layout from "../components/Layout";
import { IActiveIPO } from "../services/getActiveIPOs";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import CONFIG from "../config";

export interface IAppState {
  isLoggedIn: boolean;
  selectedIpo: IActiveIPO;
  setSelectedIpo: (ipo: IActiveIPO) => void;
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [selectedIpo, setSelectedIpo] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

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

  const handleUserLogin = () => {
    setIsLoggedIn(true);
    router.push(`/`);
  };
  

  if (!!CONFIG.requireLogin && !isLoggedIn) {
    return <Login handleUserLogin={handleUserLogin} />;
  }

  return (
    <Layout>
      <Navbar />
      <div className="main-container">
        {isLoading ? (
          "Loading..."
        ) : (
          <Component isLoggedIn={isLoggedIn} selectedIpo={selectedIpo} setSelectedIpo={setSelectedIpo} {...pageProps} />
        )}
      </div>
    </Layout>
  );
};

export default MyApp;
