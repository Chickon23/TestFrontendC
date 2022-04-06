import React from "react";
import { useSelector } from "react-redux";
import { selectHomeInfo } from "../../redux/slices/homepageSlice";
import { StyledSeoTextSection } from "./seotextStyles";

import parse from "html-react-parser";

const SeoText = () => {
  const {
    // @ts-ignore
    BagPart: {
      ContentItems: {
        3: {
          MarkdownBodyPart: { Markdown },
        },
      },
    },
  } = useSelector(selectHomeInfo);

  return (
    <StyledSeoTextSection className="p-5">
      <div>{parse(Markdown)}</div>
    </StyledSeoTextSection>
  );
};

export default SeoText;
