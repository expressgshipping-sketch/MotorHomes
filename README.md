# Motorhomes Website

A modern Next.js website cloned from smcmotorhomes.co.uk, featuring motorhomes and campervans listings with detail pages.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Pages Created

- **Homepage** (`/`) - Hero section, category cards, featured sections, services, and about section
- **Motorhomes Listing** (`/motorhomes`) - Grid of motorhomes with filtering options
- **Motorhome Detail** (`/motorhomes/[id]`) - Individual motorhome details with specifications and features
- **Campervans Listing** (`/campervans`) - Grid of campervans with filtering options
- **Campervan Detail** (`/campervans/[id]`) - Individual campervan details with specifications and features

## Components

- **Header** - Responsive navigation with dropdown menus for Motorhomes and Campervans
- **Footer** - Contact info, quick links, brands, and company info

## Installation

Due to network connectivity issues, you'll need to install dependencies manually:

```bash
npm install
```

If you're behind a proxy, configure npm proxy settings:

```bash
npm config set proxy http://your-proxy-server:port
npm config set https-proxy http://your-proxy-server:port
npm install
```

## Development

After installing dependencies, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors

The theme uses custom colors defined in `tailwind.config.ts`:
- **Primary**: `#ef4050` (red/pink accent)
- **Secondary**: `#414042` (dark gray)

### Data

Vehicle data is currently hardcoded in the page files. To connect to a real backend:
1. Create API routes in `src/app/api/`
2. Replace the hardcoded data arrays with fetch calls
3. Add proper TypeScript interfaces for your data models

### Images

Replace the placeholder image paths with actual vehicle images in the data arrays.

## Features

- Responsive design (mobile-first)
- Dropdown navigation menus
- Vehicle filtering by type, brand, berths, and year
- Favorite/heart button functionality (UI only)
- Breadcrumb navigation on detail pages
- Contact CTA buttons
- Service and valuation sections

## Future Enhancements

- Connect to a real database/API
- Add search functionality
- Implement actual favorites system with user authentication
- Add image gallery with lightbox
- Implement advanced filtering
- Add contact form functionality
- Integrate with a CMS for easy content management
