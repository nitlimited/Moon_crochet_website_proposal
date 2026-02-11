# Deployment Guide

## Docker Deployment (Coolify)

This application is containerized and ready to deploy on Coolify or any Docker-based hosting platform.

### Prerequisites

- Docker and Docker Compose installed (for local testing)
- Coolify instance set up
- Git repository connected to Coolify

### Architecture

- **Frontend**: React + Vite application served by nginx
- **Backend**: Supabase (handles database, authentication, and edge functions)

### Environment Variables

Create a `.env` file or configure in Coolify with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_BASE_PATH=/
```

### Local Testing with Docker

1. Build and run the container:
   ```bash
   docker-compose up --build
   ```

2. Access the application at `http://localhost:3000`

3. Stop the container:
   ```bash
   docker-compose down
   ```

### Deploying to Coolify

#### Option 1: Via Git Repository (Recommended)

1. **Connect Repository**:
   - Log in to your Coolify dashboard
   - Create a new application
   - Connect your Git repository

2. **Configure Build Settings**:
   - Build Pack: `Dockerfile`
   - Dockerfile Location: `./Dockerfile`
   - Port: `80`

3. **Set Environment Variables**:
   - Add `VITE_SUPABASE_URL`
   - Add `VITE_SUPABASE_ANON_KEY`
   - Add `VITE_BASE_PATH=/` (or custom path if needed)

4. **Deploy**:
   - Click "Deploy" button
   - Coolify will automatically build and deploy your application

#### Option 2: Manual Docker Image

1. Build the Docker image:
   ```bash
   docker build -t moon-crochet-frontend .
   ```

2. Push to a container registry:
   ```bash
   docker tag moon-crochet-frontend your-registry/moon-crochet-frontend:latest
   docker push your-registry/moon-crochet-frontend:latest
   ```

3. Deploy in Coolify using the registry image

### Health Check

The application includes a health check endpoint at `/health` that Coolify can use for monitoring:

```bash
curl http://your-domain/health
```

### Supabase Backend

The backend is fully managed by Supabase. Ensure your Supabase project is configured with:

1. **Database Schema**: Migrations are in `supabase/migrations/`
2. **Row Level Security**: Enabled on all tables
3. **Environment Variables**: Configured in your `.env` file

### Post-Deployment

1. Verify the application is running:
   ```bash
   curl http://your-domain/health
   ```

2. Check that all routes work correctly (nginx handles SPA routing)

3. Test database connectivity through the application

### Troubleshooting

- **Blank page**: Check browser console for errors, verify environment variables
- **API errors**: Verify Supabase URL and keys are correct
- **Routing issues**: Ensure nginx.conf is properly configured for SPA routing
- **Build failures**: Check Docker logs for specific error messages

### Monitoring

Coolify provides built-in monitoring. Key metrics to watch:

- Container health status
- Memory usage
- CPU usage
- Response times

### Updating

To deploy updates:

1. Push changes to your Git repository
2. Coolify will auto-deploy (if configured) or click "Redeploy"
3. Zero-downtime deployment is handled by Coolify

### Custom Domain

Configure your custom domain in Coolify:

1. Go to application settings
2. Add your domain
3. Configure DNS records as instructed
4. Enable SSL (Let's Encrypt)

### Scaling

Coolify supports horizontal scaling:

1. Navigate to your application settings
2. Adjust the number of replicas
3. Load balancing is handled automatically
