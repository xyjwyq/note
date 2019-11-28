import Home from "./components/Home";
import News from "./components/News";
import NewsHome from "./components/NewsHome";
import NewsDetail from "./components/NewsDetail";
import NewsSearch from "./components/NewsSearch";

export default [
  {
    path: "/news",
    name: "news",
    component: News,
    children: [
      {
        path: "/",
        name: "newsHome",
        exact: true,
        component: NewsHome
      },
      {
        path: "/detail",
        name: "newsDetail",
        exact: true,
        component: NewsDetail
      },
      {
        path: "/search",
        name: "newsSearch",
        exact: true,
        component: NewsSearch
      }
    ]
  },
  {
    path: "/",
    name: "home",
    component: Home
  }
];
