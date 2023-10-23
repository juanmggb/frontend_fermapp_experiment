import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000//", // Replace with your DRF API URL
  // timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default instance;
