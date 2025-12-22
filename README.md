<div align="center">
<img width="1200" height="475" alt="WhyNot Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

# WhyNot - Campus Internship & Placement Platform

[![React](https://img.shields.io/badge/React-19.2.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg)](https://vitejs.dev/)

**Turning silent rejections into actionable insights.**

A comprehensive campus-centric platform that streamlines internships, industrial training, and placements with AI-powered insights and automated workflows.

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

- **Frontend**: React 19, TypeScript, Tailwind CSS v4
- **Routing**: React Router DOM v7
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **AI Integration**: Google Gemini 1.5 Pro
- **Build Tool**: Vite 6
- **Icons**: Lucide React

---

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Google Gemini API Key

### Setup

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
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000`

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

## 👥 User Roles

The platform supports 5 distinct user roles:

1. **Student** - Apply, track applications, get AI insights
2. **Placement Officer** - Post opportunities, manage students, view analytics
3. **Faculty Mentor** - Approve applications, guide mentees
4. **Employer** - Post jobs, review candidates, schedule interviews
5. **Training Supervisor** - Manage interns, provide feedback, generate certificates

### Testing Different Roles

To test different user roles during development, modify `App.tsx`:

```typescript
const [currentUser, setCurrentUser] = useState({
  role: UserRole.STUDENT,  // Change this to test different roles
  name: 'Priya Sharma',
  avatar: 'https://i.pravatar.cc/150?img=5',
  notifications: 3
});
```

Available roles: `STUDENT`, `PLACEMENT_OFFICER`, `FACULTY_MENTOR`, `EMPLOYER`, `TRAINING_SUPERVISOR`

---

## 🔒 Security & Privacy

- ✅ **Role-Based Access Control**: Users only see data relevant to their role
- ✅ **Data Privacy Compliant**: GDPR-ready with strict data handling
- ✅ **Secure Authentication**: Protected routes with automatic redirects
- ✅ **Environment Variables**: Sensitive keys stored in `.env` (gitignored)

---

## 🗄️ Database Integration

**Note**: Database credentials will be integrated soon. Current version uses mock data for development and testing.

---

## 📝 Available Scripts

- `npm run dev` - Start development server
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

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- Google Gemini AI for powering intelligent rejection analysis
- React Three Fiber community for amazing 3D capabilities
- Tailwind CSS for rapid UI development

---

<div align="center">
Made with ❤️ for students everywhere
</div>
