<script>
  import marked from "marked";
  import PortfolioHero from "./PortfolioHero.svelte";
  import PortfolioInfo from "./PortfolioInfo.svelte";
  import PostDate from "./PostDate.svelte";
  import PostTitle from "./PostTitle.svelte";
  import Tags from "./Tags.svelte";

  export let title;
  export let created_at;
  export let info;
  export let hero;
  export let content;
  export let tags;

  const content_parsed = marked(content);
</script>

<article class="grid post--portfolio">

  <div class="grid post-hero animated-bg-color">

    <hgroup class="post__hgroup">
      <PostDate {created_at} format="m d, y" />
      <PostTitle title={title.replace(' ', ' - ')} />
    </hgroup>
  
    <PortfolioInfo {...info} />
    <PortfolioHero {...hero} />
  </div>

  {@html content_parsed}
  
</article>

<aside class="post-meta flow">
  <div class="post-meta__content">
    <h3>
      Hey, my name is Thomas.
    </h3>
    <p>
      I'm a freelance web developer based in Germany. <br>
      You can <a href="/hire-me">Hire Me.</a>
    </p>
  </div>
  <Tags {tags} />  
</aside>