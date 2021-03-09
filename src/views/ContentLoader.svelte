<script>
  import { getPosts } from '../functions/api';
  import Loader from "../components/Loader.svelte";
  import ErrorMessage from "../components/ErrorMessage.svelte";
  import Page from "../components/Page.svelte";

  export let params;
  export let prepopulate_content;
  export let component;
</script>

{#if prepopulate_content}
  <svelte:component this={component} content={prepopulate_content} {params} />
{:else}
  {#await getPosts(params)}
    <Loader />
  {:then content}
    <svelte:component this={component} {content} {params} />
  {:catch error}
    <Page center=true>
      <ErrorMessage {error} />
    </Page>
  {/await}
{/if}