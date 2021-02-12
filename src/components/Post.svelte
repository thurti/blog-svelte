<script>
  import { prism } from "svelte-prism-action";
  import marked from "marked";
  import PostDate from "./PostDate.svelte";
  import PostTitle from "./PostTitle.svelte";
  import GithubLink from "./GithubLink.svelte";
  import Tags from "./Tags.svelte";

  export let title;
  export let created_at;
  export let tags;
  export let github;
  export let content;

  const content_parsed = marked(content);
</script>

<article class="grid post--single" use:prism>
  <hgroup class="post__hgroup">
    <PostDate {created_at} format="m d, y" />
    <PostTitle {title} />
  </hgroup>

  {@html content_parsed}
</article>

<aside class="post-meta flow">
  <p class="post-meta__content">
    {#if github}
      <GithubLink url={github} />,
    {/if}
    created by
    <a href="/about">Thomas</a><br />
  </p>
  <Tags {tags} />
</aside>
