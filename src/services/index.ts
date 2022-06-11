import axios from "axios";

export function getinstance() {
  return axios.create({
    baseURL: "https://localhost:8000/api",

    // we can use Authorization when we have Barear token
    /* headers: {
       Authorization:""
     },*/
  });
}
