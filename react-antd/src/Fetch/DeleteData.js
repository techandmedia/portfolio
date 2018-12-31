import axios from "axios";

export function deleteCompany(URL, company_id) {
  console.log("sampai company");
  return null;
  // axios.delete(URL + `api/prospace_companies_delete/${company_id}`);
}

export function deleteOffice(URL, office_id) {
  console.log("sampai office");
  return null;
  // return axios.delete(URL + `api/prospace_offices_delete/${office_id}`);
}
