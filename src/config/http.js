import AxiosRequest from "./../utils/AxiosRequest";

function getStorage() {
  const getAdminStorage= JSON.parse(localStorage.getItem("@sismiegee/auth/admin"))
  const getStorageUser= JSON.parse(localStorage.getItem("@sismiegee/auth"))

  if (getAdminStorage) {
    return getAdminStorage
  } else {
    return getStorageUser
  }
}

function getBaseUrl() {
  const baseUrl = "https://sismierge-strapi.herokuapp.com/api/";
  return baseUrl;
}

const Http = () => {
  const baseUrl = getBaseUrl();
  const axiosRequest = AxiosRequest(`${baseUrl}`, getStorage()?.jwt && {
    Authorization: `Bearer ${getStorage()?.jwt}`
  });

  return axiosRequest;
}

export default Http;