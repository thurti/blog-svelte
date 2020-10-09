<script context="module">
  import Navaid from 'navaid';
  import NotFound from '../views/NotFound.svelte';

  export const router = Navaid('/', () => view = NotFound);
</script>

<script>
  import {onMount, onDestroy} from 'svelte';

  export let routes = [];

  let view;
  let params;

  onMount(() => {
    routes.forEach(route => {
      router.on(route.url, (parameter) => {
        view = route.view;
        params = parameter;
      })
    });
    router.listen();
  });

  onDestroy(router.unlisten);
</script>

<svelte:component 
  this={view} 
  {params}
/>