import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Accueil
      </Link>
      <Link className="navbar-brand" to="/article/add">
        Ajouter un article
      </Link>
      <Link className="navbar-brand" to="/articles">
        Articles
      </Link>
      <Link className="navbar-brand" to="/profil">
        Mon profil
      </Link>
      <Link className="navbar-brand" to="/connexion">
        Connexion
      </Link>
      <Link className="navbar-brand" to="/inscription">
        Inscription
      </Link>
    </nav>
  );
}
