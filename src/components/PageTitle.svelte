<script>
  export let title;
  export let h = 1;
  export let classname;
</script>

<div class={`grid page-title ${classname}`}>
  {#if h == 1}
    <h1>{title}</h1>
  {:else if h == 2}
    <h2>{title}</h2>
  {:else if h == 3}
    <h3>{title}</h3>
  {/if}
</div>