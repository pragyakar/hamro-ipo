import { GetServerSidePropsResult } from "next";

import { IAppState } from "./_app";
import { getActiveIPOs, IActiveIPO } from "../services/iporesult";

interface IHomeProps {
  activeIpos: IActiveIPO[];
}

const Home = (props: IHomeProps & IAppState) => {
  const { activeIpos, setSelectedIpo } = props;
  return (
    <div>
      <main>
        <p>Hamro IPO</p>
        {!activeIpos.length && <p>No Active IPOs</p>}
        {activeIpos.map((ipo, index) => {
          return (
            <p key={index} onClick={() => setSelectedIpo(ipo)}>
              {ipo.name}
            </p>
          );
        })}
      </main>
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
