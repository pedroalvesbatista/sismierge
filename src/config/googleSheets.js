import AxiosRequest from "./../utils/AxiosRequest";

function getBaseUrl() {
  const baseUrl = "https://sismierge-strapi.herokuapp.com/api/";
  return baseUrl;
}

const googleSheets = () => {
  const baseUrl = getBaseUrl();
  const axiosRequest = AxiosRequest(`${baseUrl}`)

  return axiosRequest;
}

export default googleSheets