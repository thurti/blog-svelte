<script>
  import Picture from "./Picture.svelte";

  export let preview;
  export let hero;
</script>

<aside class="post__preview hide-small">
  {#if preview}
    <pre class="preview-content">
      <code class="language-js">{@html preview}</code>
    </pre>
  {:else if hero}
    <Picture {...hero} classname="preview-content" />
  {/if}
</aside>