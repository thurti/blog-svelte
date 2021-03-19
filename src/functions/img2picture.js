import Picture from '../components/Picture.svelte';

export function img2picture(html, sizes = []) {
  if (typeof document === "undefined") return html; //nodejs ssr

  const images = html.match(/<picture( class="\w*")?>\s*<img[^>]*\/?>\s*<\/picture>/g);
  const tmp = document.createElement('div');

  images?.forEach(image => {
    tmp.innerHTML = image;
    const img = tmp.querySelector('img');

    const props = {
      classname: img.className,
      src: `${img.dataset.path}/${img.dataset.file}`,
      alt: img.alt,
      width: img.width,
      height: img.height,
      sizes: sizes
    };

    const p = new Picture({target: tmp, props: props});
    const picture = tmp.querySelector('picture:nth-child(2)').outerHTML;
    html = html.replace(image, picture);

    p.$destroy();
  });
  
  tmp.remove();

  return html;
}