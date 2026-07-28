import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Mail, Linkedin, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

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
              <span className="font-label-md text-secondary uppercase tracking-[0.2em] mb-4 lg:mb-6 block">Availability: Q3/Q4 2024</span>
              <h1 className="font-display-lg-mobile lg:font-display-lg text-primary mb-6 lg:mb-8 max-w-2xl leading-tight">
                Let’s craft something <span className="text-secondary italic font-normal">meaningful</span> together.
              </h1>
              <p className="font-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                Whether you’re looking to solve a complex product challenge or simply want to discuss the future of humanist design, I’m always open to thoughtful conversations.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:block lg:w-5/12 pb-4"
            >
              <div className="flex items-center gap-4 text-primary">
                <div className="h-[1px] w-12 bg-primary/30"></div>
                <span className="font-label-md uppercase tracking-widest">Based in Nairobi • Remote Worldwide</span>
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
                <a href="mailto:hello@nellynzula.com" className="group p-6 bg-surface-container rounded-xl flex flex-col gap-4 hover:bg-primary transition-colors duration-300">
                  <Mail className="w-6 h-6 text-secondary group-hover:text-on-primary transition-colors" />
                  <div>
                    <h4 className="font-label-md text-primary group-hover:text-on-primary uppercase tracking-wider mb-1">Email Me</h4>
                    <p className="font-body-md text-on-surface-variant group-hover:text-on-primary/80">hello@nellynzula.com</p>
                  </div>
                </a>
                <a href="#" className="group p-6 bg-surface-container rounded-xl flex flex-col gap-4 hover:bg-primary transition-colors duration-300">
                  <Linkedin className="w-6 h-6 text-secondary group-hover:text-on-primary transition-colors" />
                  <div>
                    <h4 className="font-label-md text-primary group-hover:text-on-primary uppercase tracking-wider mb-1">LinkedIn</h4>
                    <p className="font-body-md text-on-surface-variant group-hover:text-on-primary/80">/in/nellynzula</p>
                  </div>
                </a>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="w-full bg-surface-container-low py-16 lg:py-24 border-t border-outline/5">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-headline-sm text-primary mb-4 lg:mb-6">Collaboration Inquiry</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Interested in a larger project or ongoing partnership? I am currently accepting select design leadership and product strategy engagements. 
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-primary uppercase tracking-widest">Your Name</label>
                  <input 
                    required
                    className="bg-transparent border-b-2 border-primary/20 py-3 px-1 outline-none focus:border-secondary transition-colors text-on-surface font-body-md" 
                    placeholder="Jane Doe" 
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-primary uppercase tracking-widest">Email Address</label>
                  <input 
                    required
                    className="bg-transparent border-b-2 border-primary/20 py-3 px-1 outline-none focus:border-secondary transition-colors text-on-surface font-body-md" 
                    placeholder="jane@company.com" 
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-label-md text-primary uppercase tracking-widest">How can I help?</label>
                  <textarea 
                    required
                    className="bg-transparent border-b-2 border-primary/20 py-3 px-1 outline-none focus:border-secondary transition-colors text-on-surface font-body-md resize-none" 
                    placeholder="Briefly describe your project or enquiry..." 
                    rows={4}
                  ></textarea>
                </div>
                <div className="md:col-span-2 flex justify-start md:justify-end">
                  <button 
                    disabled={formState !== 'idle'}
                    className="group flex items-center gap-3 font-label-md text-secondary uppercase tracking-widest py-2 disabled:opacity-50" 
                    type="submit"
                  >
                    {formState === 'idle' && (
                      <>
                        Send Inquiry
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                    {formState === 'submitting' && 'Sending...'}
                    {formState === 'success' && (
                      <>
                        Thank You! <CheckCircle2 className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Graphic (Visual Only) */}
      <section className="w-full h-[300px] lg:h-[400px] relative hidden md:block">
        <div 
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 opacity-70" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBL-BGKLwxjUhHMSOocN2DIJiW45xKl71ZUar9ivskSf6fZMpkJGBcY7u4SYpiOPdaeh4R-z10v193JmJitrMfZMnhN0e120lGvpvaVmZpDl44byNdP_KJ5wx3pgquEC7FD2Q4ZHTqPwR6UMuCifLpodYMjRsbv-X_O-oLxceg5CY7WUGHMpsLnYv9zNFUxnDrEi9qRB6G31J_y86xG1lmuFbDYNSXMkih71YEVbr0niCmPo7FstCD3tuKWWgKOFF1DYkFDWIy1LzU')" }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-surface p-4 lg:p-6 rounded-full shadow-2xl flex items-center gap-4 animate-bounce pointer-events-auto cursor-default">
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
            <span className="font-label-md text-primary">Working from Nairobi (GMT+3)</span>
          </div>
        </div>
      </section>
    </div>
  );
}
