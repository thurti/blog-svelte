<script>
  import { onMount, onDestroy } from "svelte";

  export let delay = 500;

  let show = false;
  let loader_timeout;

  onMount(() => {
    //show loader if loading takes longer than 500ms
    loader_timeout = window.setTimeout(() => {
      show = true;
    }, delay);
  });

  onDestroy(() => {
    window.clearTimeout(loader_timeout);
  });
</script>

{#if show}
  <main>
    <div id="loader">
      <div class="inner1" />
      <div class="inner2" />
      <div class="inner3" /><br />
      <span class="small">loading</span>
    </div>
  </main>
{/if}
