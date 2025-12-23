import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Book, Award, FileText, Edit, MapPin, Calendar } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <PageTransition>
      <div className="pt-24 px-6 max-w-4xl mx-auto min-h-screen">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Profile</h1>
            <p className="text-slate-400">Manage your personal and academic information.</p>
          </div>
          <Link to="/profile-setup">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium">
              <Edit size={16} />
              Edit Profile
            </button>
          </Link>
        </div>

        <div className="grid gap-8">
          {/* Header Card */}
          <div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-[2px]">
              <div className="w-full h-full rounded-full bg-black overflow-hidden">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-white">
                    {user.name.charAt(0)}
                  </div>
                )}
              </div>
            </div>
            
            <div className="text-center md:text-left flex-1">
              <h2 className="text-3xl font-bold mb-2">{user.name}</h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-400 mb-4">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  {user.email}
                </div>
                {user.phone && (
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    {user.phone}
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <User size={16} />
                  {user.role}
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {user.skills?.map((skill: any, index: number) => (
                  <span key={index} className="px-3 py-1 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/20 text-sm">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Academic Info */}
            <div className="glass-panel p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Book className="text-neon-purple" />
                Academic Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-white/5">
                  <span className="text-slate-400">Department</span>
                  <span className="font-medium">{user.department || 'Not set'}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/5">
                  <span className="text-slate-400">Year / Semester</span>
                  <span className="font-medium">{user.year ? `${user.year} Year` : '-'} / {user.semester ? `Sem ${user.semester}` : '-'}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/5">
                  <span className="text-slate-400">CGPA</span>
                  <span className="font-bold text-emerald-400">{user.cgpa || 'Not set'}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/5">
                  <span className="text-slate-400">College ID</span>
                  <span className="font-medium">{user.id.substring(0, 8).toUpperCase()}</span>
                </div>
              </div>
            </div>

            {/* Preferences & Resume */}
            <div className="space-y-8">
              <div className="glass-panel p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Award className="text-amber-400" />
                  Preferences
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-white/5">
                    <span className="text-slate-400">Preferred Roles</span>
                    <span className="font-medium text-right">{user.preferences?.roles?.join(', ') || 'Not set'}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/5">
                    <span className="text-slate-400">Preferred Locations</span>
                    <span className="font-medium text-right">{user.preferences?.locations?.join(', ') || 'Not set'}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/5">
                    <span className="text-slate-400">Expected Stipend</span>
                    <span className="font-medium">₹{user.preferences?.minStipend?.toLocaleString() || 0}+</span>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="text-rose-400" />
                  Resume
                </h3>
                
                {user.resume ? (
                  <div className="flex items-center justify-between bg-white/5 p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="text-slate-400" />
                      <span className="text-sm font-medium">Resume.pdf</span>
                    </div>
                    <button className="text-neon-blue text-sm hover:underline">View</button>
                  </div>
                ) : (
                  <div className="text-center py-6 text-slate-500 border border-dashed border-white/10 rounded-lg">
                    No resume uploaded
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProfilePage;