import React from "react";
import Link from "next/link";
import Layout from "../../layout/components/Layout";
// import JobList from "../../jobs/components/jobList";
import { wrapper } from "../../redux/store";
import { useSelector } from "react-redux";
import {
  getStelrIdSearch,
  selectStelrIdSearch,
} from "../../search/slices/stelrIdSlice";
import { StyledJobContainer, StyledJobTitle } from "./styles";

export default function JobId() {
  // const data = useSelector(selectStelrIdSearch);

  return (
    <StyledJobContainer>
      <StyledJobTitle>JOB-ID LANDINGPAGE</StyledJobTitle>
      <Link href="/">Back Home</Link>
      {/* {data.jobs.length === 0 ? (
        <p className="notJobList">No jobs to show!</p>
      ) : (
        <JobList
          count={data.count}
          countRelevant={data.countRelevant}
          query={data.jobs[0].jobAd.positionTitle
            .split("(m/w/d)")
            .join(" ")
            .trim()}
          jobs={data.jobs}
          selectedJob={data.jobs[0]}
          isLandingpage={false}
          isSearch={false}
        />
      )} */}
    </StyledJobContainer>
  );
}

JobId.getLayout = (page) => <Layout pageTitle="JOB-ID">{page}</Layout>;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(
      getStelrIdSearch({
        payload: context.params["jobId"],
      })
    );
  }
);
