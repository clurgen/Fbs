import React, { Fragment, useEffect, useState } from "react";
import "../../../App.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FatmanService from "../../services/fatman.service";
// import { Navigate } from "react-router-dom";

export default function UpdateFatman() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [fatman, setFatman] = useState([]);
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
      formData.append("image", data.image[0]);

      FatmanService.updateFatman(id, formData)
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
      };

      FatmanService.updateFatmanSansImage(id, body)
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
    FatmanService.delete(id)
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
    const lFatman = async () => {
      FatmanService.lFatman(id)
        .then((response) => {
          setFatman(response.data);
          setName(response.data[0].name);
          setDescription(response.data[0].description);
          setImage(response.data[0].image);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    lFatman();
  }, [id]);

  return (
    <Fragment>
      {fatman.map((val, key) => {
        return (
          <div key={key}>
            <div className="container-fluid">
              <div className="container col-9">
                <form
                  encType="multipart/form-data"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="form-row">
                    <h2 className="h2 text-center">
                      Mettre à jour un Fatman !
                    </h2>
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
                        alt="FATMAN"
                        src={image}
                      />
                    </div>
                  </div>
                  <div className="my-2 text-center">
                    <button type="submit" className="btn btn-primary">
                      Editer un fatman
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
