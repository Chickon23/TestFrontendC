import React from "react";
import Link from "next/link";
import { NextLayoutComponentType } from "next";

import Layout from "../../layout/components/Layout";
// import JobList from "../../jobs/components/jobList";

import { wrapper } from "../../redux/store";
import { useSelector } from "react-redux";
import {
  getLandingpage,
  selectLandingpage,
} from "../../landingPage/slices/landingpageSlice";

import { LocationLpProps } from "./types";

import { StyledLpContainer, StyledLpTitle } from "./styles";

const LocationLp: NextLayoutComponentType<LocationLpProps> = () => {
  const data = useSelector(selectLandingpage);

  return (
    <StyledLpContainer>
      <StyledLpTitle>THIS IS A LANDINGPAGE</StyledLpTitle>
      <Link href="/">Back Home</Link>
      {/* {!data ? (
        <></>
      ) : data.count === 0 ? (
        <p>No jobs to show!</p>
      ) : (
        <JobList
          count={data.count}
          countRelevant={data.countRelevant}
          query={lpData.name}
          seoText={lpData.seoText}
          jobs={data.jobAds}
          isLandingpage={true}
          isSearch={false}
        />
      )} */}
    </StyledLpContainer>
  );
};

LocationLp.getLayout = (page) => (
  <Layout pageTitle="JOBS/<...>/">{page}</Layout>
);

export default LocationLp;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const landingpageUrlKey = context.resolvedUrl;
    await store.dispatch(getLandingpage(landingpageUrlKey));

    return { props: {} };
  }
);
