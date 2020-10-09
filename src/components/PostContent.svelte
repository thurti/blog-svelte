<script>
  import Prism from 'prismjs';
  import marked from 'marked';
  import PostDate from './PostDate.svelte';
  import PostTitle from './PostTitle.svelte';
  import GithubLink from './GithubLink.svelte';
  import Tags from './Tags.svelte';

  export let title;
  export let created_at;
  export let tags;
  export let github;
  export let content;

  let content_parsed = '';

  const options = {
    highlight: function (code, lang, callback) {
      if(!callback) return;
      
      if (lang === '') {
        callback(null, code);
      }else if (!Prism.languages[lang]) {
        
        import(`https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/components/prism-${lang}.min.js`)
          .then(() => {
            callback(null, Prism.highlight(code, Prism.languages[lang], lang));
          }).catch(() => {
            callback(null, code);
          });
      
      } else {
        callback(null, Prism.highlight(code, Prism.languages[lang], lang));
      }
    }
  };

  marked(content, options, (err, result) => {
    content_parsed = result;
  });
</script>

 <article class="post--single">

  <hgroup class="post__hgroup">
    <PostDate {created_at} format="m 6, y" />
    <PostTitle title={title.replace('<br>', ' - ')} />
  </hgroup>

  <div class="post__content">
    {@html content_parsed}
  </div>
</article>

 <aside class="meta">
  <p class="meta__content">
    {#if github}
      <GithubLink url="{github}" />,
    {/if}
    created by <a href="/about">Thomas Hurtig</a><br>
  </p>
  <Tags {tags} />
</aside>