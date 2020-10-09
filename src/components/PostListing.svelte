<script>
  import Prism from 'prismjs';
  import PostDate from './PostDate.svelte';
  import PostTitle from './PostTitle.svelte';

  export let slug;
  export let title;
  export let teaser;
  export let preview;
  export let created_at;
  export let tags;

</script>

<a class="linked-post" href="/{slug}" title="{slug}">
  <article 
    class="post" 
    style="cursor:pointer"
  >
    <PostDate {created_at} format="y m/d" />
    <PostTitle {title} />

    <section class="post__teaser">
      <div class="small post__tags">{tags.join(', ')}</div>
      {@html teaser}
    </section>

    <aside class="post__preview">
    {#if preview}
      <pre>
        <code class="language-js">{@html Prism.highlight(preview, Prism.languages.javascript, 'javascript')}</code>
      </pre>
    {/if}
    </aside>
  </article>
</a>