export const capitalise = (word: string) => {
  const wordsArray = word
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return wordsArray.join(" ");
};

export const umlautEncode = (word: string) => {
  if (word !== "" && word !== null) {
    word = word.replace("Ae", "Ä");
    word = word.replace("Oe", "Ö");
    word = word.replace("Ue", "Ü");
    word = word.replace("ae", "ä");
    word = word.replace("oe", "ö");
    word = word.replace("ue", "ü");
    word = word.replace("ss", "ẞ");
    word = word.replace("ss", "ß");
  }
  return word;
};

export const umlautDecode = (word: string) => {
  if (word !== "" && word !== null) {
    word = word.replace("Ä", "Ae");
    word = word.replace("Ö", "Oe");
    word = word.replace("Ü", "Ue");
    word = word.replace("ä", "ae");
    word = word.replace("ö", "oe");
    word = word.replace("ü", "ue");
    word = word.replace("ẞ", "ss");
    word = word.replace("ß", "ss");
  }
  return word;
};

export const mapStelrQueryStringId = (id: string | string[], limit: number) => {
  return `jobs?ids=${id}&limit=${limit}&offset=0&setRelevanceMarker=true&sort=RelevanzHighscore&sortOrder=DESC`;
};

export const mapStelrQueryStringFullText = (
  query: string | string[],
  limit: number,
  offset: number = 0
) => {
  return `jobs?fulltext=${query}&limit=${limit}&offset=${offset}&setRelevanceMarker=true&sort=RelevanzHighscore&sortOrder=DESC`;
};

export const mapStelrQueryStringSimilarSearch = (
  id: string | string[],
  subcategoryIds: Array<number>,
  locationIds: Array<string>,
  limit: number
) => {
  let query = `jobs?exIds=true&ids=${id}&internationalsearch=Yes&limit=${limit}&locationId=${locationIds[0]}&offset=0&perimeterRadius=200&setRelevanceMarker=true&sort=RelevanzHighscore&sortOrder=DESC`;
  query += subcategoryIds.map((item) => `&subcategoryIds=${item}`).join("");
  return query;
};
