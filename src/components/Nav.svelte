<script>
  import { config } from '../config';
  import { router_current, nav_show } from '../store'; 
  import Logo from "./Logo.svelte";
  
  export let items;

  $:show = $nav_show;
</script>

<header class:show-nav={show}>
  <div class="grid header__nav">
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
  </div>

  <div class="header__small hide-small">
    <a href={config.url} alt="t3000.uber.space" class="logo" on:click|preventDefault={() => show = !show}>
      <Logo />
    </a>
  </div>
</header>
