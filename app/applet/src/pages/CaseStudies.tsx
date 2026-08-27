import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowDown, BarChart3, Building, BookOpen, Briefcase, Handshake, ArrowLeft } from 'lucide-react';

export default function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState<string | null>(null);

  const projects = [
    {
      id: "01",
      category: "Workspace Management",
      title: "Cloud Spaces",
      role: "Sales & Operations",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
      situation: "Potential members weren't being followed up with after tours, leading to lost sales.",
      approach: "I took charge of the follow-up process, personally reaching out to prospects, answering their questions quickly, and guiding them to the right membership plans.",
      outcome: "This proactive approach increased conversion rates, helped me meet monthly sales targets, and boosted overall workspace occupancy.",
      tags: ["SALES", "CUSTOMER RELATIONS"],
      icon: BarChart3,
      iconColor: "text-primary",
      iconBg: "bg-primary/5"
    },
    {
      id: "02",
      category: "Hospitality",
      title: "Theron Vacation Homes",
      role: "Guest Relations",
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=800",
      situation: "Guests needed faster and more personalized support during their stays.",
      approach: "I focused on understanding each guest's needs, maintained clear communication, and worked with the team to fix any issues immediately.",
      outcome: "Guest satisfaction improved significantly, leading to positive feedback, stronger client relationships, and more repeat bookings.",
      tags: ["HOSPITALITY", "GUEST SUPPORT"],
      icon: Handshake,
      iconColor: "text-secondary",
      iconBg: "bg-secondary/5",
      reverse: true
    },
    {
      id: "03",
      category: "Education",
      title: "Alnoor Training Center",
      role: "Student Affairs Secretary",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800",
      situation: "Poor communication and disorganized records were causing delays in supporting parents and students.",
      approach: "I built better relationships with parents through consistent updates. I listened to their concerns and made sure the right departments acted on them quickly.",
      outcome: "Parent communication became much smoother. We resolved requests faster, built stronger trust with families, and made the support process much more efficient.",
      tags: ["EDUCATION", "ADMINISTRATION"],
      icon: BookOpen,
      iconColor: "text-primary",
      iconBg: "bg-primary/5"
    },
    {
      id: "04",
      category: "Real Estate",
      title: "Off Market Listing",
      role: "Executive Assistant",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800",
      situation: "Coordinating property viewings and managing client communications was disorganized, risking delays and lost sales.",
      approach: "I created a structured process for scheduling viewings and following up with clients, ensuring everyone had the right information at the right time.",
      outcome: "The entire sales process became smoother. Viewings were organized, delays were minimized, and both clients and owners enjoyed a seamless experience.",
      tags: ["REAL ESTATE", "COORDINATION"],
      icon: Briefcase,
      iconColor: "text-secondary",
      iconBg: "bg-secondary/5",
      reverse: true
    },
    {
      id: "05",
      category: "Workspace Management",
      title: "Cloud Spaces",
      role: "Guest & Client Relations",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=800",
      situation: "We needed to consistently improve the client experience by offering better communication and faster service delivery.",
      approach: "I stayed proactive, regularly checking in with clients, understanding their needs, and working with internal teams to resolve issues before they became problems.",
      outcome: "My efforts strengthened client relationships, improved overall satisfaction, and created a highly positive and welcoming workspace environment.",
      tags: ["CLIENT RELATIONS", "SERVICE DELIVERY"],
      icon: BarChart3,
      iconColor: "text-primary",
      iconBg: "bg-primary/5"
    }
  ];

  const activeProject = projects.find(p => p.id === activeStudy);

  if (activeProject) {
    const Icon = activeProject.icon;
    return (
      <div className="flex flex-col w-full pb-20">
        <section className="max-w-[1200px] mx-auto px-5 lg:px-6 py-12 lg:py-16 w-full">
          <button 
            onClick={() => setActiveStudy(null)}
            className="flex items-center gap-2 text-primary font-label-md uppercase tracking-widest hover:text-secondary transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Case Studies
          </button>
          
          <div className="w-full h-[400px] rounded-2xl overflow-hidden mb-12 shadow-md">
            <img 
              src={activeProject.image} 
              alt={activeProject.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="col-span-1 lg:col-span-4">
              <div className={`w-16 h-16 rounded-2xl ${activeProject.iconBg} flex items-center justify-center ${activeProject.iconColor} mb-6`}>
                <Icon className="w-8 h-8" />
              </div>
              <span className="font-label-md text-secondary uppercase tracking-widest">{activeProject.id} / {activeProject.category}</span>
              <h1 className="font-display-md text-primary mt-2">{activeProject.title}</h1>
              <p className="font-body-lg text-on-surface-variant mt-2">{activeProject.role}</p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {activeProject.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-md text-[12px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-span-1 lg:col-span-8 bg-surface-container-lowest p-6 lg:p-12 rounded-xl shadow-sm">
              <div className="flex flex-col gap-8 lg:gap-10">
                <div className="space-y-4">
                  <h4 className="font-label-md text-primary uppercase tracking-widest border-b border-outline/10 pb-2">Situation</h4>
                  <p className="font-body-lg text-on-surface leading-relaxed">
                    {activeProject.situation}
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-label-md text-primary uppercase tracking-widest border-b border-outline/10 pb-2">Approach</h4>
                  <p className="font-body-lg text-on-surface leading-relaxed">
                    {activeProject.approach}
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-label-md text-secondary uppercase tracking-widest border-b border-outline/10 pb-2">Outcome</h4>
                  <p className="font-body-lg text-on-surface leading-relaxed">
                    {activeProject.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Updated CTA section inside case studies */}
        <section className="w-full bg-primary py-16 lg:py-24 mt-16 lg:mt-24">
          <div className="max-w-[1200px] mx-auto px-5 lg:px-6 text-center">
            <h2 className="font-headline-md text-on-primary mb-6 lg:mb-8">Want to learn more about my experience?</h2>
            <p className="font-body-lg text-on-primary/80 max-w-xl mx-auto mb-8 lg:mb-10">
              Book a consultation or reach out to explore how we can work together on your next project.
            </p>
            <button className="bg-secondary text-on-primary px-8 py-4 rounded-lg font-label-md hover:bg-secondary/90 transition-all transform hover:scale-105 active:scale-95 shadow-xl">
              GET IN TOUCH
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full pb-20">
      <section className="max-w-[1200px] mx-auto px-5 lg:px-6 py-12 lg:py-24 w-full">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-outline/10 pb-8 lg:pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="font-label-md text-secondary uppercase tracking-[0.2em] mb-4 block">Archive & Impact</span>
            <h1 className="font-display-lg-mobile lg:font-display-lg text-primary leading-tight">Selected Case Studies</h1>
          </motion.div>
          <div className="hidden lg:flex items-center gap-4 text-primary opacity-40">
            <span className="font-label-md">SCROLL TO EXPLORE</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 lg:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => {
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer border border-outline/5"
                onClick={() => setActiveStudy(project.id)}
              >
                <div className="w-full h-[240px] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="font-label-md text-secondary/90 uppercase tracking-widest">{project.category}</span>
                    <h3 className="font-headline-sm mt-1">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <p className="font-body-md text-on-surface-variant line-clamp-3 mb-6">
                    {project.situation}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between border-t border-outline/10 pt-4">
                    <span className="font-label-md text-primary group-hover:text-secondary transition-colors uppercase tracking-widest">
                      Learn More
                    </span>
                    <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                      <ArrowDown className="w-4 h-4 text-primary group-hover:text-secondary -rotate-90 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA section inside case studies */}
      <section className="w-full bg-primary py-16 lg:py-24 mt-16 lg:mt-24">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6 text-center">
          <h2 className="font-headline-md text-on-primary mb-6 lg:mb-8">Want to learn more about my experience?</h2>
          <p className="font-body-lg text-on-primary/80 max-w-xl mx-auto mb-8 lg:mb-10">
            Book a consultation or reach out to explore how we can work together on your next project.
          </p>
          <button className="bg-secondary text-on-primary px-8 py-4 rounded-lg font-label-md hover:bg-secondary/90 transition-all transform hover:scale-105 active:scale-95 shadow-xl">
            GET IN TOUCH
          </button>
        </div>
      </section>
    </div>
  );
}
