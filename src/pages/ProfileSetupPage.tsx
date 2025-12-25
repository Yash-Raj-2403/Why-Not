import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../services/api';
import { motion } from 'framer-motion';
import { UserRole } from '../types';

const ProfileSetupPage: React.FC = () => {
  const { user, loading, refreshUser } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    name: user?.name || '',
    department: user?.department || '',
    major: user?.major || '',
    year: user?.year || 1,
    semester: user?.semester || 1,
    phone: '',
    
    // Academic
    cgpa: user?.cgpa || 0,
    
    // Skills
    skills: [] as { name: string; level: string }[],
    newSkill: '',
    newSkillLevel: 'Beginner',
    
    // Preferences
    preferences: {
      locations: [] as string[],
      stipendMin: 0,
      opportunityTypes: [] as string[],
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddSkill = () => {
    if (formData.newSkill) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, { name: prev.newSkill, level: prev.newSkillLevel }],
        newSkill: '',
        newSkillLevel: 'Beginner'
      }));
    }
  };

  const handleRemoveSkill = (index: number) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async () => {
    if (!user) return;
    try {
      await api.updateStudentProfile(user.id, {
        name: formData.name,
        department: formData.department,
        phone: formData.phone,
        major: formData.major,
        year: Number(formData.year),
        semester: Number(formData.semester),
        cgpa: Number(formData.cgpa),
        skills: formData.skills,
        preferences: formData.preferences
      });
      
      // Wait a moment for database to propagate
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Refresh user data to update context
      await refreshUser();
      
      // Navigate to dashboard
      navigate('/dashboard', { replace: true });
    } catch (error: any) {
      console.error('Error updating profile:', error);
      alert(`Failed to update profile: ${error.message || error.error_description || JSON.stringify(error)}`);
    }
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-2xl w-full bg-slate-900 p-8 rounded-xl border border-slate-800"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Complete Your Profile</h1>
        
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= i ? 'bg-neutral-900' : 'bg-slate-700'}`}>
              {i}
            </div>
          ))}
        </div>

        {step === 1 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Major</label>
                <input
                  type="text"
                  name="major"
                  value={formData.major}
                  onChange={handleInputChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded p-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Year</label>
                  <input
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Semester</label>
                  <input
                    type="number"
                    name="semester"
                    value={formData.semester}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded p-2"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={nextStep} className="bg-neutral-900 px-4 py-2 rounded hover:bg-neutral-800">Next</button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-xl font-semibold mb-4">Academic Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">CGPA</label>
                <input
                  type="number"
                  step="0.01"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleInputChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded p-2"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button onClick={prevStep} className="text-slate-400 hover:text-white">Back</button>
              <button onClick={nextStep} className="bg-neutral-900 px-4 py-2 rounded hover:bg-neutral-800">Next</button>
            </div>
          </motion.div
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  name="newSkill"
                  value={formData.newSkill}
                  onChange={handleInputChange}
                  placeholder="Add a skill (e.g. React, Python)"
                  className="flex-1 bg-slate-800 border border-slate-700 rounded p-2"
                />
                <select
                  name="newSkillLevel"
                  value={formData.newSkillLevel}
                  onChange={handleInputChange}
                  className="bg-slate-800 border border-slate-700 rounded p-2"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
                <button onClick={handleAddSkill} className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">Add</button>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {formData.skills.map((skill, index) => (
                  <div key={index} className="bg-slate-700 px-3 py-1 rounded-full flex items-center gap-2">
                    <span>{skill.name} ({skill.level})</span>
                    <button onClick={() => handleRemoveSkill(index)} className="text-red-400 hover:text-red-300">×</button>
                  </div>
                ))}
              </div>
            </div>
            <div class
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          
              <button onClick={prevStep} className="text-slate-400 hover:text-white">Back</button>
              <button onClick={nextStep} className="bg-neutral-900 px-4 py-2 rounded hover:bg-neutral-800">Next</button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-xl font-semibold mb-4">Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Minimum Stipend (₹)</label>
                <input
                  type="number"
                  value={formData.preferences.stipendMin}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    preferences: { ...prev.preferences, stipendMin: Number(e.target.value) }
                  }))}
                  className="w-full bg-slate-800 border border-slate-700 rounded p-2"
                />
              </div>
        motion.      {/* Add more preference fields as needed */}
            </div>
            <div className="mt-6 flex justify-between">
              <button onClick={prevStep} className="text-slate-400 hover:text-white">Back</button>
              <button onClick={handleSubmit} className="bg-neutral-900 px-6 py-2 rounded hover:bg-neutral-800 font-bold">Complete Profile</button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProfileSetupPage;
