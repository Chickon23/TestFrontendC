import React, {
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import JobListHeadline from "../JobListHeadline";
import JobTeaser from "../JobTeaser";
import JobView from "../JobView";
import LandingpageView from "../LandingpageView";

import { v4 as uuidv4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { JobAds, JobAd, WidgetEntity } from "../../redux/slices/types";
import { selectConfig } from "../../redux/slices/configSlice";
import {
  getStelrFullTextOffsetSearch,
  selectStelrSearch,
} from "../../redux/slices/stelrSearchSlice";

import {
  StyledJobListWrapper,
  StyledJobListContainer,
  StyledJobListTeaserContainer,
} from "./styles";

import { Widget } from "../../widgets/types";

import useConfigJobCount from "../../hooks/useConfigJobCount";

export const JobListWidgetName = "SearchResultListWidget";

export interface JobListWidget extends WidgetEntity {
  query: string;
  seoText: string;
  selectedJob: JobAd;
  isLandingpage: boolean;
  isSearch: boolean;
}

const JobList: Widget<JobListWidget> = ({
  query,
  seoText,
  selectedJob,
  isLandingpage,
  isSearch,
}) => {
  const [offset, setOffset] = useState(0);

  const isMounted = useRef(false);

  const dispatch = useDispatch();

  const { jobAds, count, countRelevant } = useSelector(selectStelrSearch);
  const { loading } = useSelector((state: AppState) => state.stelrSearch);
  const config = useSelector(selectConfig);

  const limit = useConfigJobCount(config, JobListWidgetName);

  const getMoreJobs = useCallback(async () => {
    await dispatch(getStelrFullTextOffsetSearch({ query, offset, limit }));
  }, [dispatch, query, offset, limit]);

  useEffect(() => {
    if (isMounted.current) {
      getMoreJobs();
    } else {
      isMounted.current = true;
    }
  }, [offset, getMoreJobs]);

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    setOffset(offset + limit);
  };

  return (
    <StyledJobListWrapper>
      <JobListHeadline
        countRelevant={countRelevant}
        query={query !== undefined ? query : ""}
      />
      <StyledJobListContainer>
        <StyledJobListTeaserContainer>
          {jobAds !== undefined ? (
            jobAds.map((job: JobAds, index: number) =>
              index === countRelevant - 1 ? (
                <React.Fragment key={uuidv4()}>
                  <JobTeaser {...job.jobAd} />
                  <span>verwandte und ??hnliche Stellenangebote</span>
                </React.Fragment>
              ) : (
                <JobTeaser key={uuidv4()} {...job.jobAd} />
              )
            )
          ) : (
            <p>No jobs to show...</p>
          )}
          {loading ? (
            <span>loading...</span>
          ) : count - offset > limit ? (
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
