# Svelte Blog Frontend

>**This repo is for documentation purpose only. It is not meant to be used in production. But feel free to use the code anyway...**

This is the svelte frontend for my personal blog. It fetches posts from a json api (@see https://github.com/thurti/blog-server) and renders the markdown content to HTML.

## Routes
| URL | View | Descrition |
|-----|------| ---------- |
| `/` | Home.svelte | Index page. |
| `/articles` | PostList.svelte | Renders list of posts with tag `article`. |
| `/articles/:slug` | PostSingle.svelte | Renders single post. |
| `/portfolio` | PortfolioList.svelte | Renders list of posts with tag `portfolio`. |
| `/portfolio/:slug` | PortfolioSingle.svelte | Renders single portfolio post. |
| `/tag/:tag` | PostList.svelte | Linked list of posts for given tag. |
| `/about` | About.svelte | About page. |

## Uses
- https://github.com/sveltejs/svelte
- https://github.com/lukeed/navaid
- https://github.com/markedjs/marked
- https://github.com/PrismJS/prism