<script>
  import { config } from "../config";
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
      <PostTitle {title} type="h3" />
    </hgroup>
    
    <picture class="gallery__image">
      <img src="{config.url}/{hero}.jpg" alt="">
      <!-- add webp, avij -->
    </picture>
  </article>
</a>