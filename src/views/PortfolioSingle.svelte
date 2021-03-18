<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Meta from "../components/Meta.svelte";
  import Portfolio from "../components/Portfolio.svelte";
  import PostFooter from "../components/PostFooter.svelte";
  import { page_scroll } from '../store';

  export let content;

  const title = content.title.replace("<br>", " - ")
                             .replace(/<[^>]*>/g, '');

  onMount(() => {
    window.scrollTo(0, $page_scroll);
  })
</script>

<Meta {title} {...content.meta} />

<main in:fade={{duration: 150}}>
  <Portfolio {...content} />
</main>
<PostFooter {...content} />
