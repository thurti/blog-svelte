<script>
  import { onMount } from 'svelte';
  import { config } from '../config';
  export let classname;
  export let src;
  export let alt;
  export let width;
  export let height;
  export let sizes = [];

  const types = [
    "avif",
    "webp",
    "jpg"
  ];

  let img;

  onMount(() => {
    // img.src = img.dataset.src;
  });
</script>

<picture class={classname}>
  {#each types as type}
    <source 
      type="image/{type}"
      srcset={config.img_sizes.reduce((acc, size) => `${src}_${size}.${type} ${size}w, ${acc}`, '')}
      sizes={sizes.join(',')}
    />
  {/each}

  <img 
    bind:this={img}
    data-src={`${src}_1200.jpg`}
    srcset={config.img_sizes.reduce((acc, size) => `${src}_${size}.jpg ${size}w, ${acc}`, '')}
    {alt}
    {width}
    {height}
    loading="lazy"
    decoding="async"
  >
</picture>