import axios from "axios";

const InstancePrendaAxios = axios.create({ baseURL: "https://localhost:5001/api/prenda" });

const headerConfig = {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      authorization: "Bearer" + window.localStorage.getItem("access_token"),
    },
  };

export const getPrendaPorId = (param) => {
    return InstancePrendaAxios.get(`/id/${param}`, headerConfig)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export const getPrendaPorNombre = (param) => {
    return InstancePrendaAxios.get(`/nombre/${param}`, headerConfig)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}