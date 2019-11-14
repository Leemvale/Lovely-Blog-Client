import Home from "components/home/Home.jsx";
import Articles from "components/articles/Articles.jsx";
import ProfileContainer from "./containers/profile-container/ProfileContainer";
import ArticlePageContainer from "./containers/article-page-container/ArticlePageContainer";


const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/profiles/:id",
    component: ProfileContainer,
    exact: true
  },
  {
    path: "/articles",
    component: Articles,
    exact: true
  },
  {
    path: "/articles/:id",
    component: ArticlePageContainer,
    exact: true
  },
];

export default routes