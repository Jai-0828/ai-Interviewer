# 🎤 AI Interviewer

> An AI-powered mock interview platform that generates personalized interview questions from your resume, evaluates your spoken/typed answers in real time, and delivers a detailed performance report — including a downloadable PDF.

![Status](https://img.shields.io/badge/status-live-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

**🔗 Live Demo:** [ai-interviewer-client-9fj8.onrender.com](https://ai-interviewer-client-9fj8.onrender.com/)

---

## 📋 Table of Contents

- [About](#-about)
- [Key Features](#-key-features)
- [How It Works](#-how-it-works)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Roadmap](#-roadmap)
- [Author](#-author)

---

## 📖 About

AI Interviewer is a full-stack mock interview platform designed to help candidates practice for real job interviews. Users upload their resume, and the app extracts their role, experience, skills, and projects using AI, then generates a set of tailored interview questions with increasing difficulty. Each answer is evaluated by AI across confidence, communication, and correctness, and the platform generates a detailed performance report — complete with charts and a downloadable PDF summary.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🔐 Authentication | Google Sign-In via Firebase, plus custom auth |
| 📄 Resume Parsing | Extracts role, experience, skills, and projects from an uploaded PDF resume using AI |
| 🧠 AI Question Generation | Generates 5 questions per session, tailored to the candidate's profile, with progressive difficulty (easy → easy → medium → medium → hard) |
| ⏱️ Timed Responses | Each question has a set time limit (60–120 seconds); unanswered/late responses score 0 |
| 📊 AI-Based Scoring | Each answer is scored on Confidence, Communication, and Correctness (0–10 each), with natural-language feedback |
| 📈 Performance Dashboard | Circular score gauge, skill breakdown bars, and an area chart showing score trend across questions |
| 📄 Downloadable PDF Report | Auto-generated PDF with final score, skill breakdown, personalized advice, and a full question-by-question table |
| 🕓 Interview History | Past interview sessions are saved and viewable per user |
| 💳 Credit System & Payments | Each interview session costs credits; users can purchase more credits via Razorpay |

---

## ⚙️ How It Works

1. **Sign in** with Google (Firebase Auth)
2. **Upload your resume** — the backend parses the PDF (`pdfjs-dist`) and sends the text to AI to extract role, experience, skills, and projects
3. **Start an interview** — AI (via OpenRouter, using GPT-4o-mini) generates 5 tailored questions
4. **Answer within the time limit** — each response is submitted and scored instantly by AI
5. **Finish the session** — view your report: overall score, skill breakdown, per-question feedback, and a performance trend chart
6. **Download your report** as a PDF, or revisit past sessions from your interview history

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- React Router
- Redux Toolkit — global state management
- Firebase Authentication (Google Sign-In)
- Tailwind CSS
- Framer Motion — animations
- Recharts + react-circular-progressbar — data visualization
- jsPDF + jsPDF-AutoTable — client-side PDF report generation
- Axios

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- Multer — resume file upload handling
- pdfjs-dist — PDF text extraction
- OpenRouter API (GPT-4o-mini) — question generation & answer evaluation
- Razorpay — payment gateway for credit purchases
- Cookie-based session handling (cookie-parser, CORS)

**Deployment**
- Render

---

## ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/Jai-0828/ai-Interviewer.git
cd ai-Interviewer

# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install
```

**Environment variables** — create a `.env` file inside `/server`:

```env
MONGODB_URL=mongodb_connection_string
OPENROUTER_API_KEY=openrouter_api_key
RAZORPAY_KEY_ID=razorpay_key_id
RAZORPAY_KEY_SECRET=razorpay_key_secret
PORT=5000
```

And inside `/client`:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
```

---

## ▶️ Usage

```bash
# Start the backend
cd server && npm start

# Start the frontend (in a new terminal)
cd client && npm run dev
```

Then open `http://localhost:5173` in your browser, sign in, upload your resume, and start your mock interview.

---

| Home | Interview Session | Performance Report |


---

## 🗺️ Roadmap

- [ ] Voice-based interview mode
- [ ] Multi-language question support
- [ ] Leaderboard / peer comparison

---

## 👤 Author

**Jai Prakash Yadav**
[GitHub](https://github.com/Jai-0828) • [LinkedIn](https://linkedin.com/in/jai-yadav) • [Live Demo](https://ai-interviewer-client-9fj8.onrender.com/)
