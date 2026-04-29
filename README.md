# AllOnce — Next.js

Real Next.js conversion of the AllOnce landing page (no static-HTML wrapper).

## Stack
- Next.js 15 (app router) + React 19 RC + TypeScript
- All assets served from `/public` (CSS pre-built, fonts, images, videos, /data scripts)
- Pages
  - `app/page.tsx` — landing (full body converted to JSX, animation scripts loaded via `next/script`)
  - `app/signin/page.tsx` — split-card sign-in (interactive toggle / eye / submit wired in `useEffect`)

## Run
```bash
pnpm install
pnpm dev    # -> http://localhost:3041
pnpm build && pnpm start
```
