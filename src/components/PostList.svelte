<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { prism } from "svelte-prism-action";
  import Meta from "./Meta.svelte";
  import PostListItem from "./PostListItem.svelte";

  export let posts;
  export let params;
  export let current_scroll = 0;

  const meta = {
    title: "Welcome",
    description:
      "My development journal about things I've done. Mainly focused on web stuff...",
    slug: "",
    image: "marker_240.jpg",
    imageAlt: "Weird Square Face",
  };

  onMount(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, current_scroll);
    }
  });
</script>

<Meta {...meta} />

<main in:fade={{ duration: 150 }} use:prism>
  {#each posts as post}
    <PostListItem {...post} />
  {/each}

  {#if posts?.length == 0 && params?.tag}
    <p class="text-center">
      Sorry, no posts found for this tag.
      <br /><br />
      <a href="/">Home</a>
    </p>
  {/if}
</main>

{#if posts}
  <footer class="center">
    <a href="/about" title="About" class="no-hover">
      <div class="heart">❤</div>
    </a>
  </footer>
{/if}
