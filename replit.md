# Kisyanga FC - Official Website

## Overview
Kisyanga FC is a full-stack web application built for a football club competing in Uganda's Ntare Lions League. The project is a modern single-page application featuring player profiles, fixtures, news, history, gallery, and e-commerce functionality. It showcases the club's motto "Brotherhood, Grit & Glory" and serves as the official digital presence for fans and community members.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Components**: Radix UI primitives with custom styling via class-variance-authority

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **API Design**: RESTful API endpoints with Express routes
- **Development**: Hot reloading with Vite middleware integration
- **Data Seeding**: Automated database initialization with sample data

### Deployment Strategy
- **Platform**: Replit with autoscale deployment target
- **Build Process**: Vite builds frontend assets, esbuild bundles server code
- **Environment**: Development runs on port 5000, production serves on port 80
- **Database**: PostgreSQL 16 provisioned through Replit modules

## Key Components

### Database Schema
The application uses a PostgreSQL database with the following main tables:
- **users**: Authentication system (future implementation)
- **players**: Team member profiles with ratings and positions
- **fixtures**: Match schedules and results
- **news**: Club announcements and match reports
- **history**: Significant club milestones
- **gallery**: Photo collection from matches and events
- **products**: Merchandise catalog
- **sponsors**: Partner organizations

### API Endpoints
- `GET /api/players` - Retrieve all team members
- `GET /api/players/:id` - Get specific player details
- `GET /api/fixtures` - Fetch upcoming matches and results
- `GET /api/news` - Latest club news and updates
- `GET /api/history` - Club historical milestones
- `GET /api/gallery` - Photo gallery images
- `GET /api/products` - Merchandise catalog
- `GET /api/sponsors` - Partner information

### Frontend Sections
1. **Hero Section**: Club branding with logo and call-to-action buttons
2. **Team Section**: Player cards with photos, positions, and ratings
3. **Fixtures Section**: Tabbed interface for upcoming matches and results
4. **News Section**: Latest articles with categories and images
5. **History Section**: Timeline of significant club events
6. **Gallery Section**: Photo grid with modal viewing
7. **Shop Section**: Merchandise showcase with coming soon functionality
8. **Sponsors Section**: Partner recognition with contact form
9. **Contact Section**: Communication form for fan inquiries

## Data Flow

### Client-Server Communication
1. React components use TanStack Query hooks to fetch data
2. Query client manages caching, background updates, and error handling
3. API requests are made to Express endpoints with credentials included
4. Server queries PostgreSQL database using Drizzle ORM
5. Responses are cached client-side for optimal performance

### State Management
- Server state managed by TanStack Query with intelligent caching
- Local component state handled by React hooks
- Form state managed through controlled components
- No global state management needed due to simple data flow

## External Dependencies

### Production Dependencies
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe database ORM with PostgreSQL adapter
- **express**: Web application framework
- **pg**: PostgreSQL client for Node.js
- **wouter**: Lightweight client-side routing
- **@radix-ui/react-***: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant styling
- **date-fns**: Date utility library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast bundler for server code
- **drizzle-kit**: Database migration and schema management

### Asset Sources
- Images sourced from Pixabay and Unsplash for demo content
- Font Awesome icons for social media and UI elements
- Google Fonts (Inter) for typography

## Deployment Strategy

### Development Environment
- Replit provides integrated development with PostgreSQL database
- Hot reloading enabled through Vite middleware
- Environment variables managed through Replit secrets
- Development server runs on port 5000 with proxy configuration

### Production Deployment
- Automated build process compiles both frontend and backend
- Static assets served from dist directory
- Database migrations applied through Drizzle Kit
- Autoscale deployment handles traffic variations
- HTTPS termination handled by Replit infrastructure

### Database Management
- Schema defined in TypeScript with Drizzle ORM
- Migrations generated and applied automatically
- Seed data provides realistic content for demonstration
- Connection pooling optimizes database performance

## Changelog
- June 16, 2025. Initial setup

## User Preferences
Preferred communication style: Simple, everyday language.