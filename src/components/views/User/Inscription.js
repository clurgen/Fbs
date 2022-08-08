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
    <div className="information">
      <h1>S'inscrire</h1>
      <label>Email</label>
      <input
        placeholder="Email"
        onChange={(e) => {
          setMail(e.target.value);
        }}
        type="mail"
      />
      <label>Pseudo</label>
      <input
        placeholder="Pseudo"
        onChange={(e) => {
          setPseudo(e.target.value);
        }}
        type="text"
      />
      <label>Mot de passe</label>
      <input
        placeholder="Mot de passe"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
      />
      <button onClick={Inscription}>Inscription</button>
      <ToastContainer></ToastContainer>
    </div>
  );
}
