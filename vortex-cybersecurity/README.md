# VORTEX — Cybersecurity Team

A dark, professional cybersecurity SaaS-style SPA with a fixed sidebar and switchable main content. The supplied VORTEX logo is included at `frontend/public/assets/vortex-logo.png`.

## Stack
- Frontend: React + TypeScript + Vite
- Backend: Node.js + Express
- Local prototype chat persistence: LocalStorage
- Scanner prototype: browser SHA-256 + backend upload endpoint
- Database: PostgreSQL-ready schema

## Run
1. Install Node.js 20+.
2. From the project root: `npm install`
3. `cd frontend && npm install`
4. `cd ../backend && npm install`
5. Copy `backend/.env.example` to `backend/.env`.
6. From root: `npm run dev`
7. Open `http://localhost:5173`.

## Production
`npm --prefix frontend run build` creates `frontend/dist`. Deploy it to Netlify. Deploy the Express backend separately or adapt its routes to serverless functions.

## Security architecture
Never put AI, database, JWT, or threat-intelligence keys in the frontend. The scanner backend is designed around isolated processing; do not execute uploaded files directly on the application server. Add YARA, ClamAV, VirusTotal and a sandbox behind the backend before enabling real detection.
