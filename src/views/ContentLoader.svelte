<script context="module">
  let current_scroll = 0;
</script>

<script>
  import { getPosts } from '../functions/api';
  import { onDestroy } from "svelte";
  import Loader from "../components/Loader.svelte";
  import ErrorMessage from "../components/ErrorMessage.svelte";
  import Page from "../components/Page.svelte";

  export let params;
  export let prepopulate_content;
  export let component;

  onDestroy(() => {
    current_scroll = (typeof window !== "undefined") ? window.scrollY : 0;
  });
</script>

{#if prepopulate_content}
  <svelte:component this={component} content={prepopulate_content} {params} />
{:else}
  {#await getPosts(params)}
    <Loader />
  {:then content}
    <svelte:component this={component} {content} {params} {current_scroll} />
  {:catch error}
    <Page center=true>
      <ErrorMessage {error} />
    </Page>
  {/await}
{/if}