<script>
  import { config } from "./config";
  import Logo from "./components/Logo.svelte";
  import Router from "./components/Router.svelte";
  import { routes } from "./routes";

  //ssr
  export let ssr = false;
  export let viewname;
  export let params;
  export let prepopulate_content;

  const view = routes.find((route) => route.name === viewname)?.view;
</script>

<header>
  <a href={config.url} alt="t3000.uber.space">
    <Logo />
  </a>
</header>

<Router 
  {routes}
  {ssr} 
  {view} 
  {params} 
  {prepopulate_content} 
/>