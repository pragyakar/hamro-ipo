import Head from "next/head";

interface IPageHeadProps {
  title?: string;
}

const PageHead = (props: IPageHeadProps) => {
  const { title } = props;
  const pageTitle = title ? `${title} | ` : '';

  return (
    <Head>
      <title>{pageTitle} Hamro IPO</title>
      <meta name="description" content="Check NEPSE IPO results in bulk" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default PageHead;
