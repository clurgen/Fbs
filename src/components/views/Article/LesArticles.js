import React, { Fragment, useEffect, useState } from "react";
import "../../../App.css";
import ArticleService from "../../services/article.service";

export default function LesArticles() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    const lesArticles = async () => {
      ArticleService.lesArticles()
        .then((response) => {
          setArticleList(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    lesArticles();
  });

  return (
    <Fragment>
      <div className="articles">
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
    </Fragment>
  );
}
