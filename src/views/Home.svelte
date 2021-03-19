<script>
  import { fade } from "svelte/transition";
  import Meta from "../components/Meta.svelte";
  import FooterHeart from "../components/FooterHeart.svelte";
  import Page from "../components/Page.svelte";
  import PageTitle from "../components/PageTitle.svelte";
  import RecentListItem from "../components/RecentListItem.svelte";
  import GlitchImage from "../components/GlitchImage.svelte";
  import { page_scroll } from '../store';
  import { scrollWindowTo } from '../actions/scrollWindowTo';

  export let content;
  export let params;

  const meta = {
    title: "Hello",
    description: "Hi, my name is Thomas. I'm a frontend web developer.",
    url: "",
    image: "marker_240.jpg",
    imageAlt: "Weird Square Face",
  };
</script>

<svelte:window use:scrollWindowTo={$page_scroll} />

<Meta {...meta} />

<PageTitle title="Hi, My Name Is Thomas." classname="text-only" />

<Page center = {true}>
  <p style="line-height: 1.75">
    I create frontend applications with <br>
    <code>HTML</code>, <code>CSS</code> and <code>JavaScript</code><br>
    powered by backends based on <br><code>NodeJs</code>, <code>PHP</code> and the <code>Cloud™ ☁️</code>.
  </p>
  <p>For detailed information on my skill set 
    check out my <a href="/about" title="About">About</a> page.
  </p>

  <a href="/about" title="About Me" class="center" style="margin-top: 5rem; width:100%; transform: rotate(-6deg)">
    <GlitchImage src="/static/img/head@2x.jpg" width="250" height="250" slize="7" />
  </a>
</Page>

<PageTitle title="Recent Posts" h="2" />

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
