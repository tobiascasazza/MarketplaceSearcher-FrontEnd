import axios from "axios";

const InstanceClothesAxios = axios.create({
  baseURL: "https://localhost:5001/api/clothes",
});

const headerConfig = {
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    authorization: "Bearer" + window.localStorage.getItem("access_token"),
  },
};

export const getClothesById = (param) => {
  return InstanceClothesAxios.get(`/id/${param}`, headerConfig)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

export const getClothesByName = (param) => {
  return InstanceClothesAxios.get(`/name/${param}`, headerConfig)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
