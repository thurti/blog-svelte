<script>
  import Picture from "./Picture.svelte";
  import PostDate from "./PostDate.svelte";
  import PostTitle from "./PostTitle.svelte";

  export let slug;
  export let category = "articles";
  export let title;
  export let title_short;
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
    <PostTitle title={title_short || title} />

    <section class="post__teaser">
      <div class="small post__tags text-capitalize">{tag_list}</div>
      {@html teaser}
    </section>

    <aside class="post__preview hide-small">
      {#if preview}
        <pre class="preview-content">
          <code class="language-js">{@html preview}</code>
        </pre>
      {:else if hero}
        <Picture 
          classname="preview-content" 
          {...hero} 
          sizes={[
            "167px"
          ]}
        />
      {/if}
    </aside>
  </article>
</a>
