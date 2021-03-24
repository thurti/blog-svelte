<script>
  import { fade } from "svelte/transition";
  import { prism } from "svelte-prism-action";
  import Meta from "../components/Meta.svelte";
  import PostListItem from "../components/PostListItem.svelte";
  import FooterImprint from "../components/FooterImprint.svelte";
  import PageTitle from "../components/PageTitle.svelte";

  export let content = [];
  export let params = {};

  const title = params.title === "Tag" ? `Tag: ${params.slug}` : params.title; 
  const url = params.url?.replace(':slug', params.slug) ?? params.url;

  const meta = {
    title: title,
    description: "This is my personal web development journal about things I've done and learned.",
    url: url,
    twitterCard: "summary"
  };
</script>

<Meta {...meta} />

<PageTitle {title} />

<main in:fade={{ duration: 150 }} use:prism={{componentsUrl: "/static/js/prismjs/components"}}>
  {#each content as post}
    <PostListItem {...post} />
  {/each}

  {#if content.length == 0 && params.tag}
    <p class="text-center">
      Sorry, no posts found for this tag.
      <br /><br />
      <a href="/">Home</a>
    </p>
  {/if}
</main>

{#if content}
  <FooterImprint />
{/if}
