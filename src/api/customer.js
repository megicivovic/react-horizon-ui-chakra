import axios from "./index";

class CustomerApi {
  static GetAll = (data) => {
    const token = data.token;
    return axios.get(`/customers`, {
      headers: { Authorization: "Bearer " + token },
    });
  };

  static DeleteCustomer = (id, data) => {
    const token = data.token;
    return axios.delete(`/customers/` + id, {
      headers: { Authorization: "Bearer " + token },
    });
  };
}

export default CustomerApi;
