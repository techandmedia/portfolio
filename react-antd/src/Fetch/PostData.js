import axios from "axios";

const rs = "responden";
const pt = "penilaian_teladan";
const ps = "penilaian_sendiri";
const ao = "anggota_organisasi";

export function postResponden(URL, nip_nim, full_name, role_id) {
  return axios.post(URL + `api/${rs}_new`, {
    nip_nim: nip_nim,
    full_name: full_name,
    role_id: role_id
  });
}

export function postTeladan(
  URL,
  karyawan_id,
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  p1,
  p2,
  p3,
  p4
) {
  return axios.post(URL + "api/penilaian_teladan_new", {
    karyawan_id: karyawan_id,
    c1: c1,
    c2: c2,
    c3: c3,
    c4: c4,
    c5: c5,
    c6: c6,
    c7: c7,
    p1: p1,
    p2: p2,
    p3: p3,
    p4: p4
  });
}

export function postUsers(URL, full_name, role_id) {
  return axios.post(URL + "api/users_new", {
    full_name: full_name,
    role_id: role_id
  });
}

export function postUser(URL, full_name) {
  console.log(full_name);
  return axios.post(URL + "api/users/user", {
    full_name: full_name
  });
}

export function postPenilaianSendiri(
  URL,
  user_id,
  K001,
  K002,
  K003,
  K004,
  K005,
  K006,
  K007,
  K008,
  K009,
  K010,
  K011,
  K012,
  K013,
  K014,
  K015,
  K016,
  K017,
  K018,
  K019,
  K020,
  K021,
  K022,
  K023,
  K024,
  K025,
  K026,
  K027,
  K028,
  K029,
  K030
) {
  return axios.post(URL + "api/users_new", {
    user_id: user_id
  });
}

// ==== LOGIN ==================================
export function loginUser(URL, admin_name, admin_pass) {
  return axios.post(URL + "api/admin_login", {
    admin_name: admin_name,
    admin_pass: admin_pass
  });
}