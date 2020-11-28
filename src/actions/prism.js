import { tick } from "svelte";
import Prism from "prismjs";

export async function prism(node, params) {
  //defaults
  const options = {
    root: null,
    rootMargin: "100px",
    threshold: 0,
    componentsUrl: "https://unpkg.com/prismjs@1.22.0/components",
    ...params,
  };

  function onIntersect(events) {
    events.forEach((e) => {
      if (e.isIntersecting) {
        highlightCode(e.target, options.componentsUrl);
      }
    });
  }

  /**
   * Imports PrismJs language component from URL and highlights target.
   * Classname needs to be set to 'language-[lang]' (eg. 'language-javascript')
   *
   * @param {DOMElement} target
   * @param {string} componentsUrl  URL to PrismJs component folder.
   */
  async function highlightCode(target, componentsUrl) {
    //abort if already highlighted
    if (target.dataset.isHighlighted) return;

    const lang = getLang(target);

    if (lang) {
      if (!Prism.languages[lang]) {
        await import(`${componentsUrl}/prism-${lang}.min.js`);
      }

      Prism.highlightElement(target);
      target.dataset.isHighlighted = true;
    }
  }

  /**
   * Returns PrismJs language name form class name. (eg. 'language-javascript')
   *
   * @param {DOMElement} item
   * @returns {(string|boolean)}  Returns language name or false.
   */
  function getLang(item) {
    const lang = item.className.match(/language-(\w+)/);
    return lang ? lang[1] : false;
  }


  //wait for onMount & add observer to code blocks
  await tick();

  const observer = new IntersectionObserver(onIntersect, { ...options });
  const codeblocks = node.querySelectorAll("pre > code");

  [...codeblocks].forEach((codeblock) => {
    observer.observe(codeblock);
  });

  return {
    destroy() {
      observer.disconnect();
      codeblocks = null;
      observer = null;
    },
  };
}
