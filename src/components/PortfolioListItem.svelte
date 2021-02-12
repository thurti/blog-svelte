<script>
  import { config } from "../config";
  import Picture from "./Picture.svelte";
  import PostDate from "./PostDate.svelte";
  import PostTitle from "./PostTitle.svelte";

  export let slug;
  export let title;
  export let hero;
  export let created_at;

  const url = `/portfolio/${slug}`;
</script>

<a href="{url}" class="gallery__item post-link no-hover">
  <article>
    <hgroup class="gallery__title animated-bg-color a1">
      <PostDate {created_at} format="m y" />
      <PostTitle title={title_short || title} type="h3" />
    </hgroup>
    
    <Picture
      classname="gallery__image"
      {...hero}
      sizes={[
        "(min-width: 1010px) 938px",
        "90vw"
      ]}
    />
  </article>
</a>