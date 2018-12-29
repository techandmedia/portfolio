import axios from "axios";

export function getData(URL) {
  return axios.get(URL);
}

export function getDosen(URL) {
  return axios.get(URL + "api/dosen");
  // kalau pakai async await di cDM
  // .then(respon => {
  //   return respon.data;
  // });
}