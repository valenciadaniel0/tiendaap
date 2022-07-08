import axios from "axios";

export default axios.create({
  headers: {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    },
  baseURL: "http://localhost:3000/v1",
});
