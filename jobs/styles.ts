import styled from "styled-components";

export const StyledJobViewContainer = styled.div`
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-y: scroll;
  width: 80%;
  margin: 0 0.5rem 0.5rem;
`;

export const StyledJobViewInfo = styled.div`
  padding: 1rem;

  h4 {
    margin: 0;
    font-size: 24px;
  }

  h5 {
    margin: 0;
    font-size: 20px;
  }

  p {
    margin: 0;
  }
`;

export const StyledJobViewMinorInfo = styled.div`
  display: flex;
  margin-top: 1rem;

  p:last-child {
    margin-left: 1rem;
  }
`;

export const StyledJobViewAd = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 200px;
    height: auto;
    margin: 0 auto;
  }

  button {
    width: 30%;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  p {
    text-align: left;
  }
`;

export const StyledJobTeaserContainer = styled.div`
  border: 1px solid black;
  border-radius: 0.5rem;
  display: flex;
  margin: 0.2rem 0;
  padding: 1rem;
  position: relative;

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-top: 0;
  }

  img {
    max-width: 100px;
    max-height: 45px;
    width: 100px;
    height: 45px;
  }
`;

export const StyledJobTeaserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 300px;
  padding-left: 1.5rem;

  h4 {
    margin: 0;
  }

  h5 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

export const StyledJobListHeadlineContainer = styled.div`
  display: flex;
  padding-left: 1rem;
`;

export const StyledJobListHeadlineCount = styled.span`
  align-self: center;
  font-size: 16px;
  font-weight: 700;
`;

export const StyledJobListHeadlineText = styled.h1`
  align-self: center;
  font-size: 16px;
  padding-left: 0.4rem;

  span {
    font-weight: 400;
  }
`;

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