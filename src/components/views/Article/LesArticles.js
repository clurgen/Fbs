import React, { Fragment, useEffect, useState } from "react";
import "../../../App.css";
import ArticleService from "../../services/article.service";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import TextTruncate from "react-text-truncate";

export default function LesArticles() {
  const url = window.location.href;
  const urlSplit = url.split("/");
  const playlist = urlSplit[4];
  const [articleList, setArticleList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const articlePerPage = 6;
  const pageVisited = pageNumber * articlePerPage;

  const displayArticle = articleList
    .slice(pageVisited, pageVisited + articlePerPage)
    .map((val, key) => {
      let link = `/article/${val.idArticle}`;
      return (
        <div
          key={key}
          className="col-xl-3 col-md-5 mx-3 py-3 d-flex justify-content-center"
        >
          <div className="card apparition whiteShadow p-3 mb-5 text-white bg-dark rounded">
            <Link to={link}>
              <img className="card-img-top" src={val.image} alt={val.name} />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{val.name}</h5>
              <p className="card-text">
                <TextTruncate
                  line={3}
                  element="span"
                  truncateText="…"
                  text={val.description}
                />
              </p>
              <Link className="link" to={link}>
                Lire l'article
              </Link>
            </div>
          </div>
        </div>
      );
    });

  useEffect(() => {
    if (playlist) {
      const lesArticlesByPlaylist = async () => {
        ArticleService.lesArticlesByPlaylist(playlist)
          .then((response) => {
            setArticleList(response.data.reverse());
          })
          .catch((error) => {
            console.error(error);
          });
      };
      lesArticlesByPlaylist();
    } else {
      const lesArticles = async () => {
        ArticleService.lesArticles()
          .then((response) => {
            setArticleList(response.data.reverse());
          })
          .catch((error) => {
            console.error(error);
          });
      };
      lesArticles();
    }
  }, []);

  const pageCount = Math.ceil(articleList.length / articlePerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Fragment>
      <div className="container">
        {playlist ? (
          <h1 className="apparition text-center pt-4 py-1">Mes {playlist} </h1>
        ) : (
          <h1 className="apparition text-center pt-4 py-1">Mes Articles </h1>
        )}
        <div className="row d-flex justify-content-center">
          {displayArticle}
          <ReactPaginate
            previousLabel="Précedent"
            nextLabel="Suivant"
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName="paginationBtns"
            previousLinkClassName="previousBtn"
            pageLinkClassName="pageBtn"
            nextLinkClassName="nextBtn"
            disabledClassName="paginationDisabled"
            activeClassName="paginationActived"
          />
        </div>
      </div>
    </Fragment>
  );
}
