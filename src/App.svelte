<script>
  import Router from "./components/Router.svelte";
  import { routes } from "./routes";
  import Nav from "./components/Nav.svelte";

  //ssr
  export let ssr = false;
  export let viewname;
  export let params;
  export let prepopulate_content;

  const view = routes.find((route) => route.name === viewname)?.view;
  const nav_items = routes.filter(route => (route.title && !route.hide) ?? false);
</script>

<Nav items={nav_items} />

<Router 
  {routes}
  {ssr} 
  {view} 
  {params} 
  {prepopulate_content} 
/>