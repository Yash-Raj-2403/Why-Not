# Things Left to Do - WhyNot Platform

**Last Updated:** December 25, 2025  
**Current Phase:** Phase 5 Complete (Streamlined Application Flow)

---

## 🎯 Completed Features (Phase 1-5)

### ✅ Phase 1: Cleanup & Removal
- [x] Removed chat system (rooms, participants, messages)
- [x] Removed MENTOR, EMPLOYER, ADMIN roles
- [x] Simplified to 2 user roles: STUDENT, PLACEMENT_OFFICER
- [x] Removed mentor approval workflow from applications
- [x] Cleaned up unused pages and components

### ✅ Phase 2: AI Rejection Coach Enhancement
- [x] Single rejection analysis
- [x] Bulk rejection analysis (patterns across multiple rejections)
- [x] AI-powered insights using Google Gemini 2.0 Flash
- [x] Skill gap identification
- [x] Improvement suggestions with action items

### ✅ Phase 3: Calendar System
- [x] Calendar events table (DEADLINE, INTERVIEW, DRIVE, ANNOUNCEMENT)
- [x] Event reminders table
- [x] RLS policies for student/officer access
- [x] Calendar UI integrated in student dashboard

### ✅ Phase 4: Resume Analyzer
- [x] Resume analysis table
- [x] AI-powered resume scoring
- [x] ATS compatibility check
- [x] Improvement suggestions
- [x] Resume Analyzer UI component

### ✅ Phase 5: Streamlined Application Flow
- [x] Simplified ApplicationStatus enum (5 statuses: PENDING, SHORTLISTED, INTERVIEW_SCHEDULED, ACCEPTED, REJECTED)
- [x] Removed mentor approval concept
- [x] Direct student → placement officer workflow
- [x] AI rejection prompt on ApplicationsPage (purple card with Brain icon)
- [x] Status timeline displays (interview schedules, acceptances)
- [x] Updated all pages: ApplicationsPage, PlacementDashboard, ApplicationsManagementPage, StudentDashboard
- [x] Gradient styling and glass morphism across all pages
- [x] Animated background orbs on landing/auth/dashboard pages

---

## 🚧 Incomplete/In Progress Features

### 1. Mobile Responsive Design (80% Complete)
**Priority:** High  
**Status:** In Progress

**What's Done:**
- Desktop layouts work perfectly
- Tailwind responsive utilities used throughout
- Header/footer responsive

**What's Needed:**
- [ ] Test all pages on mobile devices (320px - 768px)
- [ ] Fix bento grid layouts for mobile (currently 12-column desktop layout)
- [ ] Optimize dashboard cards for vertical stacking on mobile
- [ ] Test forms and modals on small screens
- [ ] Ensure touch targets are at least 44x44px
- [ ] Test profile page edit mode on mobile
- [ ] Optimize animated orbs performance on mobile devices

**Files to Review:**
- `pages/StudentDashboard.tsx` - Bento grid needs mobile breakpoints
- `pages/ProfilePage.tsx` - Complex grid layout needs mobile optimization
- `pages/SettingsPage.tsx` - Multiple cards need stacking on mobile
- `pages/ApplicationsPage.tsx` - Card layouts
- All modal components (ApplyModal, ScheduleInterviewModal, etc.)

---

### 2. Calendar Feature (Backend Complete, Frontend Partial)
**Priority:** High  
**Status:** 70% Complete

**What's Done:**
- [x] Database tables (`calendar_events`, `event_reminders`)
- [x] RLS policies for student/officer access
- [x] Basic calendar UI stub in StudentDashboard

**What's Needed:**
- [ ] **Full Calendar Page** (`pages/CalendarPage.tsx`)
  - Month/week/day views
  - Event creation modal (placement officers only)
  - Event editing and deletion
  - Color coding by event type (DEADLINE, INTERVIEW, DRIVE, ANNOUNCEMENT)
- [ ] **Calendar Integration**
  - Link opportunity deadlines to calendar automatically
  - Link interview schedules to calendar automatically
  - Show upcoming events in dashboard
- [ ] **Reminders System**
  - Allow students to set custom reminders for events
  - Email/notification reminders 24h/1h before events
  - Reminder notification service
- [ ] **Event Filtering**
  - Filter by event type
  - Search events
  - Export calendar to .ics format

