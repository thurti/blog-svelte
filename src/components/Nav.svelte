<script>
  import { config } from '../config';
  import { router_current, nav_show } from '../store'; 
  import DarkModeToggle from './DarkModeToggle.svelte';
  import Logo from "./Logo.svelte";
  
  export let items;

  $:show = $nav_show;
  
  function isActive(nav_item, current) {
    if (nav_item.title === "Hello"){
      return current === "/";
    } else {
      return current.includes(nav_item.url);
    }
  }
</script>

<header class:show-nav={show}>
  <div class="grid header__nav happy-border">
    <a href={config.url} alt="t3000.uber.space" class="logo">
      <Logo />
    </a>
  
    <nav class="nav--main">
      <ul>
        {#each items as item}
          <li class:is-active={isActive(item, $router_current)}><a href="{item.url}" title="{item.title}">{item.title}</a></li>
        {/each}
      </ul>
    </nav>
  
    <DarkModeToggle enabled={true} />
  </div>  
</header>
