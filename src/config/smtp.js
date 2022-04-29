import AxiosRequest from "./../utils/AxiosRequest";

function getBaseUrl() {
  const baseUrl = "https://api.emailjs.com/api/v1.0/email/";
  return baseUrl;
}

const Smtp = () => {
    const baseUrl = getBaseUrl();
    const axiosRequest = AxiosRequest(`${baseUrl}`)

  return axiosRequest;
}

export default Smtp;