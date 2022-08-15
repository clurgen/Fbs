import React from "react";
import { useForm } from "react-hook-form";
import "../../../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArticleService from "../../services/article.service";
// import { Navigate } from "react-router-dom";

export default function CreationArticle() {
  const { register, handleSubmit } = useForm();
  // const { rewiew, setReview } = useState("");

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
    <div>
      <div className="container">
        <div className="mx-3 py-3 d-flex justify-content-center">
          <div className="card col-xl py-3 shadow text-white bg-dark rounded">
            <div className="card-body">
              <h2 className="h2 text-center py-3">Super formulaire !</h2>
              <div className="d-flex align-items-center justify-content-center container-center">
                <div className="py-3">
                  <form
                    encType="multipart/form-data"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="form row">
                      <div className="form-group">
                        <label>Nom</label>
                        <input
                          {...register("name")}
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <label>Description</label>
                        <textarea
                          {...register("description")}
                          className="form-control"
                          type="text"
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
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label>Nombre d'épisode</label>
                        <input
                          {...register("nbEpisodes")}
                          className="form-control"
                          type="number"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label>Episode</label>
                        <input
                          {...register("episode")}
                          className="form-control"
                          type="number"
                        />
                      </div>
                    </div>
                    <div className="form row">
                      <div className="form-group ">
                        <label>Vidéo</label>
                        <input
                          {...register("video")}
                          className="form-control"
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <label>Image</label>
                        <input
                          {...register("image")}
                          className="form-control"
                          type="file"
                          name="image"
                          accept="image/*"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Avis</label>
                      <input
                        {...register("avis")}
                        className="form-control"
                        type="text"
                      />
                    </div>
                    <div className="form row">
                      <div className="form-group col-md-6">
                        <label>Ressenti</label>
                        <select
                          {...register("ressenti")}
                          className="form-control"
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
                        >
                          <option value="">Choisir</option>
                          <option value="Review">Review</option>
                          <option value="FBS">FBS</option>
                          <option value="Opening">Opening</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-2 justify-content-center">
                      <button type="submit" className="mt-2 btn btn-primary">
                        Ajouter un article
                      </button>
                    </div>
                    <ToastContainer></ToastContainer>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
