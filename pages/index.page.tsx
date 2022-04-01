import type { NextLayoutComponentType } from "next";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectAvailableLandingpages } from "../redux/slices/availableLandingpagesSlice";

import { v4 as uuidv4 } from "uuid";

import Layout from "../layout/Layout";
import SearchForm from "../components/SearchForm";
import LpLink from "../components/LpLink";

import { LpLinkProps } from "../components/LpLink/types";

import { StyledTitle, StyledLpSection } from "./homeStyles";
import { Container, Row } from "react-bootstrap";

import { selectConfig } from "../redux/slices/configSlice";

const Home: NextLayoutComponentType = () => {
  const { Landingpages } = useSelector(selectAvailableLandingpages);
  const { Name } = useSelector(selectConfig);

  return (
    <Container>
      <Row>
        <section className="py-5">
          <StyledTitle>Welcome to Frontend-C Portal {Name}</StyledTitle>
        </section>
        <SearchForm />
        <StyledLpSection className="lps-wrapper d-flex flex-column flex-md-row justify-content-center py-5">
          {Landingpages.map(({ Title, UrlKey }: LpLinkProps) => {
            return <LpLink key={uuidv4()} Title={Title} UrlKey={UrlKey} />;
          })}
        </StyledLpSection>
      </Row>
    </Container>
  );
};

Home.getLayout = (page: ReactNode) => (
  <Layout pageTitle="HOMEPAGE">{page}</Layout>
);

export default Home;
