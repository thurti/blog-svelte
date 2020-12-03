<script>
  import Meta from "./Meta.svelte";
  import PostContent from "./PostContent.svelte";
  import PostFooter from "./PostFooter.svelte";

  export let post;

  const meta = {
    title: post.title.replace("<br>", " - "),
    description: post.description,
    slug: post.slug,
    image: post.previewImage || "marker_240.jpg",
    imageAlt: post.previewImageAlt || "Weird Square Face",
  };
</script>

<Meta {...meta} />

<main>
  <PostContent {...post} />
</main>
<PostFooter {...post} />
