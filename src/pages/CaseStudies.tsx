import { motion } from 'motion/react';
import { Briefcase, Building, BookOpen, Handshake, BarChart3, ArrowDown } from 'lucide-react';

export default function CaseStudies() {
  const projects = [
    {
      id: "01",
      category: "FinTech",
      title: "Capital Systems",
      role: "Lead Design Strategist",
      desc: "Faced with a fragmented internal ecosystem, we initiated a 12-month design system overhaul. The goal was not just visual consistency, but a cultural shift toward collaborative delivery. By embedding design-thinking workshops into the engineering sprint cycle, we reduced handoff friction by 40%.",
      tags: ["SYSTEMS DESIGN", "STRATEGY"],
      icon: BarChart3,
      iconColor: "text-primary",
      iconBg: "bg-primary/5"
    },
    {
      id: "02",
      category: "Real Estate",
      title: "Habitat Digital",
      role: "Principal UX Consultant",
      desc: "Reimagining the property management experience for the modern tenant. We focused on reducing 'app fatigue' by consolidating six disparate portals into a single, intuitive dashboard focused on relationship-building between property owners and residents.",
      tags: ["UX RESEARCH", "SaaS"],
      icon: Building,
      iconColor: "text-secondary",
      iconBg: "bg-secondary/5",
      reverse: true
    },
    {
      id: "03",
      category: "Education",
      title: "Scholar Stream",
      role: "Founding Product Designer",
      desc: "Design and development of an asynchronous learning platform for remote graduate students. The project required a delicate balance between academic rigor and the accessibility needs of a global, non-traditional student body.",
      tags: ["EDTECH", "ACCESSIBILITY"],
      icon: BookOpen,
      iconColor: "text-primary",
      iconBg: "bg-primary/5"
    },
    {
      id: "04",
      category: "B2B",
      title: "Alliance Hub",
      role: "UX Strategy Lead",
      desc: "Building a partner-enablement portal that prioritizes transparency and lead-sharing for complex sales cycles. We leveraged deep user interviews to identify high-friction points in the existing referral workflow, resulting in a streamlined multi-touch attribution interface.",
      tags: ["B2B", "WORKFLOW"],
      icon: Handshake,
      iconColor: "text-secondary",
      iconBg: "bg-secondary/5",
      reverse: true
    }
  ];

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
            <p className="font-body-lg text-on-surface-variant mt-4 lg:mt-6 max-w-xl">
              A deep dive into strategic design interventions, leadership milestones, and the tangible outcomes of relationship-first digital transformation.
            </p>
          </motion.div>
          <div className="hidden lg:flex items-center gap-4 text-primary opacity-40">
            <span className="font-label-md">SCROLL TO EXPLORE</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 lg:px-6 w-full space-y-16 lg:space-y-24">
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Sidebar Metadata */}
              <div className={`col-span-1 lg:col-span-3 sticky top-32 ${project.reverse ? 'lg:order-last lg:text-right' : ''}`}>
                <div className={`flex flex-col gap-6 ${project.reverse ? 'lg:items-end' : ''}`}>
                  <div className={`w-16 h-16 rounded-2xl ${project.iconBg} flex items-center justify-center ${project.iconColor}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="font-label-md text-secondary uppercase tracking-widest">{project.id} / {project.category}</span>
                    <h3 className="font-headline-sm text-primary mt-1">{project.title}</h3>
                    <p className="font-body-md text-on-surface-variant mt-2">{project.role}</p>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="col-span-1 lg:col-span-9 bg-surface-container-lowest p-6 lg:p-12 rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6">
                    <h4 className="font-label-md text-primary uppercase tracking-widest border-b border-outline/10 pb-2">The Narrative</h4>
                    <p className="font-body-md text-on-surface leading-relaxed">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 lg:gap-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-md text-[12px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-surface-container/50 rounded-lg p-6 lg:p-8 flex flex-col justify-center border border-outline/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <Icon className="w-24 h-24" />
                    </div>
                    <h4 className="font-label-md text-secondary uppercase tracking-widest mb-4">Current Status</h4>
                    <p className="font-headline-sm text-primary italic">Impact statement pending</p>
                    <p className="font-body-md text-on-surface-variant mt-4 relative z-10">
                      Quantitative data currently under internal audit for public release.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* CTA section inside case studies */}
      <section className="w-full bg-primary py-16 lg:py-24 mt-16 lg:mt-24">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6 text-center">
          <h2 className="font-headline-md text-on-primary mb-6 lg:mb-8">Looking for more details?</h2>
          <p className="font-body-lg text-on-primary/80 max-w-xl mx-auto mb-8 lg:mb-10">
            Full case study dossiers—including process documentation, stakeholder mapping, and final metric reports—are available upon request for verified inquiries.
          </p>
          <button className="bg-secondary text-on-primary px-8 py-4 rounded-lg font-label-md hover:bg-secondary/90 transition-all transform hover:scale-105 active:scale-95 shadow-xl">
            REQUEST FULL PORTFOLIO
          </button>
        </div>
      </section>
    </div>
  );
}
