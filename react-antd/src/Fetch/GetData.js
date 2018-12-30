import axios from "axios";

export function getCompanies(URL) {
  return axios.get(URL + "api/prospace_companies");
}

export function getOffices(URL) {
  return axios.get(URL + "api/prospace_offices");
}