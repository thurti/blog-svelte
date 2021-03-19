<script context="module">
  import Navaid from "navaid";
  
  export let router;
</script>

<script>
  import { onMount, onDestroy } from "svelte";
  import { url, page_scroll } from '../store';
  import NotFound from "../views/NotFound.svelte";

  export let routes = [];

  //ssr
  export let ssr = false;
  export let route;
  export let params;
  export let prepopulate_content;

  let view = route?.view;
  let component = route?.component;
  const scroll_positions = new Map();

  function storeScrollPosition() {
    scroll_positions.set($url, window.scrollY); //store scroll before change view
    $url = window.location.pathname;
    $page_scroll = scroll_positions.get($url);
  }

  onMount(() => {
    router = Navaid("/", () => view = NotFound);

    if (!ssr) {
      routes.forEach((route) => {
        if (route.url) {
          router.on(route.url, (parameter) => {

            params = parameter;
            params.api = route.api;
            params.title = route.title;
            params.url = route.url;

            if (typeof window !== "undefined") {
              storeScrollPosition();
            }
            
            view = route.view;
            component = route.component;
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