import React, { FC, ReactNode } from "react";

import Head from "next/head";
import Navigation from "../components/generic/Navigation";
import Footer from "../components/generic/Footer";

type LayoutProps = {
  children: ReactNode;
  pageTitle: string;
};

const Layout: FC<LayoutProps> = ({ children, pageTitle }) => {
  return (
    <>
      <Navigation />
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
