import React from "react";
import { useForm } from "react-hook-form";
import "../../../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArticleService from "../../services/article.service";

export default function CreationArticle() {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
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

    ArticleService.createArticle(formData)
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

  return (
    <div className="container-fluid">
      <h2 className="h2 text-center py-3">Super formulaire !</h2>
      <div className="container d-flex justify-content-center">
        <div className="col-md-10 py-3">
          <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Nom</label>
              <input
                {...register("name")}
                className="form-control"
                type="text"
              />
              <label>Description</label>
              <textarea
                {...register("description")}
                className="form-control"
                type="text"
              />
              <label>Nombre de Saison</label>
              <input
                {...register("nbSaison")}
                className="form-control"
                type="number"
              />
              <label>Nombre d'épisode</label>
              <input
                {...register("nbEpisode")}
                className="form-control"
                type="number"
              />
              <label>Episode</label>
              <input
                {...register("episode")}
                className="form-control"
                type="number"
              />
              <label>Vidéo</label>
              <input
                {...register("video")}
                className="form-control"
                type="text"
              />
              <label>Image</label>
              <input
                {...register("image")}
                className="form-control"
                type="file"
                name="image"
                accept="image/*"
              />
              <label>Avis</label>
              <input
                {...register("avis")}
                className="form-control"
                type="text"
              />
              <label>Ressenti</label>
              <select {...register("ressenti")} className="form-control">
                <option value="">Choisir</option>
                <option value="superTop">SUPER Top</option>
                <option value="top">Top</option>
                <option value="moyen">Moyen</option>
                <option value="pasOuf">Pas ouf</option>
                <option value="naze">Naze</option>
              </select>
              <label>Playlist</label>
              <select {...register("playlist")} className="form-control">
                <option value="">Choisir</option>
                <option value="Mushoku_review">Mushoku</option>
                <option value="Spider_review">spider so what</option>
                <option value="FBS">FBS</option>
              </select>
              <div className="py-2">
                <button type="submit" className="btn btn-primary">
                  Ajouter un article
                </button>
              </div>
              <ToastContainer></ToastContainer>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
