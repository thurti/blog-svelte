<script context="module">
   let current_scroll = 0;
</script>
<script>
  import {config} from '../config';
  import {onMount, onDestroy, tick} from 'svelte';
  import {fade} from 'svelte/transition';
  import Meta from '../components/Meta.svelte';
  import PostListing from '../components/PostListing.svelte';
  import Loader from '../components/Loader.svelte';

  export let params;

  let posts;
  let error;
  let loader_timeout;
  let show_loader = false;

  const meta = {
    title: 'Welcome',
    description: "My development journal about things I've done. Mainly focused on web stuff...",
    slug: '',
    image: 'marker_240.jpg',
    imageAlt: 'Weird Square Face'
  }

  onMount(() => {
    getPosts();

    loader_timeout = window.setTimeout(() => {
      show_loader = true;
    }, 500);
  });

  onDestroy(() => {
    current_scroll = window.scrollY;
    window.clearTimeout(loader_timeout);
  });

  async function getPosts() {
    try {
      const url = (params.tag) ? `${config.api}/tag/${params.tag}` : config.api;
      const res = await fetch(url);
      posts = await res.json();

      if (!res.ok) {
        error = `Error ${posts.error}`;
      } else {
        await tick(); //wait for post to render
        window.scrollTo(0, current_scroll);
      }
    } catch (e) { //if fetch fails, aka api server is down
      error = e;
      window.clearTimeout(loader_timeout);
      show_loader = false;
    }
  }
</script>

<Meta {meta} />

<main class="listing">
  
  {#if show_loader && !posts}
      <Loader />
  {:else}
    <div in:fade={{duration: 150}}>
        {#if posts && posts.length > 0}
          {#each posts as post}
            <PostListing 
              {...post} 
            />
          {/each}
        {:else}
          <p class="center">
            Sorry, no posts found for this tag.
          </p>
          <p class="center"><a href="{config.url}">Home</a></p>
        {/if}
    </div>
  {/if}

  {#if error}
    <p class="center">
      {error.message} :/ <br>
      Please try again later...
    </p>
  {/if}

</main>

<footer>
	<a href="/about" title="About">
		<div class="heart">❤</div>
	</a>
</footer>