import type { NextLayoutComponentType } from "next";
import { ReactNode } from "react";

import Layout from "../layout/components/Layout";
import SearchForm from "../search/components/SearchForm";

import { StyledMainContainer, StyledMain, StyledTitle } from "./styles";

const Home: NextLayoutComponentType = () => {
  return (
    <StyledMainContainer>
      <StyledMain>
        <StyledTitle>Welcome to Frontend-C Prototype</StyledTitle>
        <SearchForm />
        {/* {landingPages.map(({ location, name }, idx) => {
          return <LpLink key={idx} location={location} name={name} />;
        })} */}
      </StyledMain>
    </StyledMainContainer>
  );
};

Home.getLayout = (page: ReactNode) => (
  <Layout pageTitle="HOMEPAGE">{page}</Layout>
);

export default Home;
