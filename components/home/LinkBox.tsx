import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { StyledLinkBoxSection } from './linkboxStyles'

const LinkBox = () => {
  return (
    <StyledLinkBoxSection>
      <Container>
        <Row>
          <Col md={6}>STÄDTE</Col>
          <Col md={6}>BRANCHEN</Col>
        </Row>
      </Container>
    </StyledLinkBoxSection>
  );
}

export default LinkBox