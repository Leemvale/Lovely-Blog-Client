import React from "react";
import { Link } from 'react-router-dom';
import './article-page.scss'

const ArticlePage = ({ article }) => (
  <article className="article">
    <section>
      <h2>{article.title}</h2>
      <img src={article.image_url} className="article__img" alt="Article image" />

      <p>
        <strong>Text:</strong>
        {article.text}
      </p>

      <p>
        <strong>Author:</strong>
        <Link to={`/profiles/${article.author.id}`}>{article.author.nickname}</Link>
      </p>
    </section>

    <section>
      <h2>Comments</h2>

      <h2>Add a comment:</h2>

    </section>
  </article>
)

export default ArticlePage;