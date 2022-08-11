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
      <div className="container-fluid">
        {article.map((val, key) => {
          let episode;
          if (val.episode > 0) {
            episode = <h3>Episode: {val.episode}</h3>;
          }
          let nbEpisode;
          if (val.nbEpisode > 0) {
            nbEpisode = <h3>Nombre d'épisode: {val.nbEpisode}</h3>;
          }
          let nbSaison;
          if (val.nbSaison > 0) {
            nbSaison = <h3>Nombre de saisons: {val.nbSaison}</h3>;
          }
          let avis;
          if (val.avis) {
            avis = <h3 text-center>{val.avis}</h3>;
          }
          let video;
          if (val.urlVideo) {
            video = val.urlVideo;
          }

          return (
            <div key={key} className="container">
              <div className="h1 text-center">
                <h1>{val.name}</h1>
              </div>
              <div className="d-flex flex-row justify-content-around">
                <div className="col-md-5">
                  <h2>Description: </h2>
                  <p className="h4">{val.description}</p>
                </div>
                <div className="col-md-3 align-right">
                  {nbSaison}
                  {nbEpisode}
                  <img
                    className="img-fluid mw-100"
                    alt="Couverture de l'anime"
                    src={`${process.env.REACT_APP_HOST_API}/${val.image}`}
                  />
                </div>
              </div>
              {episode}
              {avis}
              <div
                className="d-flex justify-content-center"
                dangerouslySetInnerHTML={{ __html: video }}
              ></div>
              <h3>Playlist: {val.playlist}</h3>
              <h3>Ressenti: {val.ressenti}</h3>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
