import React from "react";
import { Container, Row } from "react-bootstrap";
import SearchForm from "../SearchForm";
import { StyledHeaderSection } from "./headerStyles";

const Header = () => {
  return (
    <StyledHeaderSection>
      <Container>
        <Row>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="my-5">IMAGE PLACEHOLDER</div>
            <SearchForm />
          </div>
        </Row>
      </Container>
    </StyledHeaderSection>
  );
};

export default Header;
