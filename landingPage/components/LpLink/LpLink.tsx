import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { StyledButton } from "./styles";

type LpLinkProps = {
    location: string;
    name: string;
};

const LpLink = ({ location, name } : LpLinkProps) => {
    const router = useRouter();

    const handleClick = useCallback(() => {
        router.push({
            pathname: `jobs/${location}/`,
        });
    }, [location, router]);

    return <StyledButton onClick={handleClick}>Jobs in {name}</StyledButton>;
};

export default LpLink;
