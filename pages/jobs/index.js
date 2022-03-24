import Link from "next/link";
import Layout from "../../layout/components/Layout";
import { StyledJobsContainer, StyledJobsTitle } from "./styles";

export default function Jobs() {
  return (
    <StyledJobsContainer>
      <StyledJobsTitle>THIS IS A LANDINGPAGE</StyledJobsTitle>
      <Link href="/">Back Home</Link>
    </StyledJobsContainer>
  );
}

Jobs.getLayout = (page) => <Layout pageTitle="JOBS">{page}</Layout>;
