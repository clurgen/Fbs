import React, { Fragment, useEffect, useState } from "react";
import "../../../App.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArticleService from "../../services/article.service";
// import { Navigate } from "react-router-dom";

export default function UpdateArticle() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [episode, setEpisode] = useState(0);
  const [nbEpisodes, setNbEpisodes] = useState(0);
  const [nbSaison, setNbSaison] = useState(0);
  const [video, setVideo] = useState("");
  const [image, setImage] = useState("");
  const [avis, setAvis] = useState("");
  const [playlist, setPlaylist] = useState("");
  const [ressenti, setRessenti] = useState("");
  const [article, setArticle] = useState([]);
  const url = window.location.href;
  const urlSplit = url.split("/");
  const id = urlSplit[5];

  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    console.log(data.image.length);
    if (data.image.length > 0) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("nbSaison", data.nbSaison);
      formData.append("nbEpisodes", data.nbEpisodes);
      formData.append("episode", data.episode);
      formData.append("video", data.video);
      formData.append("image", data.image[0]);
      formData.append("avis", data.avis);
      formData.append("ressenti", data.ressenti);
      formData.append("playlist", data.playlist);

      ArticleService.updateArticle(id, formData)
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
          toast.error(" FUCK !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    } else {
      const body = {
        name: data.name,
        description: data.description,
        nbSaison: data.nbSaison,
        nbEpisodes: data.nbEpisodes,
        episode: data.episode,
        video: data.video,
        avis: data.avis,
        ressenti: data.ressenti,
        playlist: data.playlist,
      };

      ArticleService.updateArticleSansImage(id, body)
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
          toast.error(" FUCK !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  }

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
          setVideo(response.data[0].urlVideo);
          setImage(response.data[0].image);
          setAvis(response.data[0].avis);
          setRessenti(response.data[0].ressenti);
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
          <div key={key}>
            <div className="container-fluid">
              <div className="container col-9">
                <form
                  encType="multipart/form-data"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="form-row">
                    <h2 className="h2 text-center">Super formulaire !</h2>
                  </div>
                  <div className="form row">
                    <div className="form-group col-xl-4">
                      <label>Nom</label>
                      <input
                        {...register("name")}
                        className="form-control"
                        type="text"
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group col-xl-8">
                      <label>Description</label>
                      <textarea
                        {...register("description")}
                        className="form-control"
                        type="text"
                        value={description}
                        onChange={(event) => {
                          setDescription(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form row">
                    <div className="form-group col-md-4">
                      <label>Nombre de Saison</label>
                      <input
                        {...register("nbSaison")}
                        className="form-control"
                        type="number"
                        value={nbSaison}
                        onChange={(event) => {
                          setNbSaison(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label>Nombre d'épisode</label>
                      <input
                        {...register("nbEpisodes")}
                        className="form-control"
                        type="number"
                        value={nbEpisodes}
                        onChange={(event) => {
                          setNbEpisodes(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label>Episode</label>
                      <input
                        {...register("episode")}
                        className="form-control"
                        type="number"
                        value={episode}
                        onChange={(event) => {
                          setEpisode(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="form row">
                    <div className="form-group col-md-6">
                      <label>Vidéo</label>
                      <input
                        {...register("video")}
                        className="form-control"
                        type="text"
                        value={video}
                        onChange={(event) => {
                          setVideo(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label>Image</label>
                      <input
                        {...register("image")}
                        className="form-control"
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={(event) => {
                          setImage(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group col-md-2">
                      <img
                        className="img-fluid mw-100"
                        alt="Couverture de l'anime"
                        src={image}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Avis</label>
                    <textarea
                      {...register("avis")}
                      className="form-control"
                      type="text"
                      value={avis}
                      onChange={(event) => {
                        setAvis(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form row">
                    <div className="form-group col-md-6">
                      <label>Ressenti</label>
                      <select
                        {...register("ressenti")}
                        className="form-control"
                        value={ressenti}
                        onChange={(event) => {
                          setRessenti(event.target.value);
                        }}
                      >
                        <option value="">Choisir</option>
                        <option value="superTop">SUPER Top</option>
                        <option value="top">Top</option>
                        <option value="moyen">Moyen</option>
                        <option value="pasOuf">Pas ouf</option>
                        <option value="naze">Naze</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label>Playlist</label>
                      <select
                        {...register("playlist")}
                        className="form-control"
                        value={playlist}
                        onChange={(event) => {
                          setPlaylist(event.target.value);
                        }}
                      >
                        <option value="">Choisir</option>
                        <option value="Mushoku_Tensei_review">
                          Mushoku Tensei Review
                        </option>
                        <option value="Spider_So_What_review">
                          So I'm Spider So What Review
                        </option>
                        <option value="FBS">FBS</option>
                        <option value="Opening">Opening</option>
                      </select>
                    </div>
                  </div>
                  <div className="my-2 text-center">
                    <button type="submit" className="btn btn-primary">
                      Editer un article
                    </button>
                  </div>
                  <ToastContainer></ToastContainer>
                </form>
                <div className="justify-content-center ">
                  <button onClick={Delete} className="btn btn-primary">
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}
