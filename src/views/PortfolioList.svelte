<script>
  import { fade } from "svelte/transition";
  import PortfolioListItem from "../components/PortfolioListItem.svelte";
  import FooterHeart from "../components/FooterHeart.svelte";
  import Meta from "../components/Meta.svelte";
  import PageTitle from "../components/PageTitle.svelte";

  export let content = [];

  const meta = {
    title: "Portfolio",
    description: "This is a selection of work that I have created in recent years.",
    url: "portfolio",
    image: "marker_240.jpg",
    imageAlt: "Weird Square Face",
  };
</script>

<Meta {...meta} />

<PageTitle title="Portfolio" />
    
<main class="grid" in:fade={{ duration: 150 }}>
  <div class="gallery-portfolio highlight-first">

    {#each content as post, idx}
      <PortfolioListItem {...post} {idx} />
    {/each}

    {#if content.length == 0}
      <p class="text-center">
        Sorry, there is no content yet.
        <br /><br />
        <a href="/">Home</a>
      </p>  
    {/if}
  </div>
</main>

{#if content}
  <FooterHeart />
{/if}
