# WhyNot - Career Intelligence Platform

A next-generation career management platform built on **Firebase** and **Google Cloud Platform** that combines AI-powered insights with transparent rejection analysis to help students navigate their placement journey with confidence and clarity.

**Powered by Google Technologies:** Firebase Authentication, Firebase Firestore, Firebase Hosting, Google Gemini AI

## 🌟 Key Features

### AI-Powered Rejection Analysis
- **Dual-Type Classification**: Distinguishes between rule-based (CGPA, skills) and non-rule-based rejections
- **Skill Confidence Tracking**: Profile snapshot at application time prevents trust issues from profile changes
- **Actionable Insights**: Personalized improvement plans based on rejection patterns
- **Trust by Design**: All AI explanations include disclaimers about limitations

### Smart Application Management
- **Firebase Real-time Sync**: Live updates across all devices
- **Profile Snapshots**: Freezes your CGPA, skills, and resume at application time
- **Honest Explanations**: Clear distinction between eligibility violations and subjective screening
- **Pattern Analysis**: Bulk analysis of multiple rejections to identify improvement priorities
- **Cloud Storage**: Secure resume storage on Firebase Cloud Storage

### Resume Intelligence
- **AI Resume Analysis**: Powered by Google Gemini AI
- **ATS Score Calculation**: Keyword matching and formatting analysis
- **Detailed Feedback**: Section-by-section scoring with specific suggestions

### Student Dashboard
- Real-time application tracking
- Interview scheduling
- Opportunity discovery with smart filtering
- Profile completion tracking
- Activity timeline

### Placement Officer Dashboard
- Opportunity posting and management
- Application review workflow
- Student analytics
- Batch operations for bulk rejections/shortlisting

## �️ Tech Stack

**Frontend:**
- React 19.2.3 with TypeScript 5.8.2
- Vite 6.2.0 (build tool)
- Tailwind CSS 4.1.18 (styling)
- Framer Motion 12.23.26 (animations)
- Three.js & React Three Fiber (3D effects)

**Google Cloud Platform:**
- **Firebase Authentication** (OAuth 2.0, email/password)
- **Firebase Firestore** (NoSQL real-time database)
- **Firebase Hosting** (fast, secure web hosting)
- **Firebase Cloud Storage** (file uploads & resume storage)
- **Firebase Cloud Functions** (serverless backend)
- **Google Gemini API** (primary AI engine)
- **Cloud SQL** (PostgreSQL managed database)

**Backend & Storage:**
- PostgreSQL with Row Level Security
- RESTful API architecture
- Cloud SQL (managed database)

**AI & Machine Learning:**
- Google Gemini 1.5 Pro (rejection analysis)
- Google Cloud Natural Language API
- Advanced resume parsing algorithms

**PDF Processing:**
- pdfjs-dist 5.4.449
- mammoth 1.11.0 (DOCX support)
- jsPDF (export functionality)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Google Cloud Platform account
- Firebase project setup
- Google Gemini API key

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd WhyNot1
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**

Create a `.env` file in the root directory:
# Google Cloud Platform
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_GEMINI_API_KEY=your_gemini_api_key

# Database & Storage
VITE_DATABASE_URL=your_database_url
VITE_CLOUD_SQL_CONNECTION=your_cloud_sql_connection
```

4. **Google Cloud Setup**

Initialize Firebase in your project:
```bash
firebase login
firebase init
```

5. **Database Setup**

Run the SQL migrations in order:
```bash
# In database console
src/lib/setup.sql
src/lib/storage_setup.sql
src/lib/add_application_url_column.sql
src/lib/add_application_snapshots.sql
```

6``bash
# In Supabase SQL Editor
src/lib/setup.sql
src/lib/storage_setup.sql
src/lib/add_application_url_column.sql
src/lib/add_application_snapshots.sql
```

5. **Start Development Server**
```bash
npm run dev
```

Visit `http://localhost:5173` to see the application.

## 📝 Usage

### For Students
1. **Sign up** and complete your profile with skills and confidence levels
2. **Browse opportunities** with smart filtering
3. **Apply** to positions (your profile is automatically snapshotted)
4. **Track applications** and interview schedules
5. **Analyze rejections** with AI-powered explanations
6. **Improve** based on actionable feedback

### For Placement Officers
1. **Post opportunities** with detailed requirements
2. **Review applications** in the management dashboard
3. **Schedule interviews** with automatic notifications
4. **Send bulk updates** for efficient workflow
5. **Track metrics** across all opportunities

## 🎯 Core Innovation: Application Snapshots

When a student applies, we freeze:
- CGPA
- Skills with confidence levels
- Resume URL
- Academic details (major, year, semester)

This ensures:
- ✅ Rejection analysis uses the exact profile at application time
- ✅ Profile updates don't change past explanations
- ✅ Trust and consistency in AI feedback

## 🧪 Testing

```bash
# Run all tests
npm test

# Run with UI
npm run test:ui

# Coverage report
npm run test:coverage

# Type checking
npm run type-check
```

## 📦 Build & Deploy

```bash
# Production build
npm run build

# Firebase Authentication with OAuth 2.0
- Google Cloud IAM policies
- Row Level Security (RLS) in database
- JWT-based token validation
- Environment vFirebase Hosting with automatic builds on push. Also supports Vercel deployment
- Input validation and sanitization
- XSS protection via React
- HTTPS-only communicationoyment with automatic builds on push.

## 🔐 Security Features

- Row Level Security (RLS) in Supabase
- JWT-based authentication
- Environment variable protection
- Input validation and sanitization
- XSS protection via React

## 📄 License

Private - All rights reserved.

## 👥 Team

Built for TechSprint AI Hackathon

---

**Note:** This platform prioritizes transparency and honesty in rejection feedback. All AI-generated explanations include trust disclaimers and distinguish between objective criteria violations and subjective screening decisions.
