<script>
  import marked from "marked";
  import { img2picture } from '../functions/img2picture';
  import PortfolioHero from "./PortfolioHero.svelte";
  import PortfolioInfo from "./PortfolioInfo.svelte";
  import PostDate from "./PostDate.svelte";
  import PostMeta from "./PostMeta.svelte";
  import PostTitle from "./PostTitle.svelte";

  export let title;
  export let created_at;
  export let info;
  export let hero;
  export let content;
  export let tags;

  const content_parsed = img2picture(marked(content), [
    "(max-width:972px) 90vw",
    "972px"
  ]);
</script>

<article class="grid post--portfolio">

  <div class="post-hero animated-bg-color">

    <div class="left">
      <hgroup class="post__hgroup">
        <PostDate {created_at} format="m d, y" />
        <PostTitle {title} />
      </hgroup>

      <PortfolioInfo {...info} />
    </div>
    <div class="right">
      <PortfolioHero {...hero} />
    </div>
  </div>

  {@html content_parsed}
  
</article>

<PostMeta {tags} />