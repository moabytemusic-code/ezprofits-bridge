# EzProfits Bridge

A high-converting affiliate bridge page for EzProfits — turn any link into daily commissions.

## Tech Stack

- **Vite 6** + **React 19** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** components
- **React Router DOM** v6
- **Vercel** hosting with serverless API functions

## Project Structure

```
src/
├── pages/
│   ├── CaptureGate.tsx    # Lead capture (name + email → Brevo)
│   ├── Index.tsx          # Bridge / sales page
│   └── NotFound.tsx       # 404 page
├── components/
│   ├── ui/                # shadcn/ui components (do not edit)
│   └── made-with-tech-buddy.tsx
├── hooks/                 # Custom hooks
├── lib/                   # Utilities (cn helper)
└── utils/                 # Toast helpers
api/
└── subscribe.ts           # Vercel serverless — proxies to Brevo
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

| Variable         | Description                        |
| ---------------- | ---------------------------------- |
| `BREVO_API_KEY`  | Brevo API key for contact creation |

## Deployment

Deployed on [Vercel](https://vercel.com). Set the `BREVO_API_KEY` environment variable in your Vercel project settings.

```bash
vercel --prod
```

## License

Private — all rights reserved.
