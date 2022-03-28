import React from "react";
import Link from "next/link";
import { NextLayoutComponentType } from "next";

import Layout from "../../layout/Layout";
import JobList from "../../components/JobList";

import { wrapper } from "../../redux/store";
import { useSelector } from "react-redux";
import { JobAd } from "../../redux/slices/types";
import {
  getLandingpage,
  selectLandingpage,
} from "../../redux/slices/landingpageSlice";

import { StyledLpContainer, StyledLpTitle } from "./styles";

const LocationLp: NextLayoutComponentType = () => {
  const data = useSelector(selectLandingpage);

  return (
    <StyledLpContainer>
      <StyledLpTitle>THIS IS A LANDINGPAGE</StyledLpTitle>
      <Link href="/">Back Home</Link>
      {!data ? (
        <></>
      ) : data.jobs?.length === 0 ? (
        <p>No jobs to show!</p>
      ) : (
        <JobList
          query={data.title}
          seoText={data.markDownText}
          isLandingpage={true}
          isSearch={false}
          selectedJob={{} as JobAd}
        />
      )}
    </StyledLpContainer>
  );
};

LocationLp.getLayout = (page) => (
  <Layout pageTitle="JOBS/<...>/">{page}</Layout>
);

export default LocationLp;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    // we need to find a better way or make sure that the backend is designed in a suitable format
    const landingpageUrlKey = context.resolvedUrl.split("?")[0].slice(0, -1);
    await store.dispatch(getLandingpage(landingpageUrlKey));

    return { props: {} };
  }
);
