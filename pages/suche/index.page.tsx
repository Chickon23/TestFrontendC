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
    // Note: add here further pairs of <widgetName, UI.ReactFc> e.g.:
    // ["Super Tolle Jobs"]: () => (<>second widget</>),
    // ["Widget3"]: () => (<>third widget</>),
};

const Suche: NextLayoutComponentType<SucheProps> = ({ query, config }) => {
    const widgetSettings = config.payload.WidgetSettings;
    const foundIndex = widgetSettings.findIndex(w => w.Name == JobListWidgetName);
    const jobSetting: JobListSetting = {
        query: query,
        isLandingpage: false,
        isSearch: true,
        seoText: "",
        selectedJob:{} as JobAd,
        Name: widgetSettings[foundIndex].Name,
        Settings: widgetSettings[foundIndex].Settings
    }

    const settings = [...config.payload.WidgetSettings]
    settings[foundIndex] = jobSetting

  return (
    <StyledSucheContainer>
      <StyledSucheTitle>SEARCH RESULT</StyledSucheTitle>
      <Link href="/">Back Home</Link>
      <Widgets widgetsSettings={settings} uiTemplates={SupportedWidgets} />
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
