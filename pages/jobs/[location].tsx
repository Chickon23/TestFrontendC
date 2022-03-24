import React from "react";
import Link from "next/link";
import Layout from "../../layout/components/Layout";
// import JobList from "../../jobs/components/jobList";
import { wrapper } from "../../redux/store";

import { StyledLpContainer, StyledLpTitle } from "./styles";
import {NextLayoutComponentType} from "next";
import {getLandingpage} from "../../landingPage/slices/landingpageSlice";

type LocationLpProps = {
    name: string,
    //seoText: string
}

const LocationLp: NextLayoutComponentType<LocationLpProps> = (  ) => {
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

export default LocationLp;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        //getLandingpage({payload: ${context.params.location} })
        const landingpage = await store.dispatch(getLandingpage());

        console.log('landingpage is:', landingpage )
        return {
            props: {
                landingPage: landingpage.payload,
            },
        };
    }
)
