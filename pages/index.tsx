import { useRouter } from "next/router";
import { GetServerSidePropsResult } from "next";

import { IAppState } from "./_app";
import { getActiveIPOs, IActiveIPO } from "../services/getActiveIPOs";

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
    <div>
      {!activeIpos.length && <p>No Active IPOs</p>}
      {activeIpos.map((ipo, index) => {
        return (
          <p key={index} onClick={() => handleIpoClick(ipo)}>
            {ipo.name}
          </p>
        );
      })}
    </div>
  );
};

export const getServerSideProps = async (): Promise<GetServerSidePropsResult<IHomeProps>> => {
  const activeIpos = await getActiveIPOs();
  return {
    props: {
      activeIpos,
    },
  };
};

export default Home;
