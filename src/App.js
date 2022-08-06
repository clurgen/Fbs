import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Creation from "./components/Article/CreationArticle";
import Article from "./components/Article/Article";
import Articles from "./components/Article/LesArticles";
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Creation />} />
      <Route path="/article/:id/" element={<Article/>} />
      <Route path="/articles" element={<Articles/>} />
    </Routes>
    </div>
  );
}

export default App;
