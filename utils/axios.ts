import axios from "axios";

export const stelr = axios.create({
  baseURL: "https://stelr-dev-searchapi.azurewebsites.net/",
  headers: {
    "X-API-Key": "222",
  },
});

// To call my backend API
// axios
//   .get(`https://localhost:7147/search/${searchParam}`)
//   .then((response) => {
//     console.log(response);
//     setJobs(response.data.jobs);
//     setSearchParam("");
//     setLoading(false);
//   })
//   .catch((err) => alert(err));
