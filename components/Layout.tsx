import SiteHead from "./SiteHead";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = (props: ILayoutProps) => {
  const { children } = props;
  return (
    <div className="layout">
      <SiteHead />
      {children}
    </div>
  );
};

export default Layout;
