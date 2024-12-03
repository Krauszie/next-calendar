import Header from "@/components/header";

import { ReactNode } from "react";

type LayoutItem = {
  children: ReactNode;
  pathname: string;
};

const Layout = ({ children, pathname }: LayoutItem) => {
  return (
    <>
      <Header pathname={pathname} />
      {children}
    </>
  );
};

export default Layout;
