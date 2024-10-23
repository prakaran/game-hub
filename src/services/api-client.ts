import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api", 
  params: {
    key: "e2163a80ad2e4e7eb2b04e12dea2f95d",
  },
});
