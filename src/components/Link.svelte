<script>
  export let title;
  export let text;
  export let href = null;
</script>

{#if href}
  <a {href} {title}>{text}</a>
{:else}
  {text}
{/if}