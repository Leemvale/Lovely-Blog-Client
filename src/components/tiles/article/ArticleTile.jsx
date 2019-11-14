import React from 'react';
import { Link } from 'react-router-dom';
import './article-tile.scss'

const ArticleTile = ({ article }) => (
  <article className="article-tile">
    <div className="article-tile__img">
      <img src={article.image_url} alt="Article image" />
    </div>
    <div className="article-tile__body">
      <Link to={`/articles/${article.id}`}><h2 className="article-tile__title">{article.title}</h2></Link>
      <p className="article-tile__text">{article.text}</p>
      <div className="article-tile__actions">
        <a href="">Edit</a>
        <a href="">Destroy</a>
      </div>
    </div>
  </article>
);

export default ArticleTile;