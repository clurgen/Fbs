import React, { useState } from "react";
import UserService from "../../services/user.service";
import "../../../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Inscription() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [pseudo, setPseudo] = useState("");
  const type = 2;

  const Inscription = () => {
    let body = {
      mail: mail,
      password: password,
      pseudo: pseudo,
      type: type,
    };

    UserService.inscription(body)
      .then(() => {
        toast.success(" Bienvenue !", {
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
  };

  return (
    <div className="container-fluid">
      <div className="container d-flex justify-content-center ">
        <div className="col-xl-2">
          <div className="form-group">
            <h1 class="h1">S'inscrire</h1>
            <label>Email</label>
            <input
              class="form-control"
              placeholder="Email"
              onChange={(e) => {
                setMail(e.target.value);
              }}
              type="mail"
            />
            <label>Pseudo</label>
            <input
              class="form-control"
              placeholder="Pseudo"
              onChange={(e) => {
                setPseudo(e.target.value);
              }}
              type="text"
            />
            <label>Mot de passe</label>
            <input
              class="form-control"
              placeholder="Mot de passe"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
            />
            <button className="btn btn-primary" onClick={Inscription}>
              Inscription
            </button>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
