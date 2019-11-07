import React from "react";
import ArticleTile from "../tiles/article/ArticleTile";

const Articles = ({ articles }) => {
  const articleElements = articles.map(article => <ArticleTile key={ article.id } article={ article }/>);
  return(
    <div>
      { articleElements }
    </div>
  )
}

export default Articles;