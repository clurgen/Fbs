import React, { Fragment, useEffect, useState } from "react";
import "../../../App.css";
import FatmanService from "../../services/fatman.service";

export default function Fatman() {
  const url = window.location.href;
  const urlSplit = url.split("/");
  const id = urlSplit[4];

  const [fatman, setFatman] = useState([]);

  useEffect(() => {
    const leFatman = async () => {
      FatmanService.leFatman(id)
        .then((response) => {
          setFatman(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    leFatman();
  }, []);

  return (
    <Fragment>
      <div className="container-fluid">
        {fatman.map((val, key) => {
          return (
            <div key={key} className="container">
              <h1 className="title text-center pt-3">{val.name}</h1>
              <div className="py-3 row justify-content-center ">
                <img
                  className=" col-xl-4 col-md-8 d-flex mw-100"
                  alt="Couverture de l'anime"
                  src={val.image}
                />
              </div>
              <div className="row text-center">
                <p className="h4">{val.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
