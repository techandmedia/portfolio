import axios from "axios";

export function deleteCompany(URL, company_id) {
  console.log("sampai company");
  return null;
  // axios.delete(URL + `api/prospace_companies_delete/${company_id}`);
}

export function deleteOffice(office_id) {
  return axios.delete(URL + `api/prospace_offices_delete/${office_id}`);
}
