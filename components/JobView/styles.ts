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
