import http from "./http-common";
import http_no_auth from "./http-no-auth";

const no_auth_create = (url, data) => {
  return http_no_auth.post(url, data);
};

const get = (url) => {
  return http.get(url);
};

const getblob = (url) => {
  return http.get(url, { responseType: "blob" });
};

const create = (url, data) => {
  return http.post(url, data);
};

const update = (url, data) => {
  return http.put(url, data);
};

const remove = (url) => {
  return http.delete(url);
};

const HttpRequestsServices = {
  get,
  create,
  update,
  remove,
  no_auth_create,
};

export default HttpRequestsServices;
