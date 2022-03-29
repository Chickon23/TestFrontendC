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
  // Note: add here further pairs of <widgetName, UI.ReactFc> e.g.:
  // ["Super Tolle Jobs"]: () => (<>second widget</>),
  // ["Widget3"]: () => (<>third widget</>),
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

const extendSettings = (extendedSettings: any, widgetSettings: WidgetEntity[]) : WidgetEntity[] => {
    const jobListIndex = widgetSettings.findIndex(
        (w) => w.Name === JobListWidgetName
    );

    const settings = [...widgetSettings];
    settings[jobListIndex] = createJobListWidget(widgetSettings[jobListIndex], extendedSettings);

    return settings;
}

const Suche: NextLayoutComponentType<{ query: string }> = ({ query }) => {
  const { WidgetSettings } = useSelector(selectConfig);

  const extendedSettings: ExtendedSettings = {
        query: query,
        isLandingpage: false,
        isSearch: true,
        seoText:"",
        selectedJob:{} as JobAd};

  const settings = extendSettings(extendedSettings, WidgetSettings);

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

    const {
      config: { entities },
    } = store.getState();

    const limit = useConfigJobCount(entities, JobListWidgetName);

    await store.dispatch(getStelrFullTextSearch({ query, limit }));

    return { props: { query } };
  }
);
