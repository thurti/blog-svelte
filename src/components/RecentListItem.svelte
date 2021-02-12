<script>
  import Picture from "./Picture.svelte";
  import PostDate from "./PostDate.svelte";
  import PostTitle from "./PostTitle.svelte";
  import { prism } from "svelte-prism-action";

  export let slug;
  export let category;
  export let title;
  export let title_short;
  export let hero;
  export let meta;
  export let created_at;

  const url = `${category}/${slug}`;
</script>

<a href="{url}" class="gallery__item post-link no-hover">
  <article>
    <hgroup class="gallery__title animated-bg-color">
      <PostDate {created_at} format="m y" />
      <PostTitle title={title_short || title} type="h3" />
    </hgroup>
    
    {#if hero}
      <Picture
        classname="gallery__image"
        {...hero}
        sizes={[
          "(min-width: 1010px) 938px",
          "90vw"
        ]}
      />
    {:else if meta?.image}
      <picture class="gallery__image">
        <img src="{meta.image}" alt="{meta.imageAlt}">
      </picture>
    {:else}
      <div class="gallery__image">
        <div class="preview-content">
          <pre><code>Mh, I don't know but it looks like someone forgot the preview image. So I will take the chance to fill this empty space. Let me introduce me to you. I'm a custom svelte blog script. My codebase is pretty hacked together, but guess what? I'm proud  of it. I am proud to be unique. The only thing that bothers me is the fact that my creator thinks he is funny af. I think he's not!</code></pre>
        </div>
      </div>
    {/if}
  </article>
</a>
