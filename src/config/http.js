import AxiosRequest from "./../utils/AxiosRequest";

function getStorage() {
  const getAdminStorage= JSON.parse(localStorage.getItem("@sismiegee/auth/admin"))
  const getStorageUser= JSON.parse(localStorage.getItem("@sismiegee/auth"))

  if (getAdminStorage) {
    return getAdminStorage
  } 
  else if (getStorageUser) {
    return getStorageUser
  } else {
    return null
  }
}

function getBaseUrl() {
  const baseUrl = "https://sismierge-strapi.herokuapp.com/api/";
  return baseUrl;
}

const baseUrl = getBaseUrl();

const token = getStorage()
const verication = token ? 
  AxiosRequest(`${baseUrl}`, {Authorization: `Bearer ${token?.jwt}`}) : 
  AxiosRequest(`${baseUrl}`)

const Http = () => {
  const axiosRequest = verication

  return axiosRequest;
}

export default Http;