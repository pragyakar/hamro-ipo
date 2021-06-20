import { XCircleIcon, CheckCircleIcon } from "@heroicons/react/outline";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import CONFIG from "../config";
import { checkResult, IPeople, IResult } from "../services/checkResult";
import { IAppState } from "./_app";

interface IResultsProps {
  ipoResult: IResult[];
}

const Results = (props: IResultsProps & IAppState) => {
  const { selectedIpo, ipoResult } = props;
  return (
    <div className="results-container">
      <div className="results">
        <span className="results__title">{selectedIpo.scrip}</span>
        <span className="results__sub-title">({selectedIpo.name})</span>
        {ipoResult.map((people, index) => {
          return (
            <div
              key={index}
              className={`results__list-item ${
                !!people.result ? "results__list-item--success" : "results__list-item--fail"
              }`}
            >
              <span>{people.name}</span>
              <span>
                {people.result ? (
                  <CheckCircleIcon className="results__icon results__icon--success" />
                ) : (
                  <XCircleIcon className="results__icon results__icon--fail" />
                )}
              </span>
            </div>
          );
        })}
      </div>
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
