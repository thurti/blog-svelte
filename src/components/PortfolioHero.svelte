<script>
  import Picture from "./Picture.svelte";

  export let src;
  export let alt;
  export let width;
  export let height;
</script>

<div class="post-hero__image">
  <Picture
    {src}
    {alt}
    {width}
    {height}
    sizes={[
      "90vw",
      "(min-width: 1024px) 67vw",
      "(min-width: 80em) 1140px"
    ]}
  />
</div>