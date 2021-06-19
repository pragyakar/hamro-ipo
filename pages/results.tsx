import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { IAppState } from "./_app";

interface IResultsProps {
  ipoResult: any;
}

const Results = (props: IResultsProps & IAppState) => {
  console.log('@pragyakar props', props);
  const { selectedIpo, ipoResult } = props;
  return (
    <div className="">
      <h1>{selectedIpo.name}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  params
): Promise<GetServerSidePropsResult<IResultsProps>> => {
  const scrip = params.query.scrip;
  return {
    props: { ipoResult: null },
  };
};

export default Results;
