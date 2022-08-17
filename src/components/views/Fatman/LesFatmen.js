import React, { Fragment, useEffect, useState } from "react";
import "../../../App.css";
import FatmanService from "../../services/fatman.service";
import { Link } from "react-router-dom";

export default function LesFatmen() {
  const [fatmanList, setFatmanList] = useState([]);

  const displayFatman = fatmanList.map((val, key) => {
    let link = `/fatman/${val.idFatman}`;
    return (
      <div
        key={key}
        className="col-xl-3 col-md-5 mx-3 py-3 d-flex justify-content-center"
      >
        <Link className="link" to={link}>
          <div className="fatmen-img">
            <img
              className="apparition whiteShadow image-zoom card-img-top"
              src={val.image}
              alt={val.name}
            />
          </div>
        </Link>
      </div>
    );
  });

  useEffect(() => {
    const lesFatmen = async () => {
      FatmanService.lesFatmen()
        .then((response) => {
          setFatmanList(response.data.reverse());
        })
        .catch((error) => {
          console.error(error);
        });
    };
    lesFatmen();
  }, []);

  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center pt-4 py-1 apparition">Mes Fatmen </h1>
        <div className="row d-flex justify-content-center pb-4">
          {displayFatman}
        </div>
      </div>
    </Fragment>
  );
}
