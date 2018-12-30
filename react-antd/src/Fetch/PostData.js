import axios from "axios";

export function postCompanies(
  URL,
  company_name,
  address,
  revenue,
  phone_country_code,
  phone_number
) {
  return axios.post(URL + "api/prospace_companies_new", {
    company_name: company_name,
    address: address,
    revenue: revenue,
    phone_country_code: phone_country_code,
    phone_number: phone_number
  });
}

export function postOffices(
  URL,
  office_id,
  company_id,
  office_name,
  latitude,
  log,
  start_date
) {
  return axios.post(URL + "api/prospace_offices_new", {
    office_id: office_id,
    company_id: company_id,
    office_name: office_name,
    latitude: latitude,
    log: log,
    start_date: start_date
  });
}
