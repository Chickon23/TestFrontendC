import React, { ReactNode } from "react";
import Header from "../components/generic/Header";
import SeoText from "../components/generic/SeoText";
import LinkBox from "../components/home/LinkBox";
import TopJobs from "../components/home/TopJobs";


import Layout from "../layout/Layout";

const Homepage = () => {
  return (
    <div>
      <Header />
      <TopJobs />
      <LinkBox />
      <SeoText />
    </div>
  );
};

Homepage.getLayout = (page: ReactNode) => (
  <Layout pageTitle="Home Thüringen">{page}</Layout>
);

export default Homepage;
