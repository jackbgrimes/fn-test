# Freese and Nichols People Assistant

An internal HR chatbot concept demo built with React + Anthropic Claude. Covers 2025 benefits, Workday how-to guides, and live state employment law search.

## Stack
- React 18 (Create React App)
- Vercel serverless function as API proxy (`/api/proxy.js`)
- Anthropic Claude claude-sonnet-4-20250514

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects the React app — no config needed
4. Click Deploy

That's it. Your live URL will be something like `your-project.vercel.app`.

## First-time setup (after deploy)

1. Open your deployed URL
2. You'll see the Owner Setup screen
3. Enter your Anthropic API key (get one at [console.anthropic.com](https://console.anthropic.com))
4. Click "Save & Launch" — the key is stored in localStorage
5. Share the URL with anyone — they go straight to the chat

## Local development

```bash
npm install
npm start        # React dev server on localhost:3000
```

For the proxy to work locally, use the Vercel CLI:
```bash
npm i -g vercel
vercel dev       # Runs both React and the /api proxy on localhost:3000
```

## Project structure

```
fn-assistant/
├── api/
│   └── proxy.js          # Vercel serverless function — proxies Anthropic API calls
├── public/
│   └── index.html
├── src/
│   ├── index.js
│   └── App.js            # All UI, chat logic, and benefits knowledge base
├── vercel.json
└── package.json
```

## Notes
- The API key is stored in the browser's localStorage of whoever sets it up
- Anyone with the URL can use the demo on that key
- Monitor usage at console.anthropic.com
- This is a concept prototype — not connected to live HR systems
