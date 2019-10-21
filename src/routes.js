import Home from "components/home/Home.jsx";
import Articles from "components/articles/Articles.jsx";


const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/articles",
    component: Articles,
    exact: true
  },
];

export default routes