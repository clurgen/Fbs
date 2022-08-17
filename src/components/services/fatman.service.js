import axios from "axios";

export default class FatmanService {
  static async leFatman(id) {
    return await axios.get(`${process.env.REACT_APP_HOST_API}/fatman/${id}`);
  }

  static async lesFatmen() {
    return await axios.get(`${process.env.REACT_APP_HOST_API}/fatmen`);
  }

  static async createFatman(body) {
    return await axios.post(
      `${process.env.REACT_APP_HOST_API}/createFatman`,
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  static async updateFatman(id, body) {
    return await axios.put(
      `${process.env.REACT_APP_HOST_API}/fatman/edit/${id}`,
      body,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }

  static async updateFatmanSansImage(id, body) {
    console.log(body);
    return await axios.put(
      `${process.env.REACT_APP_HOST_API}/fatman/nopicture/edit/${id}`,
      body
    );
  }

  static async delete(id, image) {
    return await axios.delete(
      `${process.env.REACT_APP_HOST_API}/fatman/delete/${id}`
    );
  }
}
