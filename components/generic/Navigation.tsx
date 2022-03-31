import Link from "next/link";
import React from "react";
import { v4 as uuid } from "uuid";

import { StyledNavigation } from "./navigationStyles";

const Navigation = () => {
  const linkArray = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/suche/",
      text: "Suche",
    },
  ];

  return (
    <StyledNavigation className="d-flex justify-content-around align-items-center">
      {linkArray.map(({ path, text }) => (
        <Link key={uuid()} href={path}>
          {text}
        </Link>
      ))}
    </StyledNavigation>
  );
};

export default Navigation;
