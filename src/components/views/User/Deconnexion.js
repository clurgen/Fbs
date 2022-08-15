import React from "react";
import { signOut } from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

async function onLogout() {
  await signOut()
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
  window.location.href = "/";
}

export default function Deconnexion() {
  return (
    <div className="container">
      <button
        className="btn btn-primary justify-content-center"
        onClick={onLogout}
      >
        Se déconnecter
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
}
