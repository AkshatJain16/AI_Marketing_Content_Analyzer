# AI Marketing Content Analyzer

An AI-powered web application that analyzes marketing content and provides actionable insights to help improve its effectiveness, clarity, and engagement.

## 🚀 Live Demo

* **Frontend:** https://ai-marketing-content-analyzer.vercel.app/
* **Backend API:** https://ai-marketing-content-analyzer.onrender.com

## 📌 About the Project

The AI Marketing Content Analyzer helps marketers and businesses evaluate their marketing copy using AI.

Users can enter marketing content such as advertisements, promotional messages, email campaigns, social media posts, or product offers. The application analyzes the content and provides a marketing score, sentiment, tone, clarity, target audience, improvement suggestions, and an AI-recommended version of the content.

## ✨ Features

* 📊 **Marketing Score** — Rates the overall effectiveness of the marketing content out of 100.
* 😊 **Sentiment Analysis** — Identifies the emotional sentiment of the content.
* 🎯 **Tone Analysis** — Determines the communication style and tone.
* 📝 **Clarity Analysis** — Evaluates how clear and easy to understand the content is.
* 👥 **Target Audience** — Identifies the likely audience for the marketing message.
* 💡 **Improvement Suggestions** — Provides actionable recommendations to improve the content.
* ✨ **AI-Recommended Content** — Generates an improved version of the original marketing content.
* 📋 **Copy Content** — Allows users to quickly copy the recommended content.
* ⏳ **Loading State** — Provides feedback while content is being analyzed.
* ⚠️ **Error Handling** — Handles API failures and unavailable AI services gracefully.
* 📱 **Responsive UI** — Works across desktop and mobile screen sizes.

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* HTML
* CSS

### Backend

* Node.js
* Express.js
* REST API
* CORS
* dotenv

### AI

* Google Gemini API
* `@google/genai`

### Deployment

* Vercel — Frontend
* Render — Backend

## 🏗️ Project Structure

```text
ai-marketing-content-analyzer/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

## ⚙️ How It Works

1. The user enters marketing content in the React frontend.
2. The frontend sends the content to the Express backend through a REST API.
3. The backend sends the content to the Google Gemini API.
4. Gemini analyzes the marketing content according to predefined rules.
5. The backend processes the AI response and returns the analysis to the frontend.
6. The frontend displays the marketing score, insights, suggestions, and improved content.

```text
User
  ↓
React + Vite
  ↓
Express REST API
  ↓
Google Gemini
  ↓
AI Analysis
  ↓
React UI
```

## 📊 AI Analysis

The application currently generates the following insights:

```text
Marketing Score
Sentiment
Tone
Clarity
Target Audience
Suggestions for Improvement
AI-Recommended Content
```

The AI response is structured as JSON so that the frontend can display each analysis category separately.

## 🔐 Environment Variables

### Backend

Create a `.env` file inside the `backend` directory:

```env
GEMINI_API_KEY=your_gemini_api_key
```

### Frontend

For local development, create a `.env` file inside the `frontend` directory:

```env
VITE_API_URL=http://localhost:5000
```

For production, `VITE_API_URL` should point to the deployed backend URL.

> **Important:** Never commit `.env` files or API keys to GitHub.

## 💻 Local Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd ai-marketing-content-analyzer
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

Open another terminal:

```bash
cd backend
npm install
```

### 4. Configure environment variables

Add the required `.env` files described above.

### 5. Start the backend

Inside the `backend` directory:

```bash
npm start
```

The backend will run on:

```text
http://localhost:5000
```

### 6. Start the frontend

Inside the `frontend` directory:

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

## 🌐 Deployment

### Frontend

The frontend is deployed using Vercel.

The Vite React application is configured to use the deployed backend URL through the `VITE_API_URL` environment variable.

### Backend

The Express backend is deployed using Render.

The Gemini API key is stored as an environment variable on the deployment platform and is never exposed to the frontend.

## 🔒 Security

* API keys are stored in environment variables.
* `.env` files are excluded from Git.
* The Gemini API key is only used by the backend.
* The frontend communicates with the backend through the REST API.
* CORS is configured for communication between the deployed frontend and backend.

## 📚 Learning Outcomes

This project demonstrates practical experience with:

* React component development
* React state management
* REST API integration
* Node.js and Express backend development
* Asynchronous JavaScript and Promises
* AI API integration
* JSON-based AI responses
* Error and loading state handling
* Environment variables and API security
* CORS configuration
* Git and GitHub
* Full-stack deployment using Vercel and Render

## 👨‍💻 Author

**Akshat Jain**

Built as a full-stack AI/MarTech project to explore the practical use of generative AI in marketing technology.
