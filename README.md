# Next.js App

This is a [Next.js](https://nextjs.org/) application built as part of a coding challenge / project submission.

## 🚀 Features

- Popular/Trending movies
- Top rated movies
- Popular/Trending tv shows
- Top rated tv shows
- Search movie/tv show

## 📦 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16+ recommended)
- **npm** or **yarn**

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ThamaliNirmala/Golden-Reel
    cd Golden-Reel
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

create a `.env.local` file in the root:

```env
# .env.local
NEXT_PUBLIC_API_BASE_URL=https://api.themoviedb.org/3
NEXT_PUBLIC_API_TOKEN=Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWY3MGY0N2FmNWZlYjczZDQxM2E4OGFmMTAwNzMxMCIsIm5iZiI6MTc0NDk2NTE3MC4xNDQsInN1YiI6IjY4MDIwZTMyOTFkM2Y2NWM1ZmFjZmVmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o2UQbEiE2NnFLCxQjiqaXrjRMmZ99kMdygqltMiZ9Ds

```

### Deployment Options

- **Vercel** (recommended for Next.js):  
  Push your repo to GitHub and import it on [vercel.com](https://vercel.com/). It will auto-detect your Next.js config.
  
- **Netlify** or other Node hosts:  
  Set build commands and output directories properly (`npm run build`, `npm start`).

## 📃 License

This project is licensed for submission and review purposes only.
