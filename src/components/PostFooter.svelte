<script>
  export let previous;
  export let next;
</script>

<footer>

  <nav class="post-nav">

    {#if previous}
      <a href="/{previous.slug}" title="{previous.slug}" class="btn">
        PREVIOUS<br>
        <span class="next-title">{previous.title}</span>
      </a>
    {:else}
      <a href="/" class="btn">HOME<br>
        <span class="next-title">Just going home.</span>
      </a>
    {/if}

    {#if next}
      <a href="/{next.slug}" title="{next.slug}" class="btn">
        NEXT<br>
        <span class="next-title">{next.title}</span>
      </a>
    {/if}

  </nav>

</footer>