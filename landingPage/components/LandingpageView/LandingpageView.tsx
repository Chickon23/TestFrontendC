import React from "react";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { StyledLpView } from "./styles";

type LandingpageViewProps = {
    seoText: string;
};

const LandingpageView = ({ seoText } : LandingpageViewProps) => {
    const cleanSeoText = DOMPurify.sanitize(seoText, {
        USE_PROFILES: { html: true },
    });

    return (
        <StyledLpView>
            <h4>Hello from LandingPageView component</h4>
            {parse(cleanSeoText)}
        </StyledLpView>
    );
};

export default LandingpageView;
