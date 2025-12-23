import React, { useState } from 'react';
import { Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StudentDashboard from './pages/StudentDashboard';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import { AnimatePresence } from 'framer-motion';
import { UserRole } from './types';
import { useAuth } from './contexts/AuthContext';

const App: React.FC = () => {
  const location = useLocation();
  const { user, loading } = useAuth();
  
  // Determine if we show the sidebar (only on dashboard)
  const isDashboard = location.pathname.includes('/dashboard');
  
  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-blue"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col text-slate-100 font-sans selection:bg-neon-purple selection:text-white">
      {/* Dynamic Background for Dashboard pages, Landing handles its own bg */}
      {isDashboard && (
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black -z-50" />
      )}
      
      {/* Header Navigation */}
      <Header 
        userRole={user?.role}
        userName={user?.name}
        userAvatar={user?.avatar}
        notifications={user?.notifications}
      />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute userRole={user?.role} requiredRole={UserRole.STUDENT}>
                <StudentDashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/opportunities" 
            element={
              <ProtectedRoute userRole={user?.role} requiredRole={UserRole.STUDENT}>
                <div className="pt-24 px-6">Opportunities Page (Protected)</div>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/applications" 
            element={
              <ProtectedRoute userRole={user?.role} requiredRole={UserRole.STUDENT}>
                <div className="pt-24 px-6">Applications Page (Protected)</div>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute userRole={user?.role}>
                <div className="pt-24 px-6">Profile Page (Protected)</div>
              </ProtectedRoute>
            } 
          />
          
          {/* Placement Officer Routes */}
          <Route 
            path="/placement/*" 
            element={
              <ProtectedRoute userRole={user?.role} requiredRole={UserRole.PLACEMENT_OFFICER}>
                <div className="pt-24 px-6">Placement Officer Dashboard (Protected)</div>
              </ProtectedRoute>
            } 
          />
          
          {/* Faculty Mentor Routes */}
          <Route 
            path="/mentor/*" 
            element={
              <ProtectedRoute userRole={user?.role} requiredRole={UserRole.FACULTY_MENTOR}>
                <div className="pt-24 px-6">Faculty Mentor Dashboard (Protected)</div>
              </ProtectedRoute>
            } 
          />
          
          {/* Employer Routes */}
          <Route 
            path="/employer/*" 
            element={
              <ProtectedRoute userRole={user?.role} requiredRole={UserRole.EMPLOYER}>
                <div className="pt-24 px-6">Employer Dashboard (Protected)</div>
              </ProtectedRoute>
            } 
          />
          
          {/* Training Supervisor Routes */}
          <Route 
            path="/supervisor/*" 
            element={
              <ProtectedRoute userRole={user?.role} requiredRole={UserRole.TRAINING_SUPERVISOR}>
                <div className="pt-24 px-6">Training Supervisor Dashboard (Protected)</div>
              </ProtectedRoute>
            } 
          />
          
          {/* Settings Route - accessible to all authenticated users */}
          <Route 
            path="/settings" 
            element={
              <ProtectedRoute userRole={user?.role}>
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