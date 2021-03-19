<script>
  import { fade } from 'svelte/transition';
  import Meta from "../components/Meta.svelte";
  import Portfolio from "../components/Portfolio.svelte";
  import PostFooter from "../components/PostFooter.svelte";

  export let content;

  const title = content.title.replace("<br>", " - ")
                             .replace(/<[^>]*>/g, '');
</script>

<Meta {title} {...content.meta} />

<main in:fade={{duration: 150}}>
  <Portfolio {...content} />
</main>
<PostFooter {...content} />