**Implementation Plan:**
```typescript
// pages/CalendarPage.tsx
- Use react-big-calendar or @fullcalendar libraries
- Integrate with calendar_events table
- CRUD operations for placement officers
- Read-only view for students with reminder options
```

---

### 3. Resume Analyzer Feature (Backend Complete, Frontend Missing)
**Priority:** High  
**Status:** 60% Complete

**What's Done:**
- [x] Database table (`resume_analyses`)
- [x] RLS policies
- [x] Basic component created

**What's Needed:**
- [ ] **Resume Analyzer Page** (`pages/ResumeAnalyzerPage.tsx`)
  - Upload resume (or use existing from profile)
  - AI analysis using Google Gemini
  - Display overall score (0-100)
  - Display ATS score (0-100)
  - Show detailed breakdown:
    * Contact info check
    * Skills section analysis
    * Experience section analysis
    * Education section analysis
    * Formatting quality
    * Keyword optimization
  - List of actionable suggestions
  - Save analysis history
- [ ] **Integration with Student Dashboard**
  - "Analyze Resume" button linking to analyzer page
  - Show last analysis score in dashboard
  - "Reanalyze" option if resume updated
- [ ] **PDF Text Extraction**
  - Use library like `pdf-parse` or external API
  - Extract text content from uploaded PDF
  - Send to Gemini API for analysis

**Implementation Plan:**
```typescript
// services/resumeAnalyzerService.ts
export async function analyzeResume(resumeUrl: string, userId: string) {
  // 1. Download PDF from Supabase Storage
  // 2. Extract text using pdf-parse
  // 3. Send to Gemini API with analysis prompt
  // 4. Parse response (score, breakdown, suggestions)
  // 5. Save to resume_analyses table
  // 6. Return formatted results
}
```

---

### 4. Interview Scheduling Modal Enhancement
**Priority:** Medium  
**Status:** 50% Complete

**What's Done:**
- [x] ScheduleInterviewModal component exists
- [x] Basic date/time input
- [x] Online/offline mode selection

**What's Needed:**
- [ ] **Better Date/Time Picker**
  - Use `react-datepicker` or similar library
  - Show available time slots
  - Timezone handling
- [ ] **Calendar Integration**
  - Automatically create calendar event when interview scheduled
  - Send calendar invite (.ics file) to student email
- [ ] **Interview Details**
  - Add interviewer name field
  - Add interview format (technical/HR/case study)
  - Add duration field (30min/45min/1hr)
  - Add preparation materials field
- [ ] **Automatic Notifications**
  - Email to student with interview details
  - Reminder 24h before interview
  - Reminder 1h before interview

---

### 5. Profile Completion Tracking
**Priority:** Medium  
**Status:** 30% Complete

**What's Done:**
- [x] Basic profile completion bar in ProfilePage
- [x] Static calculation

**What's Needed:**
- [ ] **Dynamic Calculation**
  - Check all required fields (name, email, department, major, year, CGPA)
  - Check optional fields (phone, skills, preferences, resume)
  - Calculate percentage based on filled fields
- [ ] **Actionable Prompts**
  - Show "Complete your profile" banner if < 80%
  - Highlight missing sections
  - Link to specific sections needing completion
- [ ] **Profile Quality Score**
  - Basic info: 20%
  - Academic info: 20%
  - Skills (min 3): 20%
  - Resume uploaded: 20%
  - Preferences set: 10%
  - Profile picture: 10%

---

### 6. Search and Filtering Improvements
**Priority:** Medium  
**Status:** Varies by page

**Opportunities Page:**
- [x] Debounced search (300ms)
- [x] Filter by type (INTERNSHIP/PLACEMENT)
- [ ] Filter by location (multi-select)
- [ ] Filter by CGPA requirement
- [ ] Filter by stipend range
- [ ] Filter by skills (match %)
- [ ] Sort by: deadline, stipend, match score, date posted

**Applications Page:**
- [x] Basic status filter
- [ ] Filter by date range
- [ ] Filter by company
- [ ] Sort by: date applied, status, company

**ApplicationsManagement (Placement Officer):**
- [x] Search by student name
- [x] Filter by status
- [ ] Filter by opportunity
- [ ] Filter by CGPA
- [ ] Filter by date applied
- [ ] Bulk operations (approve/reject multiple)

---

### 7. Notification System Enhancement
**Priority:** Medium  
**Status:** 70% Complete

