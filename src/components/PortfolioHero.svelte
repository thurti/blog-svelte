<script>
  export let src;
  export let alt;
  export let width;
  export let height;
</script>

<div class="post-hero__image">
  <picture>
    <img src="{src}.jpg" alt="{alt}" {width} {height} loading="lazy">
  </picture>
</div>