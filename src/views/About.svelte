<script>
  import {fade} from 'svelte/transition';
  import {router} from '../components/Router.svelte';
  import Meta from '../components/Meta.svelte';

  const meta = {
    title: 'About',
    description: "Hi, I'm Thomas - frontend web developer who ❤ JavaScript.",
    slug: 'about',
    image: 'marker_240.jpg',
    imageAlt: 'Weird Square Face'
  }
</script>

<Meta {...meta} />

<main>
  <article 
    in:fade={{duration: 250}}
    class="post__content"
  >
    <h1 class="text-center">Hi, my name is Thomas.</h1>

    <p class="text-center" style="max-width:20em">
      I'm a frontend web developer with a strong 
      focus on JavaScript, HTML & CSS. <br><br>

      I'm not that active on social media, but feel free to 
      contact me on Twitter <a href="https://twitter.com/_thurti" title="twitter">@_thurti</a> or stalk my code on <a href="https://github.com/thurti" title="github">github</a>.
      <br><br>
      <a href="/" on:click={() => window.history.back()}>Back</a>
    </p>
    
  </article>
</main>