**What's Done:**
- [x] Database table and RLS policies
- [x] Basic notification sending (application status changes)
- [x] NotificationBell component
- [x] Mark as read functionality

**What's Needed:**
- [ ] **Email Notifications**
  - Use Supabase Auth email templates or SendGrid
  - Application status changes
  - Interview scheduled
  - New opportunities matching preferences
  - Deadline reminders
- [ ] **Notification Preferences**
  - Allow users to configure notification types
  - Email vs in-app notifications
  - Frequency settings (instant/daily digest/weekly)
- [ ] **Rich Notifications**
  - Include action buttons ("View Application", "Respond")
  - Include relevant details in notification body
  - Group similar notifications
- [ ] **Push Notifications** (Future)
  - Web push API for browser notifications
  - Service worker setup

---

### 8. Analytics Dashboard Enhancements
**Priority:** Low  
**Status:** 60% Complete

**What's Done:**
- [x] Basic stats (total applications, students, placements)
- [x] CSV export functionality
- [x] Department-wise breakdown

**What's Needed:**
- [ ] **Charts and Visualizations**
  - Application trends over time (line chart)
  - Status distribution (pie chart)
  - Department-wise placement rate (bar chart)
  - Skills demand analysis (horizontal bar chart)
  - CGPA vs placement correlation (scatter plot)
- [ ] **Filters and Date Ranges**
  - Filter by date range (last 7 days, 30 days, 3 months, year)
  - Filter by department
  - Filter by opportunity type
- [ ] **Student-Side Analytics**
  - Personal application success rate
  - Skills gap analysis
  - Comparison with peers (anonymized)
  - Application response time statistics

**Recommended Library:** `recharts` or `chart.js`

---

### 9. Settings Page Enhancements
**Priority:** Low  
**Status:** 40% Complete

**What's Done:**
- [x] Settings page exists with bento grid layout
- [x] Developer tools (seed opportunities)
- [x] System info display

**What's Needed:**
- [ ] **Appearance Settings**
  - Dark mode toggle (currently UI only, not functional)
  - Theme color customization (purple/blue/green variants)
  - Font size preferences
- [ ] **Privacy Settings**
  - Profile visibility (public/placement officer only)
  - Show/hide CGPA from profile
  - Resume download permissions
- [ ] **Account Management**
  - Change password
  - Update email address
  - Delete account (with confirmation)
  - Export all personal data (GDPR compliance)
- [ ] **Notification Preferences**
  - Toggle notification types
  - Email frequency settings

---

### 10. Error Handling and User Feedback
**Priority:** Medium  
**Status:** 50% Complete

**What's Done:**
- [x] ErrorBoundary component
- [x] Toast notifications (success/error/info)
- [x] Loading skeletons

**What's Needed:**
- [ ] **Better Error Messages**
  - User-friendly error messages (not technical)
  - Actionable suggestions ("Try refreshing" or "Contact support")
  - Error codes for debugging
- [ ] **Offline Support**
  - Detect offline status
  - Show offline banner
  - Queue actions for when online (service worker)
- [ ] **Form Validation**
  - Real-time validation on all forms
  - Clear error indicators
  - Field-level error messages
- [ ] **Loading States**
  - Add loading spinners to all async operations
  - Disable buttons during submission
  - Optimistic UI updates where appropriate

---

### 11. Security Improvements
**Priority:** High  
**Status:** 70% Complete

**What's Done:**
- [x] JWT authentication via Supabase Auth
- [x] Row Level Security (RLS) policies
- [x] Protected routes
- [x] File type/size validation on resume upload

**What's Needed:**
- [ ] **Rate Limiting**
  - Implement rate limiting on AI API calls (currently 3/min, needs enforcement)
  - Rate limit login attempts
  - Rate limit application submissions
- [ ] **Input Sanitization**
  - Sanitize all user inputs (cover letters, feedback, etc.)
  - Prevent XSS attacks
  - Validate CGPA ranges (0-10)
- [ ] **Audit Logging**
  - Log all application status changes
  - Log sensitive actions (profile edits, account changes)
  - Admin audit trail
- [ ] **HTTPS Enforcement**
  - Redirect HTTP to HTTPS in production
  - Secure cookie flags
  - HSTS headers

---

### 12. Performance Optimizations (Future)
**Priority:** Low  
**Status:** 80% Complete

