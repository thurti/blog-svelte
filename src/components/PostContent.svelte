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

<article class="post--single">
  <hgroup class="post__hgroup">
    <PostDate {created_at} format="m d, y" />
    <PostTitle title={title.replace('<br>', ' - ')} />
  </hgroup>

  <div class="post__content" use:prism>
    {@html content_parsed}
  </div>
</article>

<aside class="meta">
  <p class="meta__content">
    {#if github}
      <GithubLink url={github} />,
    {/if}
    created by
    <a href="/about">Thomas Hurtig</a><br />
  </p>
  <Tags {tags} />
</aside>
