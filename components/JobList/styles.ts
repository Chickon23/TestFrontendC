import styled from "styled-components";

export const StyledJobListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const StyledJobListContainer = styled.div`
  display: flex;
  justify-content: center;
  max-height: 100vh;

  a {
    margin: 1rem 0;
  }
`;

export const StyledJobListTeaserContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 0 0.5rem 0.5rem;

  span {
    text-align: center;
    margin: 1rem 0;
    font-weight: 700;
  }
`;
