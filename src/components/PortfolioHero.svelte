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
      "(min-width: 1800px) 1200px",
      "(min-width: 1200px) 68vw",
      "90vw"
    ]}
  />
</div>