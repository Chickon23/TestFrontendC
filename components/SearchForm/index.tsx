import React, { FC, SyntheticEvent, useState } from "react";

import { useRouter } from "next/router";

import { umlautDecode } from "../../utils/helpers";

import { StyledForm } from "./styles";

const SearchForm: FC = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (query !== "") {
      router.push({
        pathname: "/suche/",
        query: { voll: umlautDecode(query).toLowerCase() },
      });
    } else {
      router.push({
        pathname: "/suche/",
      });
    }
  };

  return (
    <section>
      <StyledForm onSubmit={handleSubmit}>
        <input
          id="stelrSearch"
          type="text"
          value={query}
          placeholder="What job would you like?"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </StyledForm>
    </section>
  );
};

export default SearchForm;
