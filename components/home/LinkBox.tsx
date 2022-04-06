import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectHomeInfo } from "../../redux/slices/homepageSlice";
import { StyledLinkBoxSection } from "./linkboxStyles";

const LinkBox = () => {
  const {
    // @ts-ignore
    BagPart: {
      ContentItems: {
        1: {
          LinkBox: { Headline, ShowMoreLink },
          BagPart: { ContentItems },
        },
      },
    },
  } = useSelector(selectHomeInfo);

  return (
    <StyledLinkBoxSection className="p-5">
      <Row>
        <Col md={6}>
          <h3>{Headline.Text}</h3>
          {ContentItems.map(
            (
              {
                LinkBoxItem: {
                  // @ts-ignore
                  LinkBoxItemLink: { Url, Text },
                },
              },
              // @ts-ignore
              idx
            ) => {
              return (
                <li key={idx}>
                  <a href={Url}>{Text}</a>
                </li>
              );
            }
          )}
          <a href={ShowMoreLink.Url}>{ShowMoreLink.Text}</a>
        </Col>
        <Col md={6}>
          <h3>BRANCHEN</h3>
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
        </Col>
      </Row>
    </StyledLinkBoxSection>
  );
};

export default LinkBox;
