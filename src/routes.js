import List from "./views/List.svelte";
import Single from "./views/Single.svelte";
import About from "./views/About.svelte";

export const routes = [
  {
    url: "/",
    view: List,
    name: "list",
  },
  {
    url: "/tag/:tag",
    view: List,
    name: "list_tag",
  },
  {
    url: "/about",
    view: About,
    name: "about",
  },
  {
    url: "/:slug",
    view: Single,
    name: "single",
  },
];
