import React, { useCallback } from "react";

import { useRouter } from "next/router";

import { StyledButton } from "./styles";

import { LpLinkProps } from "./types";

const LpLink = ({ location, name }: LpLinkProps) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push({
      pathname: `jobs/${location}/`,
    });
  }, [location, router]);

  return <StyledButton onClick={handleClick}>Jobs in {name}</StyledButton>;
};

export default LpLink;
