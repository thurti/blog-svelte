<script>
  export let tags;

  tags = tags.filter(tag => tag !== "home");
</script>

<p class="post-meta__tags text-capitalize">
  <b>Tags:</b>&nbsp;
  {#each tags as tag}<a href="/tag/{tag}">{tag}</a>,&nbsp;{/each}
</p>
