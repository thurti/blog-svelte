<script>
  /**
   * @link https://dev.to/nazeh/watch-your-head-quick-foolproof-metadata-setup-3n1p
   **/

  import {config} from '../config';

  export let title = '';
  export let description = '';
  export let image = '';
  export let imageAlt = '';
  export let slug ='';
  export let twitterCard = 'summary_large_image'; //'summary'
  export let type;

  $: title_site = `${title} ${config.title}`;
</script>

<svelte:head>

  {#if title}
    <title>{title_site}</title>
    <meta name="title" content={title_site} />
    <meta property="og:title" content={title_site} />
    <meta property="twitter:title" content={title_site} />
  {/if}

  {#if description}
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="twitter:description" content={description} />
  {/if} 

   {#if image}
    <meta property="og:image" content={`${config.static}/${image}`} />
    <meta
      property="twitter:image"
      content={`${config.static}/${image}`}
    />
  {/if} 

  {#if imageAlt}
    <meta property="og:image:alt" content={imageAlt} />
    <meta property="twitter:image:alt" content={imageAlt} />
  {/if}

  {#if slug}
    <meta property="og:url" content={`${config.url}/${slug}`} />
    <meta property="twitter:url" content={`${config.url}/${slug}`} />
  {/if}

  {#if type}
      <meta property="og:type" content={type} />
  {/if}

  <meta property="twitter:card" content={twitterCard || "summary"} />
  <meta name="twitter:creator" content="{config.twitter}" />

</svelte:head>