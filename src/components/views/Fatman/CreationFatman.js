import React from "react";
import { useForm } from "react-hook-form";
import "../../../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FatmanService from "../../services/fatman.service";
// import { Navigate } from "react-router-dom";

export default function CreationFatman() {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);

    FatmanService.createFatman(formData)
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
              <h2 className="h2 text-center py-3">Ajoutons un Fatman !</h2>
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

                    <div className="mt-2 justify-content-center">
                      <button type="submit" className="mt-2 btn btn-primary">
                        Ajouter un fatman
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
