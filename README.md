# Moon Crochet E-commerce Platform

A modern, premium e-commerce website for handcrafted crochet bags and accessories.

## Features

- Beautiful, responsive design
- Product catalog with categories
- Shopping cart functionality
- Custom order requests
- Supabase backend for data management
- Optimized for performance and SEO

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL database, authentication, storage)
- **Deployment**: Docker-ready for Coolify or any container platform

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- Supabase account

### Local Development

1. Clone the repository
2. Copy `.env.example` to `.env` and fill in your Supabase credentials
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:5173` in your browser

### Building for Production

```bash
npm run build
```

## Deployment

### Coolify (Recommended)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on deploying to Coolify using Docker.

Quick start:
```bash
docker-compose up --build
```

### GitHub Pages

To deploy to GitHub Pages, set the base path in your environment:
```bash
VITE_BASE_PATH=/your-repo-name npm run build
```

## Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── lib/            # Utilities and configurations
│   └── main.tsx        # Application entry point
├── public/             # Static assets
├── supabase/
│   └── migrations/     # Database migrations
├── Dockerfile          # Docker configuration
├── nginx.conf          # Nginx configuration for production
└── docker-compose.yml  # Docker Compose for local testing
```

## Environment Variables

See `.env.example` for required environment variables.

## License

All rights reserved.
