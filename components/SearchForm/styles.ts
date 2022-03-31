import styled from "styled-components";

export const StyledForm = styled.form`

  input {
    font-size: 1.5rem;
    padding: 0.2rem 0.5rem;
  }

  button {
    margin-left: 1rem;
    padding: 0.2rem 0.5rem;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin: 3rem 0rem;

    button {
      margin-left: 0px;
      margin-top: 0.8rem;
    }
  }
`;
