import axios from "axios";
const axiosClient = axios.create();

export const getRequest = (URL) => {
  console.log(URL, "URL");
  return axiosClient
    .get(URL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Sorry can not find request !");
    });
};
