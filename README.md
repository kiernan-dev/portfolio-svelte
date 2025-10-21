# Portfolio Svelte

A modern, interactive portfolio website built with SvelteKit and TypeScript.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Enhanced user experience with AOS (Animate On Scroll)
- **Interactive Elements**: Built with p5.js for creative visual components
- **Modern Tech Stack**: SvelteKit with TypeScript for type safety
- **Fixed Navigation**: Easy navigation between portfolio sections

## Tech Stack

- **Framework**: SvelteKit 2.0
- **Language**: TypeScript
- **Styling**: CSS with custom properties
- **Build Tool**: Vite
- **Animations**: AOS (Animate On Scroll)
- **Interactive Graphics**: p5.js
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Portfolio-svelte
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm check` - Run Svelte type checking
- `pnpm check:watch` - Run type checking in watch mode

## Project Structure

```
src/
├── lib/
│   ├── components/     # Reusable Svelte components
│   └── stores/         # Svelte stores for state management
├── routes/             # SvelteKit routes
└── app.html           # Main HTML template
```

## Sections

- **About**: Personal introduction and background
- **Projects**: Showcase of development work
- **Skills**: Technical skills and expertise
- **Contact**: Get in touch information

## Building for Production

```bash
pnpm build
```

The built files will be in the `build/` directory, ready to be deployed to any static hosting service.

## License

This project is private and not licensed for public use.