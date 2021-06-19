import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { CONFIG } from "../config";
import { checkResult, IPeople, IResult } from "../services/checkResult";
import { IAppState } from "./_app";

interface IResultsProps {
  ipoResult: IResult[];
}

const Results = (props: IResultsProps & IAppState) => {
  const { selectedIpo, ipoResult } = props;
  return (
    <div className="">
      <h1>{selectedIpo.name}</h1>
      {ipoResult.map((people, index) => {
        return (
          <p key={index}>
            {people.name}: {people.result ? "Payo" : "Payena"}
          </p>
        );
      })}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  params
): Promise<GetServerSidePropsResult<IResultsProps>> => {
  const companyShareId = params.query.i || "";
  const people: IPeople[] = CONFIG.boids;
  const ipoResult = await checkResult(companyShareId, people);

  return {
    props: { ipoResult },
  };
};

export default Results;
