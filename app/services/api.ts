import axios from "axios";

export const api = axios.create({
  baseURL: "https://vendredi-soir-posu.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
