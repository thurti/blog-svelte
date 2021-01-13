<script>
  export let title = "";
  export let type="h1";
</script>

{#if type === "h1"}
  <h1 class="post__heading">
    {@html title}
  </h1>
{/if}

{#if type === "h2"}
  <h2 class="post__heading">
    {@html title}
  </h2>
{/if}

{#if type === "h3"}
  <h3 class="post__heading">
    {@html title}
  </h3>
{/if}
