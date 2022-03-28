import React from "react";
import { JobAd } from "../search/slices/types";
import { StyledJobTeaserContainer, StyledJobTeaserInfo } from "./styles";

const JobTeaser = ({
  id,
  logoUrl,
  positionTitle,
  companyName,
  endDate,
  region,
}: JobAd) => {
  return (
    <StyledJobTeaserContainer>
      <a href={`/job/${id}/`} title={`jobTeaserLink-${id}`} />
      <img src={logoUrl} />
      <StyledJobTeaserInfo>
        <h4>{positionTitle}</h4>
        <h5>{companyName}</h5>
        <p>{endDate.split("T")[0]}</p>
        <p>{region}</p>
      </StyledJobTeaserInfo>
    </StyledJobTeaserContainer>
  );
};

export default JobTeaser;
