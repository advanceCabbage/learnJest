import axios from "axios";

export const fetchData = () => {
  return axios.get("/").then((res) => res.data);
};

export const getNum = () => {
  return 123;
};
