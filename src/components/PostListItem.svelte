<script>
  import PostDate from "./PostDate.svelte";
  import PostTitle from "./PostTitle.svelte";

  export let slug;
  export let title;
  export let teaser;
  export let preview;
  export let created_at;
  export let tags;
</script>

<a class="post-link no-hover" href="/articles/{slug}" title={slug}>
  <article class="grid post--listing">
    <PostDate {created_at} format="y m/d" />
    <PostTitle {title} />

    <section class="post__teaser">
      <div class="small post__tags">{tags.join(', ')}</div>
      {@html teaser}
    </section>

    <aside class="post__preview hide-small">
      {#if preview}
        <pre>
        <code class="language-js">{@html preview}</code>
      </pre>
      {/if}
    </aside>
  </article>
</a>
