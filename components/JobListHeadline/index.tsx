import React from "react";

import {
  StyledJobListHeadlineContainer,
  StyledJobListHeadlineText,
  StyledJobListHeadlineCount,
} from "./styles";

import { capitalise, umlautEncode } from "../../utils/helpers";

const JobListHeadline = ({
  countRelevant,
  query,
}: {
  countRelevant: number;
  query: string;
}) => {
  const headline =
    query === "" && countRelevant > 10000 ? "Über 10.000 Jobs" : "";

  return (
    <StyledJobListHeadlineContainer>
      {headline !== "" ? (
        <StyledJobListHeadlineText>{headline}</StyledJobListHeadlineText>
      ) : (
        <>
          <StyledJobListHeadlineCount>
            {countRelevant}
          </StyledJobListHeadlineCount>
          <StyledJobListHeadlineText>
            <span>Stellenangebote zu</span> {capitalise(umlautEncode(query))}
          </StyledJobListHeadlineText>
        </>
      )}
    </StyledJobListHeadlineContainer>
  );
};

export default JobListHeadline;
