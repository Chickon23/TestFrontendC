import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Section from "./Section";

type GridSystemProps = {
  colCount: number;
  children: any;
  md: number;
  xxl: number;
};

/*  This grid system takes an array of JSX items as children
    and calculates the number of rows needed based on chilren count and col count.
*/
const GridSystem = ({ colCount, children, md, xxl }: GridSystemProps) => {
  let rowCount = Math.floor(children.length / colCount) + 1;

  //Index is needed to keep track of the current element that we are one.
  let index = 0;

  //This is the driver function for building the grid system.
  const buildGrid = () => {
    return renderRows();
  };

  const renderRows = () => {
    let rows = [];

    for (let row = 0; row < rowCount; row++) {
      const { color } = children[0].props;
      
      rows.push(
        <Section color={color[row]}>
          <Container>
            <Row className="">{renderCols()}</Row>
          </Container>
        </Section>
      );
    }

    return rows;
  };

  //Returns an array of columns with the children inside.
  const renderCols = () => {
    let cols = [];

    //If you want to add more bootstrap breakpoints you can pass them as props here.
    for (let col = 0; col < colCount; col++) {
      if (index < children.length) {
        const { displayText } = children[index].props;

        cols.push(
          <Col
            md={md}
            xxl={xxl}
          >
            {React.cloneElement(children[index], {
              title: displayText[index],
            })}
          </Col>
        );
        index++;
      }
    }

    return cols;
  };

  return <div>{buildGrid()}</div>;
};

export default GridSystem;
