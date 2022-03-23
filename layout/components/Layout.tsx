import React, { FC, ReactNode } from "react";
import Head from "next/head";

type LayoutProps = {
  children: ReactNode;
  pageTitle: string;
};

const Layout: FC<LayoutProps> = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
