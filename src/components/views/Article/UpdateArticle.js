import React, { Fragment, useEffect, useState } from "react";
import "../../../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArticleService from "../../services/article.service";

export default function UpdateArticle() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [episode, setEpisode] = useState(0);
  const [nbEpisodes, setNbEpisodes] = useState(0);
  const [nbSaison, setNbSaison] = useState(0);
  const [video, setVideo] = useState("");
  const [avis, setAvis] = useState("");
  const [playlist, setPlaylist] = useState("");
  const [article, setArticle] = useState([]);
  const url = window.location.href;
  const urlSplit = url.split("/");
  const id = urlSplit[5];

  const Update = () => {
    let body = {
      name: name,
      description: description,
      nbEpisodes: nbEpisodes,
      nbSaison: nbSaison,
      episode: episode,
      video: video,
      avis: avis,
      playlist: playlist,
    };
    ArticleService.updateArticle(id, body)
      .then(() => {
        toast.success(" Validé !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error(" Zut !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const Delete = () => {
    ArticleService.delete(id)
      .then((response) => {
        toast.success(" Parfait !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error(" Zut !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  useEffect(() => {
    const lArticle = async () => {
      ArticleService.lArticle(id)
        .then((response) => {
          setArticle(response.data);
          setName(response.data[0].name);
          setDescription(response.data[0].description);
          setEpisode(response.data[0].episode);
          setNbEpisodes(response.data[0].nbEpisodes);
          setNbSaison(response.data[0].nbSaison);
          setVideo(response.data[0].video);
          setAvis(response.data[0].avis);
          setPlaylist(response.data[0].playlist);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    lArticle();
  }, [id]);

  return (
    <Fragment>
      {article.map((val, key) => {
        return (
          <div key={key} className="Article ">
            <div className="container-fluid">
              <div className="container">
                <div className="col-md-3">
                  <div className="form-group">
                    <h2>Super formulaire !</h2>
                    <label>Nom</label>
                    <input
                      className="form-control"
                      value={name}
                      type="text"
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                    <label>Description</label>
                    <input
                      className="form-control"
                      value={description}
                      type="text"
                      onChange={(event) => {
                        setDescription(event.target.value);
                      }}
                    />
                    <label>Nombre de Saison</label>
                    <input
                      className="form-control"
                      value={nbSaison}
                      type="text"
                      onChange={(event) => {
                        setNbSaison(event.target.value);
                      }}
                    />
                    <label>Nombre d'épisode</label>
                    <input
                      className="form-control"
                      value={nbEpisodes}
                      type="text"
                      onChange={(event) => {
                        setNbEpisodes(event.target.value);
                      }}
                    />
                    <label>Episode</label>
                    <input
                      className="form-control"
                      value={episode}
                      type="text"
                      onChange={(event) => {
                        setEpisode(event.target.value);
                      }}
                    />
                    <label>Vidéo</label>
                    <input
                      className="form-control"
                      value={video}
                      type="text"
                      onChange={(event) => {
                        setVideo(event.target.value);
                      }}
                    />
                    <label>Avis</label>
                    <input
                      className="form-control"
                      value={avis}
                      type="text"
                      onChange={(event) => {
                        setAvis(event.target.value);
                      }}
                    />
                    <label>Ressenti</label>
                    <select className="form-control">
                      <option>Choisir</option>
                      <option value="superTop">SUPER Top</option>
                      <option value="top">Top</option>
                      <option value="moyen">Moyen</option>
                      <option value="pasOuf">Pas ouf</option>
                      <option value="naze">Naze</option>
                    </select>
                    <label>Playlist</label>
                    <select
                      className="form-control"
                      value={playlist}
                      onChange={(e) => setPlaylist(e.target.value)}
                    >
                      <option>Choisir</option>
                      <option value="Mushoku_review">Mushoku</option>
                      <option value="Spider_review">spider so what</option>
                      <option value="FBS">FBS</option>
                    </select>
                    <button className="btn btn-primary" onClick={Update}>
                      Editer l'article
                    </button>
                    <br></br>
                    <button className="btn btn-primary" onClick={Delete}>
                      Supprimer l'article
                    </button>
                    <ToastContainer></ToastContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}
