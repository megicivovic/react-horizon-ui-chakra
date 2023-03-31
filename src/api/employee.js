import axios from "./index";

class EmployeeApi {
  static GetAll = (data) => {
    const token = data.token;
    return axios.get(`/employees`, {
      headers: { Authorization: "Bearer " + token },
    });
  };
}

export default EmployeeApi;
