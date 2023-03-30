import axios from "./index";

class AuthApi {
  static Login = (data) => {
    return axios.post(`${base}/signin`, {username: data.email, password:data.password});
  };

  static Register = (data) => {
    return axios.post(`${base}/register`, data);
  };

  static Logout = (data) => {
    return axios.post(`${base}/logout`, data, { headers: { Authorization: `${data.token}` } });
  };
}

let base = "auth";

export default AuthApi;
