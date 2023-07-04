# Web Development Courses

Open-source web development courses. Learn HTML, CSS and most importantly JavaScript through this repository !

## Development

Website is made using Astro and UnoCSS.
Deployment is done using GitHub Actions to deploy on GitHub Pages.

### Scripts

| Command | Action |
| ------- | ------ |
| `pnpm dev` | Starts Astro development server. |
| `pnpm build` | Makes a production build for deployment. |
| `pnpm run astro ...` | Run any command for Astro. |

### Contributing to the content

Since we're using [Content Collections from Astro](https://docs.astro.build/en/guides/content-collections),
you'll find everything in the [`/src/content`](./src/content/) folder.

Make sure to use MDX for the content and respect the [schema defined](./src/content/config.ts) for each collection.
