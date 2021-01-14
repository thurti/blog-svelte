<script context="module">
  import { router_current } from '../store'; 
  import Navaid from "navaid";
  import NotFound from "../views/NotFound.svelte";

  export const router = Navaid("/", () => (view = NotFound));
</script>

<script>
  import { onMount, onDestroy } from "svelte";

  export let routes = [];

  //ssr
  export let ssr = false;
  export let view;
  export let component;
  export let params;
  export let prepopulate_content;

  onMount(() => {
    if (!ssr) {
      routes.forEach((route) => {
        if (route.url) {
          router.on(route.url, (parameter) => {
            view = route.view;
            component = route.component;
            $router_current = route.url;
            params = parameter;
            params.api = route.api;
          });
        }
      });
      router.listen();
    }
  });

  onDestroy(() => {
    if (!ssr) {
      router.unlisten();
    }
  });
</script>
  
<svelte:component this={view} {component} {params} {prepopulate_content} />