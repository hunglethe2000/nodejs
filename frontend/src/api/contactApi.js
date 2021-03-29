import { axiosClient } from "./axiosClient.js";

const contactApi = {
  getAll() {
    const url = `/contacts`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/contacts/${id}`;
    return axiosClient.get(url);
  },
  add(contact) {
    const url = `/contacts`;
    return axiosClient.post(url, contact);
  },
  remove(id) {
    const url = `/contacts/${id}`;
    return axiosClient.delete(url);
  },
  update(id, data) {
    const url = `/contacts/${id}`;
    return axiosClient.put(url, data);
  },
};
export default contactApi;
