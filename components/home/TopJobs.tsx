import React from "react";
import { Container, Row } from "react-bootstrap";
import { StyledTopJobSection } from "./topjobsStyles";

const TopJobs = () => {
  return (
    <StyledTopJobSection>
      <Container>
        <Row className="py-5">
          <h3>TOP-JOBS</h3>
          <p>
            Wir haben interessante Stellen für Sie zusammengefasst. Entdecken
            Sie die Angebote!
          </p>
          <div>ZEIGE 4 Top JOBS</div>
        </Row>
      </Container>
    </StyledTopJobSection>
  );
};

export default TopJobs;
