import React from "react";
import Link from "next/link";
import { NextLayoutComponentType } from "next";

import Layout from "../../layout/components/Layout";
import JobList, {JobListSetting, JobListWidgetName } from "../../jobs/JobList";

import { wrapper } from "../../redux/store";
import { getStelrFullTextSearch } from "../../search/slices/stelrSearchSlice";

import { StyledSucheContainer, StyledSucheTitle } from "./styles";
import { JobAd } from "../../search/slices/types";
import { ConfigEntity, WidgetSettingEntity } from "../../config/slices/types";
import { Widget, WidgetSetting } from "../../widgets/types";
import { Widgets } from "../../widgets/Widgets";

type SucheProps = {
    config: {
        payload: ConfigEntity
    },
    query: string
}

const SupportedWidgets: Record<string, Widget<any>> = {
    [JobListWidgetName]: JobList,
};

const Suche: NextLayoutComponentType<SucheProps> = ({ query, config }) => {
  // TODO: find a better way to do the lines below
  const jobSetting = config.payload.WidgetSettings.find(w => w.Name == JobListWidgetName) as JobListSetting;
  jobSetting.query = query;
  jobSetting.isLandingpage = false;
  jobSetting.isSearch = true;
  jobSetting.seoText = "";
  jobSetting.selectedJob = {} as JobAd;

  return (
    <StyledSucheContainer>
      <StyledSucheTitle>SEARCH RESULT</StyledSucheTitle>
      <Link href="/">Back Home</Link>
      <Widgets widgetsSettings={config.payload.WidgetSettings} uiTemplates={SupportedWidgets} />
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
