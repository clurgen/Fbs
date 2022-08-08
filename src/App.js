import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Creation from "./components/views/Article/CreationArticle";
import Update from "./components/views/Article/UpdateArticle";
import Article from "./components/views/Article/Article";
import Articles from "./components/views/Article/LesArticles";
import Navbar from "./components/views/Navbar/Navbar";
import Connexion from "./components/views/User/Connexion";
import Inscription from "./components/views/User/Inscription";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/article/add" element={<Creation />} />
        <Route path="/article/:id/" element={<Article />} />
        <Route path="/article/edit/:id/" element={<Update />} />
        <Route path="/articles" element={<Articles />} />

        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </div>
  );
}

export default App;
