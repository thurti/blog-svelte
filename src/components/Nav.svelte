<script>
  import { config } from '../config';
  import Logo from "./Logo.svelte";
  
  export let items;
</script>

<header class="grid">
  <a href={config.url} alt="t3000.uber.space" class="logo">
    <Logo />
  </a>
  <nav class="nav--main">
    <ul>
      {#each items as item}
        <li class="is-active"><a href="{item.url}">{item.title}</a></li>
      {/each}
    </ul>
  </nav>
</header>