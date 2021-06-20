import { useRouter } from "next/router";
import { GetServerSidePropsResult } from "next";

import { IAppState } from "./_app";
import { getActiveIPOs, IActiveIPO } from "../services/getActiveIPOs";
import IpoList from "../components/IpoList";

interface IHomeProps {
  activeIpos: IActiveIPO[];
}

const Home = (props: IHomeProps & IAppState) => {
  const router = useRouter();
  const { activeIpos, setSelectedIpo } = props;

  const handleIpoClick = (ipo: IActiveIPO) => {
    setSelectedIpo(ipo);
    router.push(`/results?i=${ipo.id}&s=${ipo.scrip}`);
  };

  return (
    <div className="home-container">
      {!activeIpos.length && <p>No Active IPOs</p>}
      {!!activeIpos.length && <IpoList ipoList={activeIpos} handleIpoClick={handleIpoClick} />}
    </div>
  );
};

export const getServerSideProps = async (): Promise<GetServerSidePropsResult<IHomeProps>> => {
  const activeIpos = await getActiveIPOs();
  activeIpos.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1; 
    return 0; 
  });
  return {
    props: {
      activeIpos,
    },
  };
};

export default Home;
