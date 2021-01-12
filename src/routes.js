import { config } from './config';
import List from "./views/List.svelte";
import ArticleSingle from "./views/ArticleSingle.svelte";
import About from "./views/About.svelte";
import NotFound from "./views/NotFound.svelte";
import PortfolioSingle from "./views/PortfolioSingle.svelte";

export const routes = [
  {
    url: "/",
    api: `${config.api}/posts`,
    view: List,
    name: "Index",
  },
  {
    url: "/tag/:slug",
    api: `${config.api}/posts/tag`,
    view: List,
    name: "Tag",
  },
  {
    url: "/about",
    view: About,
    name: "About"
  },
  {
    url: "/portfolio",
    api: `${config.api}/posts/tag/portfolio`,
    view: List,
    name: "PortfolioList",
  },
  {
    url: "/portfolio/:slug",
    api: `${config.api}/posts`,
    view: PortfolioSingle,
    name: "PortfolioSingle",
  },
  {
    url: "/articles/:slug",
    api: `${config.api}/posts`,
    view: ArticleSingle,
    name: "ArticleSingle",
  },
  {
    view: NotFound,
    name: "NotFound"
  }
];
