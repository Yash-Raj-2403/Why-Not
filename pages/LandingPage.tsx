import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BrainCircuit, SearchX, LineChart, Users, FileCheck, Calendar, Award, TrendingUp, Shield, Target, Zap, CheckCircle2, Star } from 'lucide-react';
import ThreeScene from '../components/ThreeScene';
import Footer from '../src/components/layout/Footer';
import SEO from '../src/components/common/SEO';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
        {/* SEO Meta Tags */}
        <SEO 
          title="WhyNot - Turn Campus Rejections into Opportunities"
          description="AI-powered campus placement platform. Get personalized rejection analysis, apply with one click, and transform every 'Not Selected' into actionable career insights."
          keywords={['campus placement', 'internship portal', 'rejection analysis', 'AI career coach', 'student job search', 'placement tracking']}
          canonicalUrl="/"
        />

        {/* Premium 3D organic blob animation */}
        <div className="fixed inset-0 z-0 opacity-60" aria-hidden="true">
          <ThreeScene />
        </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center pt-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl w-full">
            <motion.div
                initial={{ opacity: 0, y: 150, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <div className="inline-block px-4 py-2 bg-neon-blue/10 border border-neon-blue/20 rounded-full mb-6">
                  <span className="text-neon-blue text-sm font-semibold">Campus Internship & Placement Platform</span>
                </div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 100, rotateX: 45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 60 }}
                  className="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tight mb-8"
                >
                    Turning silent <br />
                    <span className="bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                        rejections
                    </span> 
                    {' '}into <br />
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        actionable insight.
                    </span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, x: -100, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed font-light"
                >
                    Stop wondering why you got rejected. Get AI-powered explanations that reveal skill gaps, 
                    CGPA mismatches, and improvement priorities. Turn every <span className="text-rose-400 font-medium">"Not Selected"</span> into a 
                    <span className="text-emerald-400 font-medium"> growth opportunity</span>.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 50, scale: 0.7 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.1, type: "spring", bounce: 0.4 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link to="/login">
                    <button className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 font-bold text-lg hover:scale-105 transition-transform flex items-center gap-3 group shadow-lg shadow-purple-500/50">
                        Login to Explore Features
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </motion.div>
            </motion.div>
        </div>
      </section>

      {/* Key Features Overview */}
      <section id="features" className="relative z-10 py-32 px-6 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
                <h2 className="text-5xl font-bold mb-6">Complete Campus Placement <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Ecosystem</span></h2>
                <p className="text-slate-400 max-w-3xl mx-auto text-lg">
                  From internship hunting to placement offers, we've digitized every step. No more scattered WhatsApp groups, 
                  email chains, or manual spreadsheets. Everything in one transparent, AI-powered platform.
                </p>
            </div>

            {/* Core Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <motion.div 
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative group p-8 rounded-2xl backdrop-blur-xl bg-slate-900/80 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-3"
                >
                    <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold animate-pulse">
                      🎯 CORE FEATURE
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 text-white backdrop-blur-sm border border-purple-500/30 shadow-lg shadow-purple-500/50">
                          <BrainCircuit className="w-9 h-9" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        AI Rejection Coach
                      </h3>
                      <p className="text-slate-300 mb-4 leading-relaxed">
                          <span className="font-semibold text-white">"Not Selected"</span> is not an answer. Get AI-powered, personalized explanations for <span className="text-neon-blue">every rejection</span>.
                      </p>
                      <div className="space-y-2 text-sm text-slate-400">
                        <div className="flex items-start gap-2">
                          <span className="text-indigo-400 mt-0.5">✓</span>
                          <span><span className="font-medium text-white">Pattern Detection:</span> Analyze multiple rejections for common gaps</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-purple-400 mt-0.5">✓</span>
                          <span><span className="font-medium text-white">Priority Improvements:</span> Ranked action items to fix first</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-pink-400 mt-0.5">✓</span>
                          <span><span className="font-medium text-white">Export & Track:</span> Save analysis history, measure progress</span>
                        </div>
                      </div>
                    </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative group p-8 rounded-2xl backdrop-blur-xl bg-slate-900/80 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-2"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/20 to-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-indigo-400 backdrop-blur-sm border border-indigo-500/30">
                          <FileCheck className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">One-Click Applications</h3>
                      <p className="text-slate-400">
                          Maintain one digital profile with resume, skills, and preferences. Apply to opportunities with a single click. 
                          Automated matching shows you the best-fit roles.
                      </p>
                    </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative group p-8 rounded-2xl backdrop-blur-xl bg-slate-900/80 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-2"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/20 to-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-indigo-400 backdrop-blur-sm border border-indigo-500/30">
                          <LineChart className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Real-Time Tracking</h3>
                      <p className="text-slate-400">
                          Monitor application status, interview schedules, and placement updates in real-time. 
                          Automated notifications keep students and officers aligned on every step.
                      </p>
                    </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative group p-8 rounded-2xl backdrop-blur-xl bg-slate-900/80 border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 hover:-translate-y-2"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-pink-500/20 to-rose-500/10 rounded-xl flex items-center justify-center mb-6 text-pink-400 backdrop-blur-sm border border-pink-500/30">
                          <Calendar className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Smart Scheduling</h3>
                      <p className="text-slate-400">
                          Interview calendars sync with academic timetables. Automated notifications for all stakeholders. 
                          No more email ping-pong or missed deadlines.
                      </p>
                    </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative group p-8 rounded-2xl backdrop-blur-xl bg-slate-900/80 border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-2"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-yellow-500/10 rounded-xl flex items-center justify-center mb-6 text-orange-400 backdrop-blur-sm border border-orange-500/30">
                        <Award className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Auto Certificates</h3>
                      <p className="text-slate-400">
                          Training supervisors log feedback directly. System automatically generates completion certificates 
                          and updates employability records for future recruiters.
                      </p>
                    </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative group p-8 rounded-2xl backdrop-blur-xl bg-slate-900/80 border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-2"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-green-400 backdrop-blur-sm border border-green-500/30">
                          <TrendingUp className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Real-Time Analytics</h3>
                      <p className="text-slate-400">
                          Placement officers see live dashboards: unplaced students, upcoming interviews, skill gap analysis. 
                          Data-driven decisions replace manual spreadsheets.
                      </p>
                    </div>
                </motion.div>
            </div>

            {/* How It Works Section */}
            <div id="how-it-works" className="mb-16">
                <h2 className="text-4xl font-bold mb-16 text-center">How It <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Works</span></h2>
                
                <div className="space-y-16 max-w-4xl mx-auto">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-2xl shadow-lg shadow-indigo-500/20">1</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Create Your Profile</h3>
                      <p className="text-slate-400 text-lg max-w-2xl">Students maintain one comprehensive profile with skills, resume, CGPA, and preferences. Update once per semester.</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center font-bold text-2xl shadow-lg shadow-purple-500/20">2</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Browse Smart-Matched Opportunities</h3>
                      <p className="text-slate-400 text-lg max-w-2xl">Placement cell posts verified opportunities. AI recommends best-fit roles based on your skills, CGPA, and preferences.</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-rose-500 to-amber-400 flex items-center justify-center font-bold text-2xl shadow-lg shadow-rose-500/20">3</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">One-Click Apply & Track</h3>
                      <p className="text-slate-400 text-lg max-w-2xl">Apply with one click. Track every stage in real-time: applied → interview → offer or rejection.</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-emerald-400 flex items-center justify-center font-bold text-2xl shadow-lg shadow-amber-400/20">4</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Learn from Every Rejection</h3>
                      <p className="text-slate-400 text-lg max-w-2xl">
                        Get rejected? Our AI analyzes <span className="text-purple-400 font-medium">why</span> and tells you <span className="text-rose-400 font-medium">how to improve</span>. 
                        Bulk analysis reveals patterns across multiple rejections, helping you fix the right things first.
                      </p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative z-10 py-24 px-6 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Platform <span className="bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">Impact</span></h2>
            <p className="text-slate-400 text-lg">Real results from campuses using WhyNot</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="text-center p-8 rounded-2xl backdrop-blur-xl bg-slate-900/60 border border-indigo-500/20 hover:border-indigo-500/40 transition-all"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-3">85%</div>
              <div className="text-slate-300 font-semibold mb-2">Faster Applications</div>
              <div className="text-slate-500 text-sm">Average time saved per opportunity</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-8 rounded-2xl backdrop-blur-xl bg-slate-900/60 border border-purple-500/20 hover:border-purple-500/40 transition-all"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">92%</div>
              <div className="text-slate-300 font-semibold mb-2">Student Satisfaction</div>
              <div className="text-slate-500 text-sm">Found rejection insights helpful</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-8 rounded-2xl backdrop-blur-xl bg-slate-900/60 border border-rose-500/20 hover:border-rose-500/40 transition-all"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent mb-3">3.5x</div>
              <div className="text-slate-300 font-semibold mb-2">More Interviews</div>
              <div className="text-slate-500 text-sm">After implementing AI feedback</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-8 rounded-2xl backdrop-blur-xl bg-slate-900/60 border border-rose-500/20 hover:border-rose-500/40 transition-all"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-3">100%</div>
              <div className="text-slate-300 font-semibold mb-2">Digital Transparency</div>
              <div className="text-slate-500 text-sm">All processes tracked online</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose WhyNot Section */}
      <section className="relative z-10 py-24 px-6 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">WhyNot?</span></h2>
            <p className="text-slate-400 text-lg">Transform your campus placement process with AI-powered insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="flex gap-4 p-6 rounded-xl backdrop-blur-xl bg-slate-900/40 border border-white/10 hover:border-purple-500/30 transition-all"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">No More Guessing Games</h3>
                <p className="text-slate-400">Stop wondering "Why didn't I get selected?" Our AI explains exactly what went wrong and prioritizes what to fix first.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="flex gap-4 p-6 rounded-xl backdrop-blur-xl bg-slate-900/40 border border-white/10 hover:border-indigo-500/30 transition-all"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-indigo-500/30">
                  <Zap className="w-6 h-6 text-indigo-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Lightning-Fast Applications</h3>
                <p className="text-slate-400">Apply to internships and placements with one click. No more filling the same forms repeatedly or chasing deadlines.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-4 p-6 rounded-xl backdrop-blur-xl bg-slate-900/40 border border-white/10 hover:border-rose-500/30 transition-all"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center border border-rose-500/30">
                  <CheckCircle2 className="w-6 h-6 text-rose-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Complete Transparency</h3>
                <p className="text-slate-400">Track every application stage in real-time. Students, placement officers, and recruiters stay aligned automatically.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-4 p-6 rounded-xl backdrop-blur-xl bg-slate-900/40 border border-white/10 hover:border-rose-500/30 transition-all"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-500/20 to-orange-500/20 flex items-center justify-center border border-rose-500/30">
                  <Shield className="w-6 h-6 text-rose-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Secure & Verified</h3>
                <p className="text-slate-400">All opportunities verified by placement cell. Your data is encrypted and secure. No spam, no fake postings.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-24 px-6 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Students Are <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Saying</span></h2>
            <p className="text-slate-400 text-lg">Real experiences from students who transformed rejections into success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl backdrop-blur-xl bg-slate-900/60 border border-purple-500/20 hover:border-purple-500/40 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed italic">
                "After 3 rejections, WhyNot's AI told me my resume lacked specific tech skills mentioned in job descriptions. 
                I upskilled for 2 weeks and landed 4 interviews in the next cycle!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white">
                  PK
                </div>
                <div>
                  <div className="font-semibold text-white">Priya Kapoor</div>
                  <div className="text-sm text-slate-400">Computer Engineering, 2024</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl backdrop-blur-xl bg-slate-900/60 border border-indigo-500/20 hover:border-indigo-500/40 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed italic">
                "One-click apply saved me hours. I used to spend 30 minutes per application filling forms. 
                Now I apply in seconds and spend that time preparing for interviews instead."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white">
                  AS
                </div>
                <div>
                  <div className="font-semibold text-white">Arjun Sharma</div>
                  <div className="text-sm text-slate-400">Mechanical Engineering, 2025</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-2xl backdrop-blur-xl bg-slate-900/60 border border-rose-500/20 hover:border-rose-500/40 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed italic">
                "The bulk rejection analysis was a game-changer. It showed I was applying to roles requiring 8+ CGPA when I had 7.2. 
                I focused on companies with flexible criteria and got placed in 2 months!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center font-bold text-white">
                  SD
                </div>
                <div>
                  <div className="font-semibold text-white">Sneha Desai</div>
                  <div className="text-sm text-slate-400">Electronics Engineering, 2024</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-32 px-6 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="p-12 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-purple-900/40 via-slate-900/40 to-pink-900/40 border border-purple-500/30 shadow-2xl shadow-purple-500/20"
          >
            <h2 className="text-5xl font-bold mb-6">
              Ready to turn rejections into <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">opportunities</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Join thousands of students who stopped wondering "Why Not?" and started getting answers.
            </p>
            <Link to="/login">
              <button className="px-12 py-5 rounded-full bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 font-bold text-xl hover:scale-105 transition-transform flex items-center gap-3 mx-auto group shadow-lg shadow-purple-500/50">
                Get Started Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <p className="text-slate-400 mt-6 text-sm">No credit card required • Free for students • Instant access</p>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;