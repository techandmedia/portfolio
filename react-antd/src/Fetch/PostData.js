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
  office_name,
  company_id,
  latitude,
  longitude,
  todayDate,
  startDate
) {
  return axios.post(URL + "api/prospace_offices_new", {
    company_id: company_id,
    office_name: office_name,
    latitude: latitude,
    log: longitude,
    start_date: startDate,
    date_created: todayDate
  });
}
