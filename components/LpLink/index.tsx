import React, { useCallback } from "react";

import { useRouter } from "next/router";

import { StyledButton } from "./styles";

import { LpLinkProps } from "./types";

const LpLink = ({ Title, UrlKey }: LpLinkProps) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push({
      pathname: `${UrlKey}`,
    });
  }, [UrlKey, router]);

  return <StyledButton onClick={handleClick}>Jobs in {Title}</StyledButton>;
};

export default LpLink;
