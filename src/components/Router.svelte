<script context="module">
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
  export let params;
  export let prepopulate_content;

  onMount(() => {
    if (!ssr) {
      routes.forEach((route) => {
        if (route.url) {
          router.on(route.url, (parameter) => {
            view = route.view;
            params = parameter;
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
  
<svelte:component this={view} {params} {prepopulate_content} />