# LifeApp / Dieta.ai

## Overview
A React TypeScript frontend application for diet and nutrition tracking using WhatsApp integration and AI. This is a landing page showcasing the LifeApp (Dieta.ai) service that helps users track calories, macros, and micronutrients through WhatsApp.

## Project Architecture
- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: shadcn/ui + Tailwind CSS + Radix UI components
- **Routing**: React Router DOM
- **State Management**: TanStack Query (React Query)
- **Build System**: Vite with SWC for fast compilation
- **Development**: Hot reload with Vite dev server

## Configuration for Replit
- **Port**: 5000 (configured for Replit's proxy system)
- **Host**: 0.0.0.0 (allows external access)
- **Allowed Hosts**: true (required for Replit's proxy to work)
- **Workflow**: "Start application" runs `npm run dev`
- **Deployment**: Configured for autoscale with build and preview commands

## Recent Changes (September 26, 2025)
- Configured Vite server for Replit environment
- Fixed host allowance issues for Replit's proxy system
- Set up development workflow on port 5000
- Configured deployment settings for production

## Key Features
- Responsive landing page design
- Video testimonials and feature demonstrations
- Pricing sections
- WhatsApp integration showcase
- Calorie and nutrition tracking features
- AI-powered food recognition

## External Dependencies
- UTMify tracking scripts for analytics
- External video and image assets
- Social media sharing meta tags

## Development
- Run `npm run dev` to start the development server
- The app will be available on port 5000
- Hot reload is enabled for efficient development