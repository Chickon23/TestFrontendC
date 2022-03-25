import React from "react";
import Link from "next/link";
import { NextLayoutComponentType } from "next";

import Layout from "../../layout/components/Layout";
import JobList from "../../jobs/JobList";

import { wrapper } from "../../redux/store";
import { useSelector } from "react-redux";
import {
  getStelrIdSearch,
  selectStelrIdSearch,
} from "../../search/slices/stelrIdSlice";

import { StyledJobContainer, StyledJobTitle } from "./styles";

const JobId: NextLayoutComponentType = () => {
  const data = useSelector(selectStelrIdSearch);

  return (
    <StyledJobContainer>
      <StyledJobTitle>JOB-ID LANDINGPAGE</StyledJobTitle>
      <Link href="/">Back Home</Link>
      {data.jobAds.length === 0 ? (
        <p className="notJobList">No jobs to show!</p>
      ) : (
        <JobList
          query={data.jobAds[0].jobAd.positionTitle
            .split("(m/w/d)")
            .join(" ")
            .trim()}
          selectedJob={data.jobAds[0].jobAd}
          isLandingpage={false}
          isSearch={false}
          seoText="" // placeholder only
          isJobId={true}
        />
      )}
    </StyledJobContainer>
  );
};

JobId.getLayout = (page) => <Layout pageTitle="JOB-ID">{page}</Layout>;

export default JobId;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const jobId =
      context.params !== undefined && context.params.jobId !== undefined
        ? context.params.jobId
        : "";

    await store.dispatch(getStelrIdSearch({ jobId }));

    return { props: {} };
  }
);
