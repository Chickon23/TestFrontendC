import styled from "styled-components";


const StyledTitle = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledLpSection = styled.section`
  @media (max-width: 768px) {
    > button {
      margin-bottom: 5px;
    }
  }
`;

export { StyledTitle, StyledLpSection };
