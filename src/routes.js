import { config } from './config';
import ContentLoader from "./views/ContentLoader.svelte";
import PostList from "./views/PostList.svelte";
import PostSingle from "./views/PostSingle.svelte";
import About from "./views/About.svelte";
import NotFound from "./views/NotFound.svelte";
import PortfolioSingle from "./views/PortfolioSingle.svelte";
import PortfolioList from "./views/PortfolioList.svelte";

export const routes = [
  {
    url: "/",
    api: `${config.api}/posts/tag/home`,
    view: ContentLoader,
    component: PostList
  },
  {
    url: "/articles",
    api: `${config.api}/posts/tag/article`,
    view: ContentLoader,
    component: PostList,
  },
  {
    url: "/articles/:slug",
    api: `${config.api}/posts`,
    view: ContentLoader,
    component: PostSingle,
  },
  {
    url: "/portfolio",
    api: `${config.api}/posts/tag/portfolio`,
    view: ContentLoader,
    component: PortfolioList
  },
  {
    url: "/portfolio/:slug",
    api: `${config.api}/posts`,
    view: ContentLoader,
    component: PortfolioSingle
  },
  {
    url: "/tag/:slug",
    api: `${config.api}/posts/tag`,
    view: ContentLoader,
    component: PostList
  },
  {
    url: "/about",
    view: About,
  },
  {
    view: NotFound,
  }
];
