import styled from "styled-components";

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
