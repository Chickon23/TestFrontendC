import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectConfig } from "../../redux/slices/configSlice";
import SearchForm from "../SearchForm";
import { StyledHeaderSection } from "./headerStyles";

const Header = ({ test = "hallo"}) => {
  const { Name } = useSelector(selectConfig);
  return (
    <StyledHeaderSection className="p-5">
      <Container fluid>
        <Row>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="my-5">
              <h1>PORTAL {Name} {test}</h1>
            </div>
            <SearchForm />
          </div>
        </Row>
      </Container>
    </StyledHeaderSection>
  );
};

export default Header;
