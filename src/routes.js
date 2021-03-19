import { config } from './config';
import ContentLoader from "./views/ContentLoader.svelte";
import Home from "./views/Home.svelte";
import PostList from "./views/PostList.svelte";
import PostSingle from "./views/PostSingle.svelte";
import About from "./views/About.svelte";
import NotFound from "./views/NotFound.svelte";
import PortfolioSingle from "./views/PortfolioSingle.svelte";
import PortfolioList from "./views/PortfolioList.svelte";

export const routes = [
  {
    name: "Home",
    url: "/",
    api: `${config.api}/posts/tag/home`,
    title: "Hello",
    view: ContentLoader,
    component: Home
  },
  {
    name: "PostList",
    url: "/articles",
    api: `${config.api}/posts/tag/article`,
    title: "Articles",
    view: ContentLoader,
    component: PostList,
  },
  {
    name: "PostSingle",
    url: "/articles/:slug",
    api: `${config.api}/posts`,
    view: ContentLoader,
    component: PostSingle
  },
  {
    name: "PortfolioList",
    url: "/portfolio",
    api: `${config.api}/posts/tag/portfolio`,
    title: "Portfolio",
    view: ContentLoader,
    component: PortfolioList
  },
  {
    name: "PortfolioSingle",
    url: "/portfolio/:slug",
    api: `${config.api}/posts`,
    view: ContentLoader,
    component: PortfolioSingle
  },
  {
    name: "Tag",
    url: "/tag/:slug",
    api: `${config.api}/posts/tag`,
    title: 'Tag',
    hide: true,
    view: ContentLoader,
    component: PostList
  },
  {
    name: "About",
    url: "/about",
    title: "About",
    view: About
  },
  {
    name: "NotFound",
    view: NotFound,
  }
];
