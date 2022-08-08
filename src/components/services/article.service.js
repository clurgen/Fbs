import axios from "axios";

export default class ArticleService {
  /**
   * Récuperer tout les articles
   * @returns {Promise<AxiosResponse<T>>}
   */
  static async lesArticles() {
    return await axios.get(`${process.env.REACT_APP_HOST_API}/articles`);
  }

  /**
   * Recuperer un article
   * @param id
   * @returns {Promise<AxiosResponse<T>>}
   */
  static async lArticle(id) {
    return await axios.get(`${process.env.REACT_APP_HOST_API}/article/${id}`);
  }

  /**
   * Créer un article
   * @param body
   * @returns {Promise<AxiosResponse<T>>}
   */
  static async createArticle(body) {
    console.log(process.env.REACT_APP_HOST_API, body);
    return await axios.post(
      `${process.env.REACT_APP_HOST_API}/createArticle`,
      body
    );
  }

  /**
   * Modifier un article
   * @param id
   * @param body
   * @returns {Promise<AxiosResponse<T>>}
   */
  static async updateArticle(id, body) {
    return await axios.put(
      `${process.env.REACT_APP_HOST_API}/article/edit/${id}`,
      body
    );
  }

  /**
   * Supprimer un article
   * @param id
   * @returns {Promise<AxiosResponse<T>>}
   */
  static async delete(id) {
    return await axios.delete(
      `${process.env.REACT_APP_HOST_API}/article/delete/${id}`
    );
  }
}
