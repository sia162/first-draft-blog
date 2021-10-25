import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://first-draft-blog.herokuapp.com/api/",
});
