import AxiosRequest from "./../utils/AxiosRequest";

function getBaseUrl() {
  const baseUrl = "https://backend.invest.page/";
  return baseUrl;
}

const Http = () => {
  const baseUrl = getBaseUrl();
  const axiosRequest = AxiosRequest(`${baseUrl}`, {
    Authorization: `Bearer ${process.env.AUTH_TOKEN}`
  });

  return axiosRequest;
}

export default Http;