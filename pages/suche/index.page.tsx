import React from "react";
import Link from "next/link";
import { NextLayoutComponentType } from "next";

import Layout from "../../layout/Layout";
import JobList, {
  JobListWidget,
  JobListWidgetName,
} from "../../components/JobList";

import { wrapper } from "../../redux/store";
import { JobAd, WidgetEntity } from "../../redux/slices/types";
import { getStelrFullTextSearch } from "../../redux/slices/stelrSearchSlice";

import { StyledSucheContainer, StyledSucheTitle } from "./styles";
import { Widget } from "../../widgets/types";
import { selectConfig } from "../../redux/slices/configSlice";
import { useSelector } from "react-redux";
import { Widgets } from "../../widgets/Widgets";
import useConfigJobCount from "../../hooks/useConfigJobCount";

const SupportedWidgets: Record<string, Widget<any>> = {
  [JobListWidgetName]: JobList,
  ["Super Tolle Jobs"]: () => (<StyledSucheTitle>second widget </StyledSucheTitle>),
};

type ExtendedSettings = {
    query: string,
    isLandingpage: boolean,
    isSearch: boolean,
    seoText: string,
    selectedJob: JobAd,
};

const createJobListWidget = (widgetEntity: WidgetEntity, extendedSettings: ExtendedSettings): JobListWidget => {
    return {
        ...widgetEntity,
        ...extendedSettings
    };
}

const extendSettings = (widgetSettings: WidgetEntity[], widgetName: string, extendedSettings: ExtendedSettings ) : WidgetEntity[] => {
    const index = widgetSettings.findIndex(w => w.Name === widgetName);

    const settings = [...widgetSettings];
    settings[index] = createJobListWidget(widgetSettings[index], extendedSettings);

    return settings;
}

const Suche: NextLayoutComponentType<{ query: string }> = ({ query }) => {
  const { WidgetSettings } = useSelector(selectConfig);

  const jobListSettings: ExtendedSettings = {
        query: query,
        isLandingpage: false,
        isSearch: true,
        seoText:"",
        selectedJob:{} as JobAd};

  return (
    <StyledSucheContainer>
      <StyledSucheTitle>SEARCH RESULT</StyledSucheTitle>
      <Link href="/">Back Home</Link>
      <Widgets widgetsSettings={extendSettings(WidgetSettings, JobListWidgetName, jobListSettings)} uiTemplates={SupportedWidgets} />
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

    const {
      config: { entities },
    } = store.getState();

    const limit = useConfigJobCount(entities, JobListWidgetName);

    await store.dispatch(getStelrFullTextSearch({ query, limit }));

    return { props: { query } };
  }
);
