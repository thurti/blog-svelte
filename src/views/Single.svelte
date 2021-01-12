<script>
  import { getPosts } from '../functions/api';
  import { fade } from "svelte/transition";
  import Loader from "../components/Loader.svelte";
  import Post from "../components/Post.svelte";
  import ErrorMessage from "../components/ErrorMessage.svelte";
  import Page from "../components/Page.svelte";

  export let params;
  export let prepopulate_content;
</script>

{#if prepopulate_content}
  <Post post={prepopulate_content} />
{:else}
  {#await getPosts(params)}
    <Loader />
  {:then post}
    <div in:fade={{ duration: 150 }}>
      <Post {post} />
    </div>
  {:catch error}
    <Page center=true>
      <ErrorMessage {error} />
    </Page>
  {/await}
{/if}