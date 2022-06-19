import AxiosRequest from "./../utils/AxiosRequest";

function getBaseUrl() {
  const baseUrl = "https://brasilapi.com.br/api/";
  return baseUrl;
}

const brasilApi = () => {
    const baseUrl = getBaseUrl();
    const axiosRequest = AxiosRequest(`${baseUrl}`)

  return axiosRequest;
}

export default brasilApi;