<script>
  export let items;

  //create store with current nav and check for is-active
  //create views Article, Portfolio, PortfolioList
  //check if show nav is set
</script>

<nav class="nav--main">
  <ul>
    {#each items as item}
      <li class="is-active"><a href="{item.url}">{item.title}</a></li>
    {/each}
  </ul>
</nav>