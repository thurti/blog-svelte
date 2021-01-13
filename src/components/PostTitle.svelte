<script>
  export let title = "";
  export let type="h1";
</script>

{#if type === "h1"}
  <h1 class="post__heading text-capitalize">
    {@html title}
  </h1>
{/if}

{#if type === "h2"}
  <h2 class="post__heading text-capitalize">
    {@html title}
  </h2>
{/if}

{#if type === "h3"}
  <h3 class="post__heading text-capitalize">
    {@html title}
  </h3>
{/if}
