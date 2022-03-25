import React, { SyntheticEvent, useCallback, useEffect, useRef, useState } from "react";
import JobListHeadline from "./JobListHeadline";
import JobTeaser from "./JobTeaser";
import JobView from "./JobView";
import LandingpageView from "../landingPage/components/LandingpageView/LandingpageView";
import { v4 as uuidv4 } from "uuid";
import {StyledJobListWrapper, StyledJobListContainer, StyledJobListTeaserContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  getStelrFullTextOffsetSearch,
  selectFullTextSearch,
} from "../search/slices/stelrFullTextSlice";
import { JobAd } from "../search/slices/types";
import { AppState } from "../redux/store";
import { selectStelrIdSearch } from "../search/slices/stelrIdSlice";

type JobList = {
    query: string;
    seoText: string;
    selectedJob: JobAd;
    isLandingpage: boolean;
    isSearch: boolean;
    isJobId: boolean;
}

const JobList = ({
  query,
  seoText,
  selectedJob,
  isLandingpage,
  isSearch,
  isJobId,
} : JobList) => {
  const [offset, setOffset] = useState(0);

  const dispatch = useDispatch();
  const isMounted = useRef(false);

  const { jobAds, count, countRelevant } = useSelector(isJobId ? selectStelrIdSearch: selectFullTextSearch);
  const { loading } = useSelector((state:AppState) => state.stelrFullText);

  const getMoreJobs = useCallback(async () => {
    await dispatch(getStelrFullTextOffsetSearch({ query, offset }));
  },[dispatch,query, offset]);

  useEffect(() => {
    if (isMounted.current) {
      getMoreJobs();
    } else {
      isMounted.current = true;
    }
  }, [offset]);

  const handleClick = (e : SyntheticEvent) => {
    e.preventDefault();
    setOffset(offset + 25);
  };

  return (
    <StyledJobListWrapper>
      <JobListHeadline countRelevant={countRelevant} query={query} />
      <StyledJobListContainer>
        <StyledJobListTeaserContainer>
          {jobAds.map((job, index) =>
            index === countRelevant - 1 ? (
              <React.Fragment key={uuidv4()}>
                <JobTeaser {...job.jobAd} />
                <span>verwandte und ähnliche Stellenangebote</span>
              </React.Fragment>
            ) : (
              <JobTeaser key={uuidv4()} {...job.jobAd} />
            )
          )}
          {loading ? (
            <span>loading...</span>
          ) : count - offset > 25 ? (
            <a onClick={handleClick}>Mehr Jobs anzeigen</a>
          ) : (
            <></>
          )}
        </StyledJobListTeaserContainer>
        {isLandingpage ? (
          <LandingpageView seoText={seoText} />
        ) : isSearch ? (
          <></>
        ) : (
          <JobView {...selectedJob}></JobView>
        )}
      </StyledJobListContainer>
    </StyledJobListWrapper>
  );
};

export default JobList;