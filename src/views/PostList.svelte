<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { prism } from "svelte-prism-action";
  import Meta from "../components/Meta.svelte";
  import PostListItem from "../components/PostListItem.svelte";
  import FooterHeart from "../components/FooterHeart.svelte";
  import PageTitle from "../components/PageTitle.svelte";
  import { page_scroll } from '../store';

  export let content;
  export let params;

  const meta = {
    title: params.title,
    description: "This is my personal web development journal about things I've done and learned.",
    url: params.url,
    image: "marker_240.jpg",
    imageAlt: "Weird Square Face",
  };

  const title = params.title === "Tag" ? `Tag: <q>${params.slug}</q>` : params.title; 

  onMount(() => {
    window.scrollTo(0, $page_scroll);
  })
</script>

<Meta {...meta} />

<PageTitle {title} />

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
  <FooterHeart />
{/if}
