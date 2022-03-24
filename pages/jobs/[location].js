import React from "react";
import Link from "next/link";
import Layout from "../../layout/components/Layout";
// import JobList from "../../jobs/components/jobList";
import { wrapper } from "../../redux/store";
import { useSelector } from "react-redux";
import {
  getStelrFullTextSearch,
  selectFullTextSearch,
} from "../../search/slices/stelrFullTextSlice";
import axios from "axios";
import { StyledLpContainer, StyledLpTitle } from "./styles";

export default function LocationLp({ lpData }) {
  //const data = useSelector(selectFullTextSearch);

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
}

LocationLp.getLayout = (page) => (
  <Layout pageTitle="JOBS/<...>/">{page}</Layout>
);

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const lpRes = await axios.get(
      `http://localhost:6767/api/landingpage/${context.params.location}/`
    );
    const lpData = await lpRes.data;
    await store.dispatch(getStelrFullTextSearch({ payload: lpData.name }));

    return { props: { lpData } };
  }
);
