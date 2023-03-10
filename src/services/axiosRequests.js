import axios from "axios"

export const getRequest = async (URL) => {

  const axiosClient = axios.create();
  console.log(URL, "URL");
  try {
    const response = await axiosClient
      .get(URL);
    return response.data;
  } catch (error) {
    console.log("Sorry can not find request !");
  }
};
