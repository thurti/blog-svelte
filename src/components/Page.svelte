<script>
  import { fade } from 'svelte/transition';
  
  export let center = false;
</script>

<main class:text-center={center} in:fade={{ duration: 150 }}>
  <article in:fade={{ duration: 250 }} class="grid post--single">
    <slot />
  </article>
</main>