**What's Done:**
- [x] Code splitting (Three.js lazy loaded)
- [x] Search debouncing (300ms)
- [x] Vendor chunking in Vite config
- [x] Loading skeletons

**What's Needed:**
- [ ] **Image Optimization**
  - Use WebP format for images
  - Lazy loading for images
  - Responsive images with srcset
- [ ] **Database Optimization**
  - Add indexes on frequently queried columns
  - Optimize complex queries (joins)
  - Pagination for large datasets
- [ ] **Caching Strategy**
  - Cache static opportunities data
  - Cache user profiles
  - Implement stale-while-revalidate pattern
- [ ] **Bundle Size Reduction**
  - Remove unused dependencies
  - Tree shaking optimization
  - Consider replacing heavy libraries

---

### 13. Testing (Not Started)
**Priority:** High (for production)  
**Status:** 0% Complete

**What's Needed:**
- [ ] **Unit Tests**
  - Test utility functions
  - Test custom hooks (useDebounce, useAuth)
  - Test service functions (api.ts, geminiService.ts)
- [ ] **Integration Tests**
  - Test API integration with Supabase
  - Test authentication flow
  - Test application submission flow
- [ ] **End-to-End Tests**
  - Test complete user journeys (signup → apply → track)
  - Test placement officer workflows
  - Test AI rejection analysis flow
- [ ] **Test Coverage**
  - Aim for 80%+ coverage
  - CI/CD integration (run tests on PR)

**Recommended Tools:**
- Unit/Integration: Vitest + React Testing Library
- E2E: Playwright or Cypress

---

### 14. Documentation
**Priority:** Medium  
**Status:** 70% Complete

**What's Done:**
- [x] README.md with setup instructions
- [x] DEPLOYMENT.md for deployment guides
- [x] PHASE5_SUMMARY.md for recent changes
- [x] Inline code comments in complex sections

**What's Needed:**
- [ ] **API Documentation**
  - Document all service functions
  - Document Supabase queries
  - Document type definitions
- [ ] **Component Documentation**
  - Props documentation for all components
  - Usage examples
  - Storybook setup (optional)
- [ ] **User Guide**
  - Student user guide (how to apply, track, use AI coach)
  - Placement officer guide (how to post, manage, schedule)
  - FAQ section
- [ ] **Developer Guide**
  - Architecture overview
  - Database schema diagram
  - State management explanation
  - Deployment checklist

---

## 🚀 Future Feature Ideas (Not Prioritized)

### 1. Video Interview Integration
- Integrate with Zoom/Google Meet/Microsoft Teams API
- One-click video interview scheduling
- Record interview (with consent) for review

### 2. Skill Assessment Tests
- Online coding tests (integrate with HackerRank/LeetCode API)
- MCQ tests for non-technical roles
- Automated scoring and feedback

### 3. Placement Prediction ML Model
- Predict placement chances based on profile
- Suggest skills to improve placement odds
- Historical data analysis

### 4. Company Reviews and Ratings
- Students rate interview experience
- Anonymous company reviews
- Placement process transparency

### 5. Peer Mentorship Platform
- Connect students with alumni
- Messaging system for mentorship
- Success story sharing

### 6. Resume Builder
- In-app resume builder with templates
- ATS-optimized templates
- Export as PDF

### 7. Mobile App (React Native)
- Native mobile experience
- Push notifications
- Faster performance

### 8. Advanced AI Features
- Interview preparation chatbot
- Mock interview with AI
- Cover letter generation AI
- Profile optimization suggestions

---

## 📋 Database Migration Needed

**IMPORTANT:** Before deploying Phase 5 changes, existing data needs migration:

```sql
-- Migrate existing application statuses
UPDATE public.applications 
SET status = 'PENDING' 
WHERE status = 'APPLIED';

UPDATE public.applications 
SET status = 'ACCEPTED' 
WHERE status = 'OFFERED';

-- If there are any 'COMPLETED' status (unlikely), convert to ACCEPTED
UPDATE public.applications 
SET status = 'ACCEPTED' 
WHERE status = 'COMPLETED';

-- Verify no invalid statuses remain
SELECT DISTINCT status FROM public.applications;
-- Should only return: PENDING, SHORTLISTED, INTERVIEW_SCHEDULED, ACCEPTED, REJECTED
```

