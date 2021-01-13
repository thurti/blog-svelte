<script>
  import { fade } from 'svelte/transition';
  import Meta from "../components/Meta.svelte";
  import PostContent from "../components/PostContent.svelte";
  import PostFooter from "../components/PostFooter.svelte";

  export let content;

  const meta = {
    title: content.title.replace("<br>", " - "),
    description: content.description,
    slug: content.slug,
    image: content.previewImage || "marker_240.jpg",
    imageAlt: content.previewImageAlt || "Weird Square Face",
    twitterCard: content.twitterCard,
    type: content.type
  };
</script>

<Meta {...meta} />

<main in:fade={{ duration: 150 }}>
  <PostContent {...content} />
</main>
<PostFooter {...content} />
