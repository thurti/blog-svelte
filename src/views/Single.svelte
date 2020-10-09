<script>
  import {config} from '../config';
  import {fade} from 'svelte/transition';
  import {onMount, beforeUpdate, onDestroy} from 'svelte';
  import Loader from '../components/Loader.svelte';
  import Meta from '../components/Meta.svelte';
  import PostContent from '../components/PostContent.svelte';
  import PostFooter from '../components/PostFooter.svelte';

  export let params;

  let show_loader = false;
  let loader_timeout;
  let meta = {};

  onMount(() => {
    //show loader if loading takes longer than 500ms
    loader_timeout = window.setTimeout(() => {
      show_loader = true;
    }, 500);
  });

  onDestroy(() => {
    window.clearTimeout(loader_timeout);
  });

  async function getPost(parameter) {
    let res = await fetch(`${config.api}/${parameter.slug}`);

    if (!res.ok) {
      let json = await res.json();
      throw new Error(`Error ${json.error}`);
    } else {
      let json = await res.json();
      meta = {
        title: json.title.replace('<br>', ' - '),
        description: json.description,
        slug: json.slug,
        image: json.previewImage || 'marker_240.jpg',
        imageAlt: json.previewImageAlt || 'Weird Square Face'
      };

      return json;
    }
  }
</script>
<Meta {meta} />

{#await getPost(params)}

  {#if show_loader}
    <main>
      <Loader />
    </main>
  {/if}

{:then post}

<div in:fade={{duration: 150}}>
  <main>
    <PostContent {...post} />
  </main>

  <PostFooter {...post} />
</div>

{:catch error}

  <main>
    <p class="center">{error.message} :/</p>
    <p class="center"><a href="/">Back Home</a></p>
  </main>
  
{/await}