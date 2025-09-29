# 🏥 AI-Based Health News Curator

An AI-powered web app that curates and simplifies health news articles
with TL;DR summaries, key takeaways, and easy-to-read simplified
content.

------------------------------------------------------------------------

## 1. Project Setup & Demo

### Web Setup

``` bash
npm install
npm start
```

Runs the app locally on <http://localhost:3000>.

### Demo

<img width="1840" height="968" alt="Screenshot 2025-09-29 174439" src="https://github.com/user-attachments/assets/b25083b9-d0e5-4880-996c-2d1244070bf0" />

<img width="1840" height="952" alt="Screenshot 2025-09-29 174524" src="https://github.com/user-attachments/assets/73989295-7734-4e23-bc4e-5d157ead815b" />

------------------------------------------------------------------------

## 2. Problem Understanding

The problem is to build an **AI-based news curator** that:\
- Fetches health-related articles.\
- Summarizes them into **TL;DRs** and **Key Takeaways**.\
- Provides a **simplified version** of each article for easy reading.

### Assumptions Made:

-   Mock data is used instead of a live API for demonstration.\
-   AI calls are simulated with processing delays.\
-   Pagination and refresh are included to mimic real-world usage.

------------------------------------------------------------------------

## 3. AI Prompts & Iterations

-   **Initial Prompt**: Build a news curator that summarizes health
    articles.\
-   **Issues Faced**: Summaries were too short or repetitive.\
-   **Refined Prompting**: Added TL;DR + multiple key points +
    simplified version for accessibility.\
-   **Final Result**: Clear, concise summaries with optional deeper
    reading.

------------------------------------------------------------------------

## 4. Architecture & Code Structure

    health-news-curator/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/        # UI Components (Header, ArticleCard, Pagination, etc.)
    │   ├── context/           # ArticlesContext (state management)
    │   ├── services/          # mockData + aiService (simulated AI)
    │   ├── utils/             # Helpers (date formatting, constants)
    │   ├── App.js             # Main App Component
    │   ├── index.js           # Entry Point
    │   └── App.css            # Styling
    ├── package.json
    └── README.md

### Key Files:

-   `App.js`: Root component, wraps app with `ArticlesProvider`.\
-   `ArticlesContext.js`: Handles article state, loading, pagination,
    and simplification.\
-   `aiService.js`: Simulates AI summarization & simplification.\
-   `components/`: Modular UI (cards, headers, pagination, etc.).

### State Management:

-   **React Context** (`ArticlesContext`) for global state.\
-   Handles: articles, pagination, expanded article view, error/loading
    states.

------------------------------------------------------------------------

## 5. Screenshots / Screen Recording

-   Attach screenshots (web)\
-   Attach screen recording (mobile)

------------------------------------------------------------------------

## 6. Known Issues / Improvements

### Known Issues:

-   Uses mock data only (no real API).\
-   Simplification is keyword-based, not true NLP.

### Possible Improvements:

-   Integrate with a real **news API**.\
-   Use **OpenAI API** for better summarization & simplification.\
-   Add **search and filtering** by topic/date.\
-   Offline caching and bookmarking of articles.

------------------------------------------------------------------------

## 7. Bonus Work

-   **Modern UI** with TailwindCSS.\
-   **Dark Mode Ready** styling.\
-   Smooth **loading states & animations**.\
-   Responsive layout for desktop & mobile.

------------------------------------------------------------------------

🚀 Built with React, Context API, TailwindCSS, and simulated AI
services.
