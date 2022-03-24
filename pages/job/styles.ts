import styled from "styled-components";

export const StyledJobContainer = styled.div`
  display: flex;
  flex-direction: column;

  a {
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;
  }

  a:hover {
    text-decoration: underline;
  }

  .notJobList {
    text-align: center;
  }
`;

export const StyledJobTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

export const StyledJobListViewContainer = styled.div`
  display: flex;
`;
