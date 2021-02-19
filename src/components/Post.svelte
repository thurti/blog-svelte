<script>
  import { prism } from "svelte-prism-action";
  import { img2picture } from '../functions/img2picture';
  import marked from "marked";
  import PostDate from "./PostDate.svelte";
  import PostTitle from "./PostTitle.svelte";
  import PostMeta from "./PostMeta.svelte";
  import GithubLink from "./GithubLink.svelte";

  export let title;
  export let created_at;
  export let tags;
  export let github;
  export let content;

  const content_parsed = img2picture(marked(content), [
    "(max-width:972px) 100vw",
    "972px"
  ]);
</script>

<article class="grid post--single" use:prism>
  <hgroup class="post__hgroup">
    <PostDate {created_at} format="m d, y" />
    <PostTitle {title} />
  </hgroup>

  {@html content_parsed}

  {#if github}
    <p class="center">
      <GithubLink url={github} text="Code on Github" />
    </p>
  {/if}
</article>

<PostMeta {tags} github_url={github} github_text="Code on Github" />