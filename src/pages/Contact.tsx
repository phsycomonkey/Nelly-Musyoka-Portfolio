import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Mail, Linkedin, ArrowRight, CheckCircle2, Copy, Clock, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('Workspace Operations');
  const [dubaiTime, setDubaiTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setDubaiTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nellymusyoka90@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header Section */}
      <section className="relative w-full px-5 lg:px-6 pt-12 lg:pt-24 pb-12 lg:pb-16 overflow-hidden">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-end gap-8 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full lg:w-7/12"
            >
              <span className="font-label-md text-secondary uppercase tracking-[0.2em] mb-4 lg:mb-6 block">Availability: Open for Opportunities</span>
              <h1 className="font-display-lg-mobile lg:font-display-lg text-primary mb-6 lg:mb-8 max-w-2xl leading-tight">
                Let’s craft something <span className="text-secondary italic font-normal">meaningful</span> together.
              </h1>
              <p className="font-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                Whether you’re looking to optimize workspace operations, elevate client relations, or need professional freelance event and administrative support, I am always open to professional conversations.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full lg:w-5/12 space-y-4"
            >
              {/* Live Dubai Clock Card */}
              <div className="p-5 rounded-2xl bg-surface-container-low border border-outline/10 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Clock className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="font-label-md text-[11px] uppercase tracking-widest text-on-surface-variant block">Dubai Local Time (GST)</span>
                    <span className="font-display-xs text-primary font-bold">{dubaiTime || '12:00:00 PM'}</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-md text-[11px]">UTC +4</span>
              </div>

              {/* 1-Click Copy Email Card */}
              <div 
                onClick={handleCopyEmail}
                className="p-5 rounded-2xl bg-surface border border-secondary/20 hover:border-secondary/50 shadow-md cursor-pointer transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-label-md text-[11px] uppercase tracking-widest text-on-surface-variant block">Direct Email</span>
                    <span className="font-body-md text-primary font-semibold">nellymusyoka90@gmail.com</span>
                  </div>
                </div>
                <button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-primary font-label-md text-xs flex items-center gap-1.5 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* Main Grid */}
      <section className="w-full px-5 lg:px-6 pb-16 lg:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6">
            
            {/* Primary CTA: Schedule Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-xl shadow-primary/5 p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8 lg:mb-12">
                  <div className="p-4 bg-primary/5 rounded-full">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-surface-container-lowest bg-surface-variant"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-surface-container-lowest bg-primary-fixed"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-surface-container-lowest flex items-center justify-center bg-secondary text-on-secondary font-label-md text-[12px]">+12</div>
                  </div>
                </div>
                <h2 className="font-headline-md text-primary mb-4">Schedule a Strategy Chat</h2>
                <p className="font-body-md text-on-surface-variant mb-8 lg:mb-10 max-w-md">
                  Book a 30-minute introductory call to discuss your project goals, timelines, and how we might work together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <button className="w-full sm:w-auto px-8 py-4 bg-secondary text-on-primary font-label-md rounded-full hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 transform hover:-translate-y-1">
                    View Availability
                  </button>
                  <span className="font-label-md text-outline italic">Typical response within 24 hours</span>
                </div>
              </div>
              
              {/* Graphic Accent */}
              <div className="absolute bottom-0 right-0 opacity-10 translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
                <svg fill="none" height="400" viewBox="0 0 400 400" width="400" xmlns="http://www.w3.org/2000/svg">
                  <circle className="text-primary" cx="200" cy="200" r="190" stroke="currentColor" strokeDasharray="10 10" strokeWidth="2"></circle>
                  <circle className="text-secondary" cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1"></circle>
                </svg>
              </div>
            </motion.div>

            {/* Secondary Info & Visuals */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <div className="relative h-[240px] lg:h-full lg:min-h-[300px] rounded-xl overflow-hidden shadow-md">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Minimalist workspace" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT7krh0RGtwHOD7q9rYfV6PojeA-pgbV_MvhSuoRNjEDlPDP6H8fIOcJ2jbZgDhw4x-XmfaJUE8yeC-LqGGgAY_PU2U3GBpbo_bTEGjIs9qseHjDz86HZs-K8hBmTbgjzjloeTZte-wmJoOORblKR5ga3D84TktPVgYHj2Bg_O049FJhJYtj6H5bWPm62nVT_PG9LfTTDm9VonNeNH-cn1BSDN3ikpOApG5CTBrPs0JUQ5SqJURNmXXhEzGTPvF1yJI4J9sHel0xk"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 lg:p-8">
                  <p className="text-on-primary font-body-md italic leading-relaxed">
                    “Good design starts with a quiet space and a clear conversation.”
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="mailto:Nmusyoka2023@gmail.com" className="group p-6 bg-surface-container rounded-xl flex flex-col gap-4 hover:bg-primary transition-colors duration-300">
                  <Mail className="w-6 h-6 text-secondary group-hover:text-on-primary transition-colors" />
                  <div>
                    <h4 className="font-label-md text-primary group-hover:text-on-primary uppercase tracking-wider mb-1">Email Me</h4>
                    <p className="font-body-md text-on-surface-variant group-hover:text-on-primary/80">Nmusyoka2023@gmail.com</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/nelly-nzula-7389a272/" target="_blank" rel="noopener noreferrer" className="group p-6 bg-surface-container rounded-xl flex flex-col gap-4 hover:bg-primary transition-colors duration-300">
                  <Linkedin className="w-6 h-6 text-secondary group-hover:text-on-primary transition-colors" />
                  <div>
                    <h4 className="font-label-md text-primary group-hover:text-on-primary uppercase tracking-wider mb-1">LinkedIn</h4>
                    <p className="font-body-md text-on-surface-variant group-hover:text-on-primary/80">/in/nelly-nzula-7389a272</p>
                  </div>
                </a>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>



      {/* Interactive Dubai, UAE Location Map Section */}
      <section className="w-full h-[320px] lg:h-[400px] relative overflow-hidden rounded-3xl border border-outline/10 shadow-sm mt-8">
        <iframe
          title="Dubai UAE Location Map"
          src="https://maps.google.com/maps?q=Downtown%20Dubai,%20United%20Arab%20Emirates&t=&z=12&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
          loading="lazy"
          allowFullScreen
        ></iframe>
        <div className="absolute bottom-6 left-6 pointer-events-none">
          <div className="bg-surface/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-secondary/20 flex items-center gap-3 pointer-events-auto">
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
            <div>
              <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-bold block">Based in Dubai, UAE</span>
              <span className="font-body-md text-xs text-primary font-semibold">Downtown Dubai & Fountain Views • GST (UTC+4)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
