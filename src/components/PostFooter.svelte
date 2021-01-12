<script>
  export let previous;
  export let next;
</script>

<footer>
  <nav class="nav--post">
    {#if previous}
      <a href="/{previous.slug}" title={previous.slug} class="btn">
        <span class="bold">PREVIOUS</span><br />
        <span class="btn__sub font-light small text-ellipsis">{previous.title}</span>
      </a>
    {:else}<a href="/" class="btn">HOME</a>{/if}

    {#if next}
      <a href="/{next.slug}" title={next.slug} class="btn">
        <span class="bold">NEXT</span><br />
        <span class="btn__sub font-light small text-ellipsis">{next.title}</span>
      </a>
    {/if}
  </nav>
</footer>
