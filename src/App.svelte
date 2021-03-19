<script>
  import Router from "./components/Router.svelte";
  import { routes } from "./routes";
  import Nav from "./components/Nav.svelte";

  //ssr
  export let ssr = false;
  export let viewname;
  export let params;
  export let prepopulate_content;

  const route = routes.find((route) => route.name === viewname);
  const nav_items = routes.filter(route => (route.title && !route.hide) ?? false);
</script>

<Nav items={nav_items} />

<Router 
  {routes}
  {ssr} 
  {route} 
  {params} 
  {prepopulate_content} 
/>