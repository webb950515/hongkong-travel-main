<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1DiA8eYfMcawjVLMWQN9ko9_Sqf4iGJQo


## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env` (if available) or create `.env`
   - Add `GEMINI_API_KEY=your_api_key_here`

### Development

Start the development server:

```bash
npm run dev
```

### Production Build

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

This project includes a GitHub Action for deploying to GitHub Pages.

1. Go to your repository **Settings** > **Pages**.
2. Under "Build and deployment", select **GitHub Actions** as the source.
3. Push changes to the `main` branch to trigger the deployment.

