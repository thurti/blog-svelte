<script context="module">
  import Navaid from "navaid";
  import NotFound from "../views/NotFound.svelte";
  
  export const router = Navaid("/", () => (view = NotFound));
</script>

<script>
  import { onMount, onDestroy } from "svelte";
  import { url, page_scroll } from '../store'; 

  export let routes = [];

  //ssr
  export let ssr = false;
  export let view;
  export let component;
  export let params;
  export let prepopulate_content;

  const scroll_positions = new Map();

  function storeScrollPosition() {
    scroll_positions.set($url, window.scrollY); //store scroll before change view
    $url = window.location.pathname;
    $page_scroll = scroll_positions.get($url);
  }

  onMount(() => {
    if (!ssr) {
      routes.forEach((route) => {
        if (route.url) {
          router.on(route.url, (parameter) => {

            params = parameter;
            params.api = route.api;
            params.title = route.title;
            params.url = route.url;

            if (typeof window !== "undefined")
              storeScrollPosition();
            
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