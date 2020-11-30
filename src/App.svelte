<script>
  import { config } from "./config";
  import Logo from "./components/Logo.svelte";
  import Router from "./components/Router.svelte";
  import { routes } from "./routes";

  export let current_view; //ssr
  export let params; //ssr
  export let prepopulate_content; //ssr
</script>

<header>
  <a href={config.url} alt="t3000.uber.space">
    <Logo />
  </a>
</header>

<Router {routes} {current_view} {prepopulate_content} />
