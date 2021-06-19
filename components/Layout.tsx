import Footer from "./Footer";
import SiteHead from "./SiteHead";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = (props: ILayoutProps) => {
  const { children } = props;
  return (
    <div className="layout">
      <SiteHead />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
