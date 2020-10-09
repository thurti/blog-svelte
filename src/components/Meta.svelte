<script>
  import {config} from '../config';

  /**
   * {
        title: '',
        description: '',
        image: '',
        imageAlt: '',
        slug:'',
        twitterCard: 'summary_large_image', 'summary'
    }
   * @link https://dev.to/nazeh/watch-your-head-quick-foolproof-metadata-setup-3n1p
   **/
  export let meta = {};

  $: title = `${meta.title} ${config.title}`;
</script>

<svelte:head>

  {#if meta.title}
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta property="og:title" content={title} />
    <meta property="twitter:title" content={title} />
  {/if}

  {#if meta.description}
    <meta name="description" content={meta.description} />
    <meta property="og:description" content={meta.description} />
    <meta property="twitter:description" content={meta.description} />
  {/if} 

   {#if meta.image}
    <meta property="og:image" content={`${config.static}/${meta.image}`} />
    <meta
      property="twitter:image"
      content={`${config.static}/${meta.image}`}
    />
  {/if} 

  {#if meta.imageAlt}
    <meta property="og:image:alt" content={meta.imageAlt} />
    <meta property="twitter:image:alt" content={meta.imageAlt} />
  {/if}

  {#if meta.slug}
    <meta property="og:url" content={`${config.url}/${meta.slug}`} />
    <meta property="twitter:url" content={`${config.url}/${meta.slug}`} />
  {/if}

    {#if meta.type}
      <meta property="og:type" content={meta.type} />
  {/if}

  <meta property="twitter:card" content={meta.twitterCard || "summary"} />
  <meta name="twitter:creator" content="{config.twitter}" />

</svelte:head>