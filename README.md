# CV Forge — AI-Powered Resume Builder & Career Assistant

CV Forge is a full-stack MERN application that helps users create professional resumes, generate career-related documents, and receive AI-powered career guidance using Google Gemini AI.

---

# Features

## Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Logout Functionality

---

# Resume Builder

Users can:
- Create ATS-friendly resumes
- Choose from multiple templates
- Edit saved resumes
- Auto-save drafts
- Download resumes as PDF

### Resume Templates
- Minimal
- Modern
- Professional

---

# AI Features

## AI Resume Summary Generator
Generates professional ATS-friendly summaries using Gemini AI.

## AI Career Chatbot
Career-focused chatbot that answers:
- Resume questions
- Interview preparation
- Career guidance
- Job application advice

The chatbot intentionally rejects:
- Casual conversations
- Daily life discussions
- Non-career topics

---

# Document Builder

Users can create:
- Cover Letters
- Internship Proposals
- Recommendation Letters
- Job Application Letters

Features:
- Dedicated forms
- Professional templates
- Live preview
- PDF download
- Save & edit support

---

# Dashboard

The dashboard includes:
- Resume management
- Document management
- AI chatbot
- Profile section

Users can:
- Edit resumes/documents
- Delete resumes/documents
- View timestamps
- View selected templates

---

# Contact System

A Contact Us page allows users to send messages directly to the admin email using Nodemailer.

---

# Technologies Used

## Frontend
- React.js
- Tailwind CSS
- React Router DOM
- Axios
- React Icons
- html2canvas
- jsPDF
- React Hot Toast

---

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- Nodemailer

---

## AI Integration
- Google Gemini API

---

# Project Structure

```bash
CV-Forge/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── forms/
│   │   ├── templates/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
```

---

# Installation

## Clone Repository

```bash
git clone <your-repository-url>
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# Backend Setup

```bash
cd server
npm install
npm run dev
```

---

# Environment Variables

Create a `.env` file inside the server folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
```

---

# Gmail App Password

Enable:
- Google 2-Step Verification

Generate App Password:
- Google Account → Security → App Passwords

Use the generated password inside `.env`.

---

# API Routes

## Auth Routes

```bash
/api/auth/register
/api/auth/login
```

---

## Resume Routes

```bash
/api/resume/create
/api/resume/my-resumes
/api/resume/single/:id
/api/resume/update/:id
/api/resume/delete/:id
```

---

## Document Routes

```bash
/api/document/create
/api/document/my-documents
/api/document/single/:id
/api/document/update/:id
/api/document/delete/:id
```

---

## AI Routes

```bash
/api/ai/summary
/api/ai/chat
```

---

## Contact Route

```bash
/api/contact
```

---

# PDF Generation

PDF generation is implemented using:
- html2canvas
- jsPDF

Supports:
- Resume export
- Document export

---

# Security Features

- JWT Token Authentication
- Password Hashing
- Protected APIs
- Secure Environment Variables

---

# Future Improvements

- Resume Scoring AI
- Interview Simulator
- LinkedIn Import
- Multi-language Support
- Cloud Storage
- Analytics Dashboard

---

# Author

Developed by:
**Wania Alam**

---

# License

This project is for educational and portfolio purposes.
