import axios from "axios";

export const signup = (user) => {
  const { firstName, lastName, email, password } = user;
  return axios
    .post("http://localhost:3100/api/register", {
      firstName,
      lastName,
      email,
      password,
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const signin = (email, password) => {
  return axios
    .post("http://localhost:3100/api/login", { email, password })
    .then(async (res) => {
      saveToken(res.data.token);
      return {
        valid: true,
        status: res.status,
        message: res.data.message,
      };
    })
    .catch((err) => {
      return {
        valid: false,
        status: 400,
        message: "Invalid username or password",
      };
    });
};

const saveToken = (token) => {
  window.localStorage.setItem("SwapSoUser", token);
};

export const getToken = () => {
  return window.localStorage.getItem("SwapSoUser");
};

export const signout = () => {
  window.localStorage.removeItem("SwapSoUser");
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("SwapSoUser")) {
    return true;
  } else {
    return false;
  }
};
