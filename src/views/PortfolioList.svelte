<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import PortfolioListItem from "../components/PortfolioListItem.svelte";
  import FooterHeart from "../components/FooterHeart.svelte";
  import Meta from "../components/Meta.svelte";

  export let content;
  export let current_scroll = 0;

  const meta = {
    title: "Portfolio",
    description: "This is a selection of work that I have created in recent years.",
    url: "portfolio",
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
    
<main class="grid" in:fade={{ duration: 150 }}>
  <div class="gallery portfolio-gallery">

    {#each content as post}
      <PortfolioListItem {...post} />
    {/each}

    {#if content?.length == 0}
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
