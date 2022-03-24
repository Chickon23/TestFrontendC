import React from "react";
import Link from "next/link";
// import JobList from "../../jobs/components/jobList";
import Layout from "../../layout/components/Layout";
import { wrapper } from "../../redux/store";
import { useSelector } from "react-redux";
import {
  getStelrFullTextSearch,
  selectFullTextSearch,
} from "../../search/slices/stelrFullTextSlice";
import { StyledSucheContainer, StyledSucheTitle } from "./styles";

export default function Suche({ fulltext }) {
  // const data = useSelector(selectFullTextSearch);

  return (
    <StyledSucheContainer>
      <StyledSucheTitle>SEARCH RESULT</StyledSucheTitle>
      <Link href="/">Back Home</Link>
      {/* {!data ? (
          <></>
        ) : data.count === 0 ? (
          <p className="notJobList">No jobs to show!</p>
        ) : (
          <JobList
            count={data.count}
            countRelevant={data.countRelevant}
            query={fulltext}
            jobs={data.jobAds}
            isLandingpage={false}
            isSearch={true}
          />
        )} */}
    </StyledSucheContainer>
  );
}

Suche.getLayout = (page) => <Layout pageTitle="SUCHE">{page}</Layout>;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const fulltext = Boolean(context.query.voll) ? context.query.voll : "";
    await store.dispatch(getStelrFullTextSearch({ payload: fulltext }));

    return { props: { fulltext } };
  }
);
