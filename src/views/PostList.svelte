<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { prism } from "svelte-prism-action";
  import Meta from "../components/Meta.svelte";
  import PostListItem from "../components/PostListItem.svelte";

  export let content;
  export let params;
  export let current_scroll = 0;

  const meta = {
    title: "Articles",
    description:
      "This is my personal web development journal about things I've learned.",
    url: "articles",
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
  {#each content as post}
    <PostListItem {...post} />
  {/each}

  {#if content?.length == 0 && params?.tag}
    <p class="text-center">
      Sorry, no posts found for this tag.
      <br /><br />
      <a href="/">Home</a>
    </p>
  {/if}
</main>

{#if content}
  <footer class="center">
    <a href="/about" title="About" class="no-hover">
      <div class="heart">❤</div>
    </a>
  </footer>
{/if}
