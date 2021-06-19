import { GetServerSidePropsResult } from "next";
import { getActiveIPOs, IActiveIPO } from "../services/iporesult";
import handleApiError from "../utils/handleApiError";

interface IHomeProps {
  activeIpos: IActiveIPO[];
}

const Home = (props: IHomeProps) => {
  const { activeIpos } = props;

  return (
    <div>
      <main>
        <p>Hamro IPO</p>
        {activeIpos.map((ipo, index) => {
          return <p key={index}>{ipo.name}</p>
        })}
      </main>
    </div>
  );
};

export const getServerSideProps = async (): Promise<GetServerSidePropsResult<IHomeProps>> => {
  try {
    const activeIpos = await getActiveIPOs();

    return {
      props: { activeIpos },
    };
  } catch (error) {
    handleApiError(error);
    return {
      props: { activeIpos: [] },
    };
  }
};

export default Home;
