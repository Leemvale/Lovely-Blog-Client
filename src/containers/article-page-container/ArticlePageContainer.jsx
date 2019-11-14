import React, { Component } from 'react';

import ArticlePage from 'components/article-page/ArticlePage';
import { articleService } from 'services/article.service';

class ArticlePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { article: null };
  }

  getArticle() {
    const { id } = this.props.match.params
    articleService.getById(id).then(
      (article) => {
        this.setState({ article });
      }
    )
  }

  componentDidMount(){
    this.getArticle();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params != prevProps.match.params) {
      this.getArticle();
    }
  }

  render() {
    return (
      this.state.article ? <ArticlePage article={ this.state.article } /> : '' 
    );
  }
}

export default ArticlePageContainer;
