import type { NextLayoutComponentType } from "next";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectAvailableLandingpages } from "../landingPage/slices/availableLandingpagesSlice";

import { v4 as uuidv4 } from "uuid";

import Layout from "../layout/components/Layout";
import SearchForm from "../search/components/SearchForm";
import LpLink from "../landingPage/components/LpLink/LpLink";

import { LpLinkProps } from "../landingPage/components/LpLink/types";

import { StyledMainContainer, StyledMain, StyledTitle } from "./styles";

const Home: NextLayoutComponentType = () => {
  const { Landingpages } = useSelector(selectAvailableLandingpages);

  return (
    <StyledMainContainer>
      <StyledMain>
        <StyledTitle>Welcome to Frontend-C Prototype</StyledTitle>
        <SearchForm />
        {Landingpages.map(({ Title, UrlKey }: LpLinkProps) => {
          return <LpLink key={uuidv4()} Title={Title} UrlKey={UrlKey} />;
        })}
      </StyledMain>
    </StyledMainContainer>
  );
};

Home.getLayout = (page: ReactNode) => (
  <Layout pageTitle="HOMEPAGE">{page}</Layout>
);

export default Home;
