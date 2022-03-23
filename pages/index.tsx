import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <StyledMainContainer>
      <StyledMain>
        <StyledTitle>Welcome to Frontend-C Prototype</StyledTitle>
        {/* <SearchForm />
        {landingPages.map(({ location, name }, idx) => {
          return <LpLink key={idx} location={location} name={name} />;
        })} */}
      </StyledMain>
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.div`
  padding: 0 2rem;
`;

const StyledMain = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 3rem;
  text-align: center;
`;

export default Home;
