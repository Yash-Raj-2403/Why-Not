import React, { useState } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StudentDashboard from './pages/StudentDashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import { AnimatePresence } from 'framer-motion';
import { UserRole } from './types';

const App: React.FC = () => {
  const location = useLocation();
  
  // Mock user state - in production, this would come from authentication context
  // Set role to undefined to test unauthenticated access
  const [currentUser, setCurrentUser] = useState<{
    role?: UserRole;
    name?: string;
    avatar?: string;
    notifications?: number;
  }>({
    // Change this to test different user roles
    // Set to undefined for testing unauthenticated state
    role: undefined, // UserRole.STUDENT
    name: undefined, // 'Priya Sharma'
    avatar: undefined, // 'https://i.pravatar.cc/150?img=5'
    notifications: undefined // 3
  });

  // Determine if we show the sidebar (only on dashboard)
  const isDashboard = location.pathname.includes('/dashboard');

  return (
    <div className="min-h-screen flex flex-col text-slate-100 font-sans selection:bg-neon-purple selection:text-white">
      {/* Dynamic Background for Dashboard pages, Landing handles its own bg */}
      {isDashboard && (
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black -z-50" />
      )}
      
      {/* Header Navigation */}
      <Header 
        userRole={currentUser.role}
        userName={currentUser.name}
        userAvatar={currentUser.avatar}
        notifications={currentUser.notifications}
      />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute userRole={currentUser.role} requiredRole={UserRole.STUDENT}>
                <StudentDashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/opportunities" 
            element={
              <ProtectedRoute userRole={currentUser.role} requiredRole={UserRole.STUDENT}>
                <div className="pt-24 px-6">Opportunities Page (Protected)</div>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/applications" 
            element={
              <ProtectedRoute userRole={currentUser.role} requiredRole={UserRole.STUDENT}>
                <div className="pt-24 px-6">Applications Page (Protected)</div>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute userRole={currentUser.role}>
                <div className="pt-24 px-6">Profile Page (Protected)</div>
              </ProtectedRoute>
            } 
          />
          
          {/* Placement Officer Routes */}
          <Route 
            path="/placement/*" 
            element={
              <ProtectedRoute userRole={currentUser.role} requiredRole={UserRole.PLACEMENT_OFFICER}>
                <div className="pt-24 px-6">Placement Officer Dashboard (Protected)</div>
              </ProtectedRoute>
            } 
          />
          
          {/* Faculty Mentor Routes */}
          <Route 
            path="/mentor/*" 
            element={
              <ProtectedRoute userRole={currentUser.role} requiredRole={UserRole.FACULTY_MENTOR}>
                <div className="pt-24 px-6">Faculty Mentor Dashboard (Protected)</div>
              </ProtectedRoute>
            } 
          />
          
          {/* Employer Routes */}
          <Route 
            path="/employer/*" 
            element={
              <ProtectedRoute userRole={currentUser.role} requiredRole={UserRole.EMPLOYER}>
                <div className="pt-24 px-6">Employer Dashboard (Protected)</div>
              </ProtectedRoute>
            } 
          />
          
          {/* Training Supervisor Routes */}
          <Route 
            path="/supervisor/*" 
            element={
              <ProtectedRoute userRole={currentUser.role} requiredRole={UserRole.TRAINING_SUPERVISOR}>
                <div className="pt-24 px-6">Training Supervisor Dashboard (Protected)</div>
              </ProtectedRoute>
            } 
          />
          
          {/* Settings Route - accessible to all authenticated users */}
          <Route 
            path="/settings" 
            element={
              <ProtectedRoute userRole={currentUser.role}>
                <div className="pt-24 px-6">Settings Page (Protected)</div>
              </ProtectedRoute>
            } 
          />
          
          {/* Catch all - redirect to landing page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;