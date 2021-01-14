<script>
  import { config } from '../config';
  import { router_current } from '../store'; 
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
        <li class:is-active={item.title !== "Home" && $router_current.includes(item.url)}><a href="{item.url}">{item.title}</a></li>
      {/each}
    </ul>
  </nav>
</header>