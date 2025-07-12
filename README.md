<p align="center">
    <a href="https://github.com/ayungavis/personal/actions">
      <img src="https://github.com/ayungavis/personal/actions/workflows/ci.yaml/badge.svg?branch=main" alt="CI Status">
    </a>
    <a href="https://github.com/ayungavis/personal/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/ayungavis/personal" alt="License">
    </a>
    <a href="https://ayungavis.com">
      <img src="https://img.shields.io/website?url=https%3A//ayungavis.com" alt="Website Status">
    </a>
</p>

## About

This is the source code for my personal website at [ayungavis.com](https://ayungavis.com). The site showcases my work as a software engineer with a focus on scalable applications, AI integration, and web3 technologies.

### Connect with me

- **GitHub**: [@ayungavis](https://github.com/ayungavis)
- **LinkedIn**: [Wahyu Kurniawan](https://www.linkedin.com/in/ayungavis/)
- **Twitter**: [@ayungavis](https://twitter.com/ayungavis)

## Tech Stack

This website is built with modern web technologies:

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Runtime**: [Bun](https://bun.sh/)
- **Testing**: [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)
- **Linting**: [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- **Deployment**: [Vercel](https://vercel.com/)

## Development

### Prerequisites

- [Bun](https://bun.sh/) (latest version)
- Node.js 18+ (for compatibility)

### Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ayungavis/personal.git
   cd personal
   ```

2. **Install dependencies**:

   ```bash
   bun install
   ```

3. **Start the development server**:

   ```bash
   bun dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
bun dev          # Start development server with Turbopack
bun build        # Build for production
bun start        # Start production server

# Code Quality
bun lint         # Run ESLint
bun format:check # Check code formatting
bun format:fix   # Fix code formatting
bun type-check   # Run TypeScript type checking

# Testing
bun test         # Run tests once
bun test:watch   # Run tests in watch mode
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── assets/             # Static assets (icons, images, fonts)
├── components/         # Reusable React components
│   ├── layout/        # Layout components
│   └── ui/            # UI components
├── constants/         # Application constants
├── features/          # Feature-based modules
├── fonts/             # Font configurations
├── lib/               # Third-party library configurations
├── styles/            # Global styles and CSS
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## Features

- ⚡ **Fast**: Built with Next.js 15 and Turbopack for lightning-fast development
- 🎨 **Modern Design**: Clean, minimalist design with Tailwind CSS
- 📱 **Responsive**: Mobile-first responsive design
- 🌙 **Theme Support**: Light/dark theme support (coming soon)
- ♿ **Accessible**: Built with accessibility best practices
- 🔍 **SEO Optimized**: Proper meta tags and Open Graph support
- 🧪 **Well Tested**: Comprehensive test coverage with Vitest
- 📦 **Type Safe**: Full TypeScript support with strict type checking

## Contributing

While this is a personal website, I welcome suggestions and improvements! Feel free to:

1. Open an issue for bugs or feature requests
2. Submit a pull request for improvements
3. Share feedback or ideas

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
