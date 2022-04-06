import styled from "styled-components";

const StyledHeaderSection = styled.section`
  background-color: yellow;
  h1 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export { StyledHeaderSection };
