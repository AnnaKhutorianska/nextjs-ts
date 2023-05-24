import { FC, PropsWithChildren } from "react";
import Header from "./header/Header";
import Meta from "../seo/Meta";

import dynamic from "next/dynamic";

const DynamicFooter = dynamic(() => import("./Footer"), {
  ssr: false,
});

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Meta title="next app" description="app">
      <Header />
      {children}
      <DynamicFooter />
    </Meta>
  );
};

export default Layout;
