<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import PostListItem from "./PostListItem.svelte";

  export let posts;
  export let params;
  export let current_scroll = 0;

  onMount(() => {
    window.scrollTo(0, current_scroll);
  });
</script>

<main class="listing" in:fade={{ duration: 150 }}>
  {#each posts as post}
    <PostListItem {...post} />
  {/each}

  {#if posts && posts.length == 0 && params.tag}
    <p class="text-center">
      Sorry, no posts found for this tag.
      <br /><br />
      <a href="/">Home</a>
    </p>
  {/if}
</main>

{#if posts}
  <footer>
    <a href="/about" title="About">
      <div class="heart">❤</div>
    </a>
  </footer>
{/if}