---

## 🐛 Known Issues

### 1. Profile Image Upload
- **Issue:** Profile picture upload not implemented
- **Current State:** Avatar field exists in DB but no UI to upload
- **Impact:** Low (not critical for MVP)
- **Fix:** Add image upload component similar to ResumeUpload

### 2. Interview Date Storage
- **Issue:** interview_date field exists but not fully utilized
- **Current State:** ScheduleInterviewModal updates the field, but no time field
- **Impact:** Medium (interviews can be scheduled but time is unclear)
- **Fix:** Add interview_time field to applications table

### 3. Dark Mode Toggle
- **Issue:** Dark mode toggle exists in SettingsPage but doesn't work
- **Current State:** UI exists, no functionality
- **Impact:** Low (app already uses dark theme everywhere)
- **Fix:** Implement theme context and localStorage persistence

### 4. Notification Bell Count
- **Issue:** Notification count shows "2+" hardcoded in some places
- **Current State:** Uses real count from database, but some static text remains
- **Impact:** Low (mostly cosmetic)
- **Fix:** Search for hardcoded notification counts and replace with dynamic values

### 5. Mobile Menu
- **Issue:** Header menu doesn't collapse properly on mobile
- **Current State:** All links visible on mobile, may overflow
- **Impact:** Medium (affects mobile UX)
- **Fix:** Add hamburger menu for mobile screens

---

## ✅ Recommended Priority Order

Based on user impact and technical dependencies:

**Immediate (This Week):**
1. Mobile responsive fixes (high user impact)
2. Interview scheduling enhancement (core feature)
3. Database migration for Phase 5 (required)

**Short Term (Next 2 Weeks):**
4. Calendar page implementation (backend ready)
5. Resume analyzer page (backend ready)
6. Profile completion tracking

**Medium Term (Next Month):**
7. Search and filtering improvements
8. Email notifications
9. Analytics dashboard enhancements
10. Error handling improvements

**Long Term (Next Quarter):**
11. Testing suite
12. Security enhancements
13. Performance optimizations
14. Documentation completion

**Future Considerations:**
- Video interviews
- Skill assessments
- ML predictions
- Mobile app

---

## 📊 Technical Debt

### Code Organization
- [ ] Move all types from types.ts to separate files (types/user.ts, types/application.ts, etc.)
- [ ] Create constants file for magic numbers and strings
- [ ] Standardize error handling across all services
- [ ] Create reusable form components

### Component Refactoring
- [ ] Break down large components (StudentDashboard is 600+ lines)
- [ ] Extract repeated logic into custom hooks
- [ ] Standardize prop naming conventions
- [ ] Add PropTypes or improve TypeScript interfaces

### CSS Cleanup
- [ ] Remove unused Tailwind classes
- [ ] Create design tokens (colors, spacing, shadows)
- [ ] Standardize glass morphism styling
- [ ] Remove inline styles

### Database
- [ ] Add missing indexes for performance
- [ ] Review and optimize RLS policies
- [ ] Add database constraints (CHECK, FOREIGN KEY cascades)
- [ ] Document all tables and columns

---

## 💡 Notes for Future Development

1. **Calendar Implementation:** Consider using `react-big-calendar` or `@fullcalendar/react` for calendar UI. Both have good documentation and TypeScript support.

2. **Resume Parsing:** For PDF text extraction, `pdf-parse` works well for simple PDFs. For complex layouts, consider external services like AWS Textract or Azure Form Recognizer.

3. **Email Notifications:** Supabase doesn't have built-in email sending beyond auth emails. Consider integrating SendGrid, Mailgun, or Resend for transactional emails.

4. **Testing Strategy:** Start with critical paths (auth, application submission, status updates) before expanding to full coverage.

5. **Mobile Optimization:** Test on real devices, not just browser dev tools. Performance on actual mobile devices can differ significantly.

6. **AI Rate Limiting:** Current Gemini API has generous free tier, but implement proper rate limiting before going to production to avoid abuse.

7. **Scalability:** Current architecture works for up to ~10,000 students. Beyond that, consider:
   - Database connection pooling
   - CDN for static assets
   - Serverless functions for AI calls
   - Caching layer (Redis)

---

**Last Reviewed:** December 25, 2025  
**Maintained By:** Development Team  
**Next Review:** After completing Calendar & Resume Analyzer features
