import React from "react";
import Link from "next/link";
import { NextLayoutComponentType } from "next";

import Layout from "../../layout/components/Layout";
import JobList from "../../jobs/JobList";

import { wrapper } from "../../redux/store";
import { getStelrFullTextSearch } from "../../search/slices/stelrSearchSlice";

import { StyledSucheContainer, StyledSucheTitle } from "./styles";
import { JobAd } from "../../search/slices/types";

const Suche: NextLayoutComponentType<{ query: string }> = ({ query }) => {
  return (
    <StyledSucheContainer>
      <StyledSucheTitle>SEARCH RESULT</StyledSucheTitle>
      <Link href="/">Back Home</Link>
      <JobList
        query={query}
        isLandingpage={false}
        isSearch={true}
        seoText=""
        selectedJob={{} as JobAd}
      />
    </StyledSucheContainer>
  );
};

Suche.getLayout = (page) => <Layout pageTitle="SUCHE">{page}</Layout>;

export default Suche;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const query =
      context.query !== undefined && context.query.voll !== undefined
        ? context.query.voll
        : "";

    await store.dispatch(getStelrFullTextSearch({ query }));

    return { props: { query } };
  }
);
