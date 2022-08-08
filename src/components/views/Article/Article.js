import React, { Fragment, useEffect, useState } from "react";
import "../../../App.css";
import ArticleService from "../../services/article.service";

export default function Article() {
  const url = window.location.href;
  const urlSplit = url.split("/");
  const id = urlSplit[4];

  const [article, setArticle] = useState([]);

  useEffect(() => {
    const lArticle = async () => {
      ArticleService.lArticle(id)
        .then((response) => {
          setArticle(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    lArticle();
  });

  return (
    <Fragment>
      <div className="articles">
        {article.map((val, key) => {
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
