<script context="module">
  let current_scroll = 0;
</script>

<script>
  import { config } from "../config";
  import { onDestroy } from "svelte";
  import PostList from "../components/PostList.svelte";
  import Loader from "../components/Loader.svelte";
  import ErrorMessage from "../components/ErrorMessage.svelte";
import Page from "../components/Page.svelte";

  export let params;
  export let prepopulate_content;

  onDestroy(() => {
    current_scroll = (typeof window !== "undefined") ? window.scrollY : 0;
  });

  async function getPosts(params) {
    const tag = encodeURI(params.tag);
    const url = params.tag ? `${config.api}/tag/${tag}` : config.api;
    const res = await fetch(url);

    if (res.ok) {
      return await res.json();
    } else {
      throw new Error(`Error: ${res.statusText}`);
    }
  }
</script>

{#if prepopulate_content}
  <PostList posts={prepopulate_content} {params} />
{:else}
  {#await getPosts(params)}
    <Loader />
  {:then posts}
    <PostList {posts} {params} {current_scroll} />
  {:catch error}
    <Page center=true>
      <ErrorMessage {error} />
    </Page>
  {/await}
{/if}