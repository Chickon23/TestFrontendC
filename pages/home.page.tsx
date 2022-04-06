import React, { ReactNode, useMemo } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import GridSystem from "../components/generic/GridSystem";
import Header from "../components/generic/Header";
import SeoText from "../components/generic/SeoText";
import LinkBox from "../components/home/LinkBox";
import TopJobsC from "../components/home/TopJobs";

import Layout from "../layout/Layout";
import { getHomeData, selectHomeInfo } from "../redux/slices/homepageSlice";
import { wrapper } from "../redux/store";

export const getServerSideProps = wrapper.getServerSideProps(
  // @ts-ignore
  (store) => async () => {
    await store.dispatch(getHomeData());
  }
);

// Should be set in backend
const topJobsOrder = 1;
const linkBoxOrder = 2;
const seoTextOrder = 3;

const COMPONENTS = {
  topJobs: { tag: TopJobsC, order: topJobsOrder },
  linkBox: { tag: LinkBox, order: linkBoxOrder },
  seoText: { tag: SeoText, order: seoTextOrder },
};

const Homepage = ({ exclude = [""] }) => {
  const components = useMemo(
    () =>
      Object
        // convert to array of [key, value]
        .entries(COMPONENTS)
        // remove excluded components
        .filter(([key]) => !exclude.includes(key))
        // convert to just value
        .map(([key, component]) => component)
        // sort by order
        .sort(({ order: orderA }, { order: orderB }) => orderA - orderB)
        // convert to just tag
        .map(({ tag }) => tag),
    [exclude]
  );

  const {
    // @ts-ignore
    BagPart: { ContentItems },
  } = useSelector(selectHomeInfo);

  const getDisplayTexteArr = () =>
    // @ts-ignore
    ContentItems.map(({ DisplayText }) => DisplayText);

  // Should be set in backend
  const sectionColors = ["#d9d9d9", "lightblue", "green"];

  return (
    <div>
      <Header />
      <GridSystem colCount={1} md={12} xxl={12}>
        {components.map((Component) => (
          <Component
            key={uuidv4()}
            // @ts-ignore
            color={sectionColors}
            displayText={getDisplayTexteArr()}
          />
        ))}
      </GridSystem>
    </div>
  );
};

Homepage.getLayout = (page: ReactNode) => (
  <Layout pageTitle="Home Thüringen">{page}</Layout>
);

export default Homepage;
