# ChronicleNode documentation

The documentation of ChronicleNode, the RPG toolkit for Godot: getting started, the guide to every editor, tutorials and the advanced developer documentation.

Published at https://docs.chroniclenode.com

## Writing

The site is built with [VitePress](https://vitepress.dev). The pages are markdown files under `docs/`.

```
npm install
npm run dev      # a live preview at http://localhost:5173
npm run build    # the finished site in docs/.vitepress/dist
```

The name of the product and the address of the site are set in `docs/.vitepress/site.ts`. The sidebar is in `docs/.vitepress/config.mts`.

## Publishing

Every push to `main` builds the site and publishes it to GitHub Pages (see `.github/workflows/deploy.yml`). The address is set by `docs/public/CNAME`.
