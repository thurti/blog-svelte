<script>
  export let tags;
</script>

<p class="post-meta__tags">
  <b>Tags:</b>&nbsp;
  {#each tags as tag}<a href="/tag/{tag}">{tag}</a>,&nbsp;{/each}
</p>
