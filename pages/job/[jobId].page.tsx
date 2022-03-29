import React from "react";
import Link from "next/link";
import { NextLayoutComponentType } from "next";

import Layout from "../../layout/Layout";
import JobList, { JobListWidgetName } from "../../components/JobList";

import { wrapper } from "../../redux/store";
import { useSelector } from "react-redux";
import {
  getStelrIdSearch,
  selectStelrSearch,
} from "../../redux/slices/stelrSearchSlice";

import { StyledJobContainer, StyledJobTitle } from "./styles";
import { selectConfig } from "../../redux/slices/configSlice";
import useConfigJobCount from "../../hooks/useConfigJobCount";

const JobId: NextLayoutComponentType = () => {
  const data = useSelector(selectStelrSearch);
  const { WidgetSettings } = useSelector(selectConfig);
  const jobListSetting = WidgetSettings.find(
    (w) => w.Name == JobListWidgetName
  )!;

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
          Name={jobListSetting.Name}
          Settings={jobListSetting.Settings}
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

    const {
      config: { entities },
    } = store.getState();

    const limit = useConfigJobCount(entities, JobListWidgetName);

    await store.dispatch(getStelrIdSearch({ jobId, limit }));

    return { props: {} };
  }
);
