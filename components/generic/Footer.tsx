import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StyledFooter } from "./footerStyles";

const Footer = () => {
  return (
    <StyledFooter>
      <section id="footer-top">
        <Container>
          <Row className="p-5">
            <Col md={4}>
              <h3>FÜR BEWERBER</h3>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </Col>
            <Col md={4}>
              <h3>FÜR UNTERNEHMEN</h3>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </Col>
            <Col md={4}>
              <h3>UNSERE PARTNER</h3>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
              <li>Link</li>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="footer-bottom">
        <Container>
          <Row>
            <div>AGB | Datenschutz | Impressum</div>
          </Row>
        </Container>
      </section>
    </StyledFooter>
  );
};

export default Footer;
