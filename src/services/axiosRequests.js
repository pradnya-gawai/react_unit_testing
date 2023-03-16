import  axios from "axios"

export const getRequest = async (URL) => {

  const axiosClient = axios.create();
  try {
    const response = await axiosClient
      .get(URL);
    return response.data;
  } catch (error) {
  }
};
