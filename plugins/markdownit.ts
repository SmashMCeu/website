// added because of => https://github.com/nuxt-community/markdownit-module/issues/47

import MarkdownIt from "markdown-it";

export default defineNuxtPlugin(() => {
  const md = new MarkdownIt({
    html: true,
  });

  return {
    provide: {
      mdRenderer: md,
    },
  };
});
