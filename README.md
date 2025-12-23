<div align="center">
<img width="1200" height="475" alt="WhyNot Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

# WhyNot - Campus Internship & Placement Platform

[![React](https://img.shields.io/badge/React-19.2.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg)](https://vitejs.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E.svg)](https://supabase.com/)

**Turning silent rejections into actionable insights.**

A comprehensive campus-centric platform that streamlines internships, industrial training, and placements with AI-powered insights, multi-user authentication, and automated workflows.

</div>

---

## 🎯 Problem Statement

Every student of technical education must complete an internship or industrial-training module before graduation. Yet, within various colleges, the path from "looking for an internship" to "signing a placement offer" remains troublesome:

- **Scattered Communication**: Notices on WhatsApp groups, resumes via email, signatures requiring office visits
- **Manual Tracking**: Placement cells spending evenings stitching together spreadsheets
- **No Transparency**: Students miss deadlines, mentors lose track of applications
- **Silent Rejections**: No feedback on why candidates weren't selected

## 💡 Our Solution

WhyNot is an integrated, role-based software portal that:

✅ **Streamlines Applications**: One-click apply with a single digital profile  
✅ **AI-Powered Insights**: Get personalized explanations for rejections using Google Gemini 1.5 Pro  
✅ **Automated Workflows**: From application → mentor approval → interview → offer tracking  
✅ **Smart Matching**: Recommends opportunities based on skills, CGPA, and preferences  
✅ **Real-Time Analytics**: Live dashboards for placement officers to track unplaced students  
✅ **Certificate Automation**: Training supervisors log feedback, system generates certificates  

---

## 🚀 Features

### For Students
- 📋 **Digital Profile**: Maintain one comprehensive profile with resume, skills, and preferences
- 🎯 **Smart Recommendations**: AI matches you with best-fit opportunities
- 🔄 **One-Click Apply**: Apply to internships/placements with a single click
- 📊 **Application Tracking**: Monitor status from applied → interview → offer
- 🤖 **AI Rejection Analysis**: Understand why you weren't selected and how to improve
- 📈 **Career Readiness Index**: Track your employability in real-time

### For Placement Officers
- 📢 **Post Opportunities**: Verified internship and training postings
- 👥 **Student Management**: View all students, their skills, and placement status
- 📊 **Live Analytics**: Real-time dashboards showing unplaced students and interview schedules
- 🎯 **Bulk Operations**: Manage multiple applications efficiently

### For Faculty Mentors
- ✅ **Approval Workflow**: Review and approve student applications
- 👨‍🎓 **Mentee Tracking**: Monitor your assigned students' progress
- 📚 **Resources**: Provide career guidance materials

### For Employers
- 💼 **Post Jobs**: Create internship and placement opportunities
- 🔍 **Candidate Search**: Browse verified student profiles
- 📅 **Interview Scheduling**: Sync with academic calendars
- 📝 **Feedback System**: Provide structured feedback

### For Training Supervisors
- 👥 **Intern Management**: Track assigned interns
- 📝 **Feedback Logging**: Record performance and skills acquired
- 🏆 **Auto Certificates**: System generates completion certificates

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM v7
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: Lucide React

### Backend & Database
- **Backend as a Service**: Supabase
- **Authentication**: Supabase Auth (Email/Password)
- **Database**: PostgreSQL (via Supabase)
- **Row Level Security**: Enabled for all tables

### AI & APIs
- **AI Integration**: Google Gemini 1.5 Pro
- **API Client**: @google/genai

### Build Tools
- **Build Tool**: Vite 6
- **Package Manager**: npm

---

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Google Gemini API Key
- Supabase Account

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd WhyNot1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase Database**
   
   - Go to your Supabase Dashboard
   - Navigate to SQL Editor
   - Copy all content from `setup.sql` and run it
   - This will create all necessary tables and Row Level Security policies

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:3000`

7. **Create your first user**
   
   - Visit `/signup` to create an account
   - Select your role (Student, Placement Officer, etc.)
   - Start using the platform!

---

## 🏗️ Project Structure

```
WhyNot1/
├── components/          # Reusable React components
│   ├── Header.tsx       # Role-based navigation header
│   ├── Footer.tsx       # Application footer
│   ├── ProtectedRoute.tsx  # Route protection wrapper
│   ├── ExplanationModal.tsx  # AI explanation modal
│   └── ThreeScene.tsx   # 3D background scene
├── contexts/            # React Context providers
│   └── AuthContext.tsx  # Authentication state management
├── pages/               # Page components
│   ├── LandingPage.tsx  # Public landing page
│   ├── LoginPage.tsx    # User login
│   ├── SignupPage.tsx   # User registration
│   └── StudentDashboard.tsx  # Student dashboard
├── services/            # External service integrations
│   ├── geminiService.ts      # Google Gemini AI integration
│   └── supabaseClient.ts     # Supabase configuration
├── setup.sql            # Database schema setup
├── types.ts             # TypeScript type definitions
└── App.tsx              # Main application component
├── pages/               # Page components
│   ├── LandingPage.tsx  # Public landing page
│   └── StudentDashboard.tsx  # Student dashboard
├── services/            # API and service integrations
│   └── geminiService.ts # Google Gemini AI integration
├── types.ts             # TypeScript type definitions
├── mockProfiles.ts      # Mock data for development (DB integration pending)
├── App.tsx              # Main application component
├── index.tsx            # Application entry point
├── index.css            # Global styles with Tailwind
└── vite.config.ts       # Vite configuration
```

---

## 👥 User Roles & Authentication

The platform supports **5 distinct user roles** with complete authentication:

| Role | Access Path | Key Features |
|------|-------------|--------------|
| **Student** | `/dashboard` | Apply for opportunities, track applications, get AI insights on rejections |
| **Placement Officer** | `/placement/*` | Post opportunities, manage applications, view analytics dashboard |
| **Faculty Mentor** | `/mentor/*` | Approve student applications, monitor mentees progress |
| **Employer** | `/employer/*` | Post job openings, review candidates, schedule interviews |
| **Training Supervisor** | `/supervisor/*` | Manage interns, provide feedback, auto-generate certificates |

### Authentication Features

- ✅ **Email/Password Authentication** via Supabase Auth
- ✅ **Role-Based Access Control** with protected routes
- ✅ **Session Management** with persistent login
- ✅ **User Profile Management** in PostgreSQL database
- ✅ **Secure Logout** across all devices

### Getting Started

1. **Sign Up**: Visit `/signup` and select your role
2. **Login**: Use `/login` with your credentials
3. **Dashboard**: Automatically redirected based on your role

---

## 🔒 Security & Privacy

- ✅ **Row Level Security (RLS)**: Database policies ensure users only access their own data
- ✅ **Protected Routes**: Automatic redirect to login for unauthorized access
- ✅ **Role-Based Permissions**: Fine-grained access control per user type
- ✅ **Data Privacy Compliant**: GDPR-ready with strict data handling
- ✅ **Secure Authentication**: Supabase Auth with JWT tokens
- ✅ **Environment Variables**: All sensitive keys stored securely

---

## 🗄️ Database Schema

The application uses **PostgreSQL** via Supabase with the following tables:

- **profiles** - Core user information for all user types
- **student_profiles** - Extended student data (CGPA, skills, resume)
- **opportunities** - Job/internship postings
- **applications** - Student applications with status tracking
- **feedback** - Supervisor feedback and ratings
- **notifications** - User notification system

All tables have **Row Level Security** enabled with role-based policies.

Run `setup.sql` in Supabase SQL Editor to initialize the database.

---

## � Current Status

### ✅ Completed
- Multi-user authentication system (5 roles)
- Role-based routing and protected routes
- Supabase integration with PostgreSQL
- Database schema with RLS policies
- Login and Signup pages
- Landing page with 3D animations
- AI-powered rejection insights (Gemini)
- Responsive UI with Tailwind CSS v4

### 🔄 In Progress
- Role-specific dashboards
- Opportunity posting and browsing
- Application workflow system
- Real-time notifications
- Profile management pages

### 📋 Planned
- AI-powered opportunity matching
- Interview scheduling system
- Certificate generation
- Analytics dashboard
- Mobile app version

---

## 📝 Available Scripts

- `npm run dev` - Start development server (default: http://localhost:3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">
Made with ❤️ for students everywhere
</div>

---

## 🙏 Acknowledgments

- Google Gemini AI for powering intelligent rejection analysis
- React Three Fiber community for amazing 3D capabilities
- Tailwind CSS for rapid UI development

---

<div align="center">
Made with ❤️ for students everywhere
</div>
