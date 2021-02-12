<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Meta from "../components/Meta.svelte";
  import PostListItem from "../components/PostListItem.svelte";
  import FooterHeart from "../components/FooterHeart.svelte";
  import Page from "../components/Page.svelte";
  import PageTitle from "../components/PageTitle.svelte";
  import RecentListItem from "../components/RecentListItem.svelte";

  export let content;
  export let params;
  export let current_scroll = 0;

  const meta = {
    title: "Hello",
    description: "Hi, my name is Thomas. I'm a frontend web developer.",
    url: "",
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

<PageTitle title="Hi, my name is Thomas." classname="text-only" />

<Page center = {true}>
  <p style="line-height: 1.75">
    I create <i>frontend applications</i> with <br>
    <code>HTML</code>, <code>CSS</code> and <code>JavaScript</code> <br>
    powered by <i>backends</i> based on <br><code>NodeJs</code> or <code>PHP</code>.
  </p>
  <p>For detailed information on my skill set 
    check out my <a href="/about" title="About">About</a> page.</p>
</Page>

<PageTitle title="Recent" h="2" />

<main in:fade={{ duration: 150 }} class="grid">
  <div class="gallery-recent">
    {#each content as post}
      <RecentListItem {...post} />
    {/each}
  </div>

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
