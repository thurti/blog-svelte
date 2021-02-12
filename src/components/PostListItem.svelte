<script>
  import PostDate from "./PostDate.svelte";
  import PostPreview from "./PostPreview.svelte";
  import PostTitle from "./PostTitle.svelte";

  export let slug;
  export let category = "articles";
  export let title;
  export let teaser;
  export let preview;
  export let created_at;
  export let tags;
  export let hero;

  const tag_list = tags.filter(tag => !['home', 'article'].includes(tag)).join(', ');
</script>

<a class="post-link no-hover" href="/{category}/{slug}" title={slug}>
  <article class="grid post--listing">
    <PostDate {created_at} format="y m/d" />
    <PostTitle {title} />

    <section class="post__teaser">
      <div class="small post__tags text-capitalize">{tag_list}</div>
      {@html teaser}
    </section>

    <PostPreview {preview} {hero} />
  </article>
</a>
