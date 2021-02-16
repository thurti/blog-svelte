<script>
  export let tags;

  const tags_html = tags.filter(tag => tag !== "home")
                        .reduce((acc, tag) => {
                          const url = encodeURI(`/tag/${tag}`);
                          return `${acc}<a href="${url}">${tag}</a>, `
                        }, "")
                        .replace(/,\s$/, ''); //remvoe last comma

</script>

<p class="post-meta__tags text-capitalize small">
  <b>Tags:</b>&nbsp;
  {@html tags_html}
</p>
