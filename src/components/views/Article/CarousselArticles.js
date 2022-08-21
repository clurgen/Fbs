import React, { Fragment, useEffect, useState } from "react";
import "../../../App.css";
import ArticleService from "../../services/article.service";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const CarousselArticles = (props) => {
  const url = window.location.href;
  const urlSplit = url.split("/");
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    console.log(props.playlist);
    ArticleService.lesArticlesByPlaylist(props.playlist)
      .then((response) => {
        setArticleList(response.data.slice().reverse());
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  articleList.length = 3;
  return (
    <Fragment>
      <div className="container pb-5">
        <div className="row d-flex justify-content-center align-items-center">
          <Carousel className="col-xl-8 whiteShadow">
            {articleList.map((val) => (
              <Carousel.Item key={val.idArticle} interval={4000}>
                <Link to={`video/${val.idArticle}`}>
                  <img
                    className="d-block w-100 "
                    src={val.image}
                    alt="First slide"
                  />
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
          <Link
            to={`videos/${props.playlist}`}
            className="pt-4 voirPlus link-light col-xl-5"
          >
            Voir plus
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default CarousselArticles;
