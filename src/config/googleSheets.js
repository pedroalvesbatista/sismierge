import AxiosRequest from "./../utils/AxiosRequest";

function getBaseUrl() {
  const baseUrl = "http://localhost:1337/api/";
  return baseUrl;
}

const googleSheets = () => {
    const baseUrl = getBaseUrl();
    const axiosRequest = AxiosRequest(`${baseUrl}`)

  return axiosRequest;
}

export default googleSheets