import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/article/add">Ajouter un article</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/profil">Mon profil</Link>
      <Link to="/connexion">Connexion</Link>
      <Link to="/inscription">Inscription</Link>
    </nav>
  );
}
