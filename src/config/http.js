import AxiosRequest from "./../utils/AxiosRequest";

function getStorage() {
  const getAdminStorage= JSON.parse(localStorage.getItem("@sismiegee/auth/admin"))
  const getStorageUser= JSON.parse(localStorage.getItem("@sismiegee/auth"))
  const pathname= window.location.pathname.split('/')[1]
  const tokenJwtUrl= window.location.pathname.split('/')[2]

  if (pathname === "register") {
    return {jwt: tokenJwtUrl}
  }
  else if (getAdminStorage) {
    return getAdminStorage
  } 
  else if (getStorageUser) {
    return getStorageUser
  } else {
    return null
  }
}

// console.log(getStorage());

function getBaseUrl() {
  const baseUrl = "https://sismierge-strapi.herokuapp.com/api/";
  return baseUrl;
}

const baseUrl = getBaseUrl();

const token = getStorage()
const verication = token ? 
  AxiosRequest(`${baseUrl}`, {Authorization: `Bearer ${token?.jwt}`}) : 
  AxiosRequest(`${baseUrl}`)

// console.log(token.jwt);

const Http = () => {
  const axiosRequest = verication

  return axiosRequest;
}

export default Http;