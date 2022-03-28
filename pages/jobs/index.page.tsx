import Link from "next/link";
import { NextLayoutComponentType } from "next";

import Layout from "../../layout/Layout";

import { StyledJobsContainer, StyledJobsTitle } from "./styles";

const Jobs: NextLayoutComponentType = () => {
  return (
    <StyledJobsContainer>
      <StyledJobsTitle>THIS IS A LANDINGPAGE</StyledJobsTitle>
      <Link href="/">Back Home</Link>
    </StyledJobsContainer>
  );
};

Jobs.getLayout = (page) => <Layout pageTitle="JOBS">{page}</Layout>;

export default Jobs
