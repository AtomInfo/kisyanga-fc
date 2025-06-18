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
- **Data Storage**: File-based data serving from server/data directory
- **API Design**: RESTful API endpoints with Express routes serving static data
- **Development**: Hot reloading with Vite middleware integration
- **Performance**: Direct file imports for fast response times (0-5ms)

### Deployment Strategy
- **Platform**: Replit with autoscale deployment target
- **Build Process**: Vite builds frontend assets, esbuild bundles server code
- **Environment**: Development runs on port 5000, production serves on port 80
- **Database**: PostgreSQL 16 provisioned through Replit modules

## Key Components

### Data Structure
The application uses file-based data storage with the following data files:
- **server/data/players.ts**: Team member profiles with ratings and positions
- **server/data/fixtures.ts**: Match schedules and results
- **server/data/news.ts**: Club announcements and match reports
- **server/data/history.ts**: Significant club milestones
- **server/data/gallery.ts**: Photo collection from matches and events
- **server/data/products.ts**: Merchandise catalog
- **server/data/sponsors.ts**: Partner organizations

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
3. API requests are made to Express endpoints serving static data
4. Server returns data directly from imported TypeScript files
5. Responses are cached client-side with fast server response times (0-5ms)

### State Management
- Server state managed by TanStack Query with intelligent caching
- Local component state handled by React hooks
- Form state managed through controlled components
- No global state management needed due to simple data flow

## External Dependencies

### Production Dependencies
- **@tanstack/react-query**: Server state management and caching
- **express**: Web application framework for API routes
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

### Asset Sources
- Images sourced from Pixabay and Unsplash for demo content
- Font Awesome icons for social media and UI elements
- Google Fonts (Inter) for typography

## Deployment Strategy

### Development Environment
- Replit provides integrated development environment
- Hot reloading enabled through Vite middleware
- Development server runs on port 5000 with proxy configuration
- File-based data ensures fast startup and response times

### Production Deployment
- Automated build process compiles both frontend and backend
- Static assets served from dist directory
- No database dependencies for simplified deployment
- Autoscale deployment handles traffic variations
- HTTPS termination handled by Replit infrastructure

### Data Management
- All data stored in TypeScript files for type safety
- Images sourced from reliable Unsplash URLs
- No database setup or migrations required
- Instant startup with direct file imports

## Changelog
- June 18, 2025: Removed database dependency, migrated to file-based data storage
- June 18, 2025: Fixed all broken images with working Unsplash URLs
- June 18, 2025: Successfully migrated from Replit Agent to standard Replit environment
- June 16, 2025: Initial setup

## User Preferences
Preferred communication style: Simple, everyday language.