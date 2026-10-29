# PlusOne Connect: site

Landing page that pitches the PlusOne Connect pilot to conference organisers
and hotels. A static Next.js export, independent from the clickable demo
(the `Plus One` project), which it links to.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

Copy follows the business plan; there are no prices until they are agreed
with organisers. Two settings at the top of `src/app/page.tsx`:

- `DEMO_URL`: where "Try the demo" goes. The demo sits behind the staging
  password, so whoever gets the link needs it too.
- `CONTACT_EMAIL`: shows "Talk to us about a pilot" once set.

## Build and deploy (Cloudflare Pages)

```bash
npm run build      # static site in out/
```

Connected to GitHub, a Cloudflare Pages project needs:

| Setting                | Value           |
| ---------------------- | --------------- |
| Framework preset       | None            |
| Build command          | `npm run build` |
| Build output directory | `out`           |
| Node version           | 20 or newer (`NODE_VERSION` variable) |

Every push to `main` then redeploys. Without GitHub, upload `out/` by hand
(Pages, "Upload assets") or with `npx wrangler pages deploy out`.

Photos and brand files are copies from the demo project (`public/`).
