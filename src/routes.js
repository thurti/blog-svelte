import List from "./views/List.svelte";
import Single from "./views/Single.svelte";
import About from "./views/About.svelte";

export const routes = [
  {
    url: "/",
    view: List,
    name: "Index"
  },
  {
    url: "/tag/:tag",
    view: List,
    name: "Tag"
  },
  {
    url: "/about",
    view: About,
    name: "About"
  },
  {
    url: "/:slug",
    view: Single,
    name: "Single"
  }
];
