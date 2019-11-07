import Home from "components/home/Home.jsx";
import Articles from "components/articles/Articles.jsx";
import ProfileContainer from "./containers/profile-container/ProfileContainer";


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
];

export default routes