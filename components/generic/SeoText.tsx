import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { StyledSeoTextSection } from './seotextStyles'

const SeoText = () => {
  return (
    <StyledSeoTextSection>
      <Container>
        <Row>
          <h1>Stellenangebote und Jobs in Thüringen</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industries standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Row>
      </Container>
    </StyledSeoTextSection>
  );
}

export default SeoText