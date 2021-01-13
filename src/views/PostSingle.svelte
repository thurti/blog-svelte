<script>
  import { fade } from 'svelte/transition';
  import Meta from "../components/Meta.svelte";
  import Post from "../components/Post.svelte";
  import PostFooter from "../components/PostFooter.svelte";

  export let content;

  const title = content.title.replace("<br>", " - ");
</script>

<Meta {title} {...content.meta} />

<main in:fade={{ duration: 150 }}>
  <Post {...content} />
</main>
<PostFooter {...content} />
