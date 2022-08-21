import React from "react";
import { Link } from "react-router-dom";
import logo_fbs from "../../../images/logo_fbs.png";
// import ReactSwitch from "react-switch";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="justify-content-start mx-4">
        <Link className="navbar-brand" to="/">
          <img src={logo_fbs} alt="logo" className="leLogo" />
        </Link>

        <Link className="navbar-brand" to="/">
          Accueil
        </Link>

        <Link className="navbar-brand " to="/videos">
          Videos
        </Link>

        <Link
          className="navbar-brand dropdown"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          to="/fatmen"
        >
          Fatman
        </Link>
        {/* <Link className="navbar-brand" to="/profil">
        Mon profil
      </Link> */}
      </div>
      {/* <div className="switch">
        <label>{props.theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        <ReactSwitch
          onChange={props.toggleTheme}
          checked={props.theme === "dark"}
        />
      </div> */}
      {/* <div className="justify-content-end mx-4">
        <Link className="navbar-brand" to="/auth">
          Connexion
        </Link>
        <Link className="navbar-brand" to="/deconnexion">
          Deconnexion
        </Link>
      </div> */}
      {/* <Link className="navbar-brand" to="/inscription">
        Inscription
      </Link> */}
    </nav>
  );
}
