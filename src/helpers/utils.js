import Cookies from "js-cookie";
const TOKEN_KEY = "token";
const id_user = "id_user";
const cookis = false;
const socketProtocol = "ws://";
// const uri = 'http://localhost';
// const uri = 'http://94.177.189.110/'
// const uri = 'https://criptiko.com/'
export const pathOrigin = window.location.origin
var uri = {};
// const uri = '80.211.173.215';
// const uri = '52.47.75.51'; //AWS

if (process.env.NODE_ENV === "development") {
  const webProtocol = "http://";
  uri.BASE_URL_API = webProtocol + process.env.REACT_APP_BASE_URL_LOCAL + ":4000/";
  // uri.BASE_URL_API = webProtocol + process.env.REACT_APP_BASE_URL_PRO + "/api/" ;
  uri.BASE_URL_IO = socketProtocol + process.env.REACT_APP_BASE_URL_LOCAL + ":4000/";
  
} else {
  const webProtocol = "https://api.";
  uri.BASE_URL_API = webProtocol + process.env.REACT_APP_BASE_URL_PRO + "/" ;
  uri.BASE_URL_IO = socketProtocol + process.env.REACT_APP_API_URL_LOCAL + '.'  + process.env.REACT_APP_BASE_URL_PRO + "/";
  
}

export const login = (e) => {
  sessionStorage.setItem(TOKEN_KEY, "guakamole");
  setId(e);
};

export function setId(e) {
  sessionStorage.setItem(id_user, parseInt(e));
}

export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(id_user);
  sessionStorage.clear();
};

export const isLogin = () => {
  if (!sessionStorage.getItem(TOKEN_KEY)) {
    return false;
  }
  sessionStorage.getItem(id_user);
  return true;
};

export const cookies = (e) => {
  if (e === false) {
    sessionStorage.setItem(cookies, true);
  } else {
    sessionStorage.setItem(cookies, cookis);
  }
};

export const isCookies = (e) => {
  if (sessionStorage.getItem(cookies)) {
    return true;
  }
  return false;
};

export const setCookiesStorage = (e) => {
  sessionStorage.setItem(cookies, cookis);
};
export const RemoveCookies = (value) => {
  Cookies.remove(value);
};

export const setCookies = (name, value) => {
  var fecha = new Date();
  var dias = 7; // Número de días a agregar
  fecha.setDate(fecha.getDate() + dias);
  const options = {
    domanin: "www.criptiko.com",
    expires: fecha,
  };

  Cookies.set(name, value, options);
};
export const Url = {
  api: uri.BASE_URL_API,

  // api : uri+'api/',
  // api : uri+':4000/api/',
};

export const url = () => {
  return {
    api: uri.BASE_URL_API,

    // api : uri+'api/',
    // api : uri+':4000/api/',
  };
};

export const Api = (params) => uri.BASE_URL_API + params;
export const Io = (params) => uri.BASE_URL_IO + params;