import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Briefcase, Users, FileText, Settings, LogOut, Bell, Calendar, BarChart3, UserCheck, BookOpen } from 'lucide-react';
import { UserRole } from '../types';

interface HeaderProps {
  userRole?: UserRole;
  userName?: string;
  userAvatar?: string;
  notifications?: number;
}

const Header: React.FC<HeaderProps> = ({ 
  userRole, 
  userName = 'Guest',
  userAvatar,
  notifications = 0
}) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const isLoggedIn = !!userRole;

  // Get navigation items based on user role
  const getNavigationItems = () => {
    switch (userRole) {
      case UserRole.STUDENT:
        return [
          { label: 'Dashboard', path: '/dashboard', icon: Home },
          { label: 'Opportunities', path: '/opportunities', icon: Briefcase },
          { label: 'My Applications', path: '/applications', icon: FileText },
          { label: 'Profile', path: '/profile', icon: Users },
        ];
      
      case UserRole.PLACEMENT_OFFICER:
        return [
          { label: 'Dashboard', path: '/placement/dashboard', icon: Home },
          { label: 'Post Opportunity', path: '/placement/post', icon: Briefcase },
          { label: 'Applications', path: '/placement/applications', icon: FileText },
          { label: 'Analytics', path: '/placement/analytics', icon: BarChart3 },
          { label: 'Students', path: '/placement/students', icon: Users },
        ];
      
      case UserRole.FACULTY_MENTOR:
        return [
          { label: 'Dashboard', path: '/mentor/dashboard', icon: Home },
          { label: 'My Mentees', path: '/mentor/mentees', icon: Users },
          { label: 'Approvals', path: '/mentor/approvals', icon: UserCheck },
          { label: 'Resources', path: '/mentor/resources', icon: BookOpen },
        ];
      
      case UserRole.EMPLOYER:
        return [
          { label: 'Dashboard', path: '/employer/dashboard', icon: Home },
          { label: 'Post Job', path: '/employer/post', icon: Briefcase },
          { label: 'Candidates', path: '/employer/candidates', icon: Users },
          { label: 'Interviews', path: '/employer/interviews', icon: Calendar },
        ];
      
      case UserRole.TRAINING_SUPERVISOR:
        return [
          { label: 'Dashboard', path: '/supervisor/dashboard', icon: Home },
          { label: 'My Interns', path: '/supervisor/interns', icon: Users },
          { label: 'Feedback', path: '/supervisor/feedback', icon: FileText },
          { label: 'Certificates', path: '/supervisor/certificates', icon: UserCheck },
        ];
      
      default:
        return [];
    }
  };

  const navItems = getNavigationItems();
  const initials = userName.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isLoggedIn ? 'bg-black/50 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple p-[2px]">
              <div className="w-full h-full rounded-lg bg-black flex items-center justify-center">
                <span className="text-sm font-bold gradient-text">W</span>
              </div>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
              WhyNot
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {!isLoggedIn ? (
              <>
                <Link to="/#features" className="text-sm text-slate-300 hover:text-white transition-colors">
                  Features
                </Link>
                <Link to="/#how-it-works" className="text-sm text-slate-300 hover:text-white transition-colors">
                  How It Works
                </Link>
                <Link to="/#about" className="text-sm text-slate-300 hover:text-white transition-colors">
                  About
                </Link>
                <Link 
                  to="/login" 
                  className="px-6 py-2.5 rounded-full border border-white/20 text-sm font-semibold tracking-wide hover:bg-white/10 transition-all"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-sm font-semibold tracking-wide hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                {navItems.slice(0, 4).map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 text-sm transition-colors ${
                      location.pathname === item.path 
                        ? 'text-neon-blue' 
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <item.icon size={16} />
                    {item.label}
                  </Link>
                ))}
                
                {/* Notifications */}
                <button className="relative p-2 text-slate-300 hover:text-white transition-colors">
                  <Bell size={20} />
                  {notifications > 0 && (
                    <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </button>

                {/* User Profile Dropdown */}
                <div className="relative group">
                  <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all">
                    {userAvatar ? (
                      <img src={userAvatar} alt={userName} className="w-10 h-10 rounded-full object-cover" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-neon-blue to-neon-purple p-[2px] cursor-pointer hover:scale-105 transition-transform">
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-sm font-bold">
                          {initials}
                        </div>
                      </div>
                    )}
                    <div className="text-left hidden lg:block">
                      <p className="text-sm font-medium text-white">{userName}</p>
                      <p className="text-xs text-slate-400">{userRole?.replace('_', ' ')}</p>
                    </div>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-56 bg-black/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link to="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                        <Users size={16} />
                        My Profile
                      </Link>
                      <Link to="/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                        <Settings size={16} />
                        Settings
                      </Link>
                      <hr className="my-2 border-white/10" />
                      <button className="flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors w-full">
                        <LogOut size={16} />
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-neon-blue transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/5">
          <div className="px-6 py-4 space-y-2">
            {!isLoggedIn ? (
              <>
                <Link 
                  to="/#features" 
                  className="block text-sm text-slate-300 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  to="/#how-it-works" 
                  className="block text-sm text-slate-300 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link 
                  to="/#about" 
                  className="block text-sm text-slate-300 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/login" 
                  className="block w-full px-6 py-2.5 text-center rounded-full border border-white/20 text-sm font-semibold tracking-wide mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="block w-full px-6 py-2.5 text-center rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-sm font-semibold tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                {/* User Info */}
                <div className="flex items-center gap-3 py-3 border-b border-white/10">
                  {userAvatar ? (
                    <img src={userAvatar} alt={userName} className="w-12 h-12 rounded-full object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-neon-blue to-neon-purple p-[2px]">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-sm font-bold">
                        {initials}
                      </div>
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-white">{userName}</p>
                    <p className="text-xs text-slate-400">{userRole?.replace('_', ' ')}</p>
                  </div>
                </div>

                {/* Navigation Items */}
                {navItems.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path}
                    className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon size={16} />
                    {item.label}
                  </Link>
                ))}

                <hr className="my-2 border-white/10" />

                <Link 
                  to="/settings" 
                  className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Settings size={16} />
                  Settings
                </Link>
                
                <button 
                  className="flex items-center gap-3 text-sm text-red-400 hover:text-red-300 transition-colors py-2 w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
