<script>
  import { config } from "../config";
  import { fade } from "svelte/transition";
  import Loader from "../components/Loader.svelte";
  import Post from "../components/Post.svelte";
  import ErrorMessage from "../components/ErrorMessage.svelte";

  export let params;
  export let prepopulate_content;

  async function getPost(params) {
    const res = await fetch(`${config.api}/${params.slug}`);

    if (res.ok) {
      return await res.json();
    } else {
      throw new Error(`${res.status}: ${res.statusText}`);
    }
  }
</script>

{#if prepopulate_content}
  <Post post={prepopulate_content} />
{:else}
  {#await getPost(params)}
    <Loader />
  {:then post}
    <div in:fade={{ duration: 150 }}>
      <Post {post} />
    </div>
  {:catch error}
    <ErrorMessage {error} />
  {/await}
{/if}