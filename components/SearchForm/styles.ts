import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;

  input {
    font-size: 1.5rem;
    padding: 0.2rem 0.5rem;
  }

  button {
    padding: 0.2rem 0.5rem;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    button {
      margin-top: 0.8rem;
    }
  }
`;
