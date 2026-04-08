# v0-portfolio-website

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Deploy to Vercel via GitHub

Use this flow so every push to GitHub deploys automatically on Vercel.

1. Create a GitHub repository (empty repository is recommended).
2. Initialize git in this folder and push to GitHub:

```bash
git init
git branch -M main
git add .
git commit -m "Initial portfolio setup"
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

3. Open [Vercel Dashboard](https://vercel.com/dashboard) -> **Add New...** -> **Project**.
4. Import the same GitHub repository.
5. Keep defaults (Framework: **Next.js**) and click **Deploy**.

After that, updates are automatic:

1. Make changes locally.
2. Commit and push:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

3. Vercel will build and deploy automatically from GitHub.

### Environment Variables (if needed)

If you add environment variables later:

1. Add them in Vercel -> Project Settings -> Environment Variables.
2. Add matching keys in local `.env.local` for development.
3. Redeploy from Vercel Deployments tab if required.

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_VHcnLGgSSUAfNLMp43v4IdmbAv0f)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.

<a href="https://v0.app/chat/api/kiro/clone/Napppz/v0-portfolio-website" alt="Open in Kiro"><img src="https://pdgvvgmkdvyeydso.public.blob.vercel-storage.com/open%20in%20kiro.svg?sanitize=true" /></a>
