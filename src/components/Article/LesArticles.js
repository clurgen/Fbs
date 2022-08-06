import React, { useState } from "react";
import "../../App.css";
import Axios from "axios";

export default function LesArticles() {
  const [articleList, setArticleList] = useState([]);

  const lesArticles = () => {
    Axios.get(`http://localhost:3001/articles`)
      .then((response) => {
        setArticleList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="articles">
      <button onClick={lesArticles}>Afficher les articles</button>

      {articleList.map((val, key) => {
        return (
          <div key={key} className="article">
            <h3>Nom: {val.name}</h3>
            <h3>Description: {val.description}</h3>
            <h3>Nombre de Saison: {val.nbSaison}</h3>
            <h3>Nombre d'épisode {val.nbEpisodes}</h3>
            <h3>Episode: {val.episode}</h3>
            <h3>Avis: {val.avis}</h3>
          </div>
        );
      })}
    </div>
  );
}
