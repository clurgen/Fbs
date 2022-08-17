import React, { Fragment, useEffect, useState } from "react";
import "../../../App.css";
import ArticleService from "../../services/article.service";
import superTop from "../../../images/Chibi_Love-removebg-preview.png";
import top from "../../../images/Chibi_full_smile-removebg-preview.png";
import moyen from "../../../images/Chibi_Normal-removebg-preview.png";
import naze from "../../../images/Chibi_Arrogant-removebg-preview.png";
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
  }, []);

  return (
    <Fragment>
      <div className="container-fluid">
        {article.map((val, key) => {
          let episode;
          if (val.episode > 0) {
            episode = <h3 className="text-center">Episode: {val.episode}</h3>;
          }
          let nbEpisode;
          if (val.nbEpisodes > 0) {
            nbEpisode = (
              <h3 className="text-center">
                Nombre d'épisodes: {val.nbEpisodes}
              </h3>
            );
          }
          let nbSaison;
          if (val.nbSaison > 0) {
            nbSaison = (
              <h3 className="text-center">Nombre de saisons: {val.nbSaison}</h3>
            );
          }
          let avis;
          if (val.avis) {
            avis = <h3 className="avis text-center py-4">{val.avis}</h3>;
          }
          let video;
          if (val.urlVideo) {
            video = val.urlVideo;
          }

          let ressenti;
          switch (val.ressenti) {
            case "superTop":
              ressenti = <img src={superTop} alt={val.ressenti} />;
              break;
            case "top":
              ressenti = (
                <img
                  className="img-fluid col-xl-3 d-flex"
                  src={top}
                  alt={val.ressenti}
                />
              );
              break;
            case "Moyen":
              ressenti = <img src={moyen} alt={val.ressenti} />;
              break;
            case "Naze":
              ressenti = <img src={naze} alt={val.ressenti} />;
              break;
            default:
              ressenti = <img src={top} alt={val.ressenti} />;
              break;
          }

          return (
            <div key={key} className="container">
              <h1 className="title text-center pt-5">{val.name}</h1>
              <div className="d-flex row align-items-center justify-content-around pt-3 pb-5">
                <div className="col-xl-5">
                  <h2>Description: </h2>
                  <p className="h4 pb-2">{val.description}</p>
                </div>
                <div className="col-xl-4 row col-md-6 justify-content-center">
                  {nbSaison}
                  {nbEpisode}
                  <div className="pt-1 pb-1 text-center col-xl-9">
                    <img
                      className="img-fluid mw-100"
                      alt="Couverture de l'anime"
                      src={val.image}
                    />
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div
                  className="d-flex justify-content-center"
                  dangerouslySetInnerHTML={{ __html: video }}
                ></div>
              </div>
              {avis}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
