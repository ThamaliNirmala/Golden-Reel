# Next.js App

This is a [Next.js](https://nextjs.org/) application built as part of a coding challenge / project submission.

## 🚀 Features

- Server-side rendering (SSR) & static site generation (SSG)
- API routes
- Fully responsive UI
- Easily deployable to Vercel, Netlify, or any Node environment

## 📦 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16+ recommended)
- **npm** or **yarn**

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## ⚙️ Build & Deploy

### To Build for Production

```bash
npm run build
npm start
```

### Environment Variables

If your app uses environment variables, create a `.env.local` file in the root:

```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
```

### Deployment Options

- **Vercel** (recommended for Next.js):  
  Push your repo to GitHub and import it on [vercel.com](https://vercel.com/). It will auto-detect your Next.js config.
  
- **Netlify** or other Node hosts:  
  Set build commands and output directories properly (`npm run build`, `npm start`).

## 📂 Folder Structure

```bash
.
├── components/        # Shared UI components
├── pages/             # Pages & API routes
├── public/            # Static assets
├── styles/            # CSS or SCSS modules
├── utils/             # Utility functions
├── .env.local         # Local environment variables
├── next.config.js     # Next.js config
└── README.md
```

## 📧 Submission Instructions

Reply to the email you received with a link to this GitHub repo **or** attach the zipped project directory including this README file.

## 📃 License

This project is licensed for submission and review purposes only.
