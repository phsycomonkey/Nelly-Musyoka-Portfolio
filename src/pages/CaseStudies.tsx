import { motion } from 'motion/react';
import { ArrowDown, ArrowLeft, BarChart3, Building, BookOpen, Briefcase, Handshake, Target, Cpu, Award, ArrowRight } from 'lucide-react';

interface CaseStudiesProps {
  activeStudyId?: string | null;
  setActiveStudyId?: (id: string | null) => void;
  setCurrentPage?: (page: string) => void;
  previousPage?: string;
  onViewImage: (imgUrl: string) => void;
}

export default function CaseStudies({ activeStudyId, setActiveStudyId, setCurrentPage, previousPage, onViewImage }: CaseStudiesProps) {

  const projects = [
    {
      id: "01",
      category: "Workspace Management",
      title: "Cloud Spaces",
      role: "Client Relations Specialist",
      situation: "While working as a Client Relations Specialist at Cloud Spaces Dubai Mall Fountain Views flagship coworking center, I noticed that lead inquiries and onboarding cycles needed a highly proactive follow-up process to maximize occupancy and build client retention.",
      approach: "I took the initiative to streamline daily coworking member and corporate tenant tours, managed CRM pipelines with immediate updates, and followed up closely with prospects to guide them through our customized membership packages.",
      outcome: "By providing responsive communications and structured client follow-ups, I successfully helped maximize workspace occupancy, met 100% of monthly sales targets, and elevated the day-to-day community culture.",
      tags: ["CLIENT RELATIONS", "WORKSPACE OPERATIONS"],
      icon: Building,
      iconColor: "text-primary",
      iconBg: "bg-primary/5",
      image: "/assets/img/Cloud Spaces.jpeg",
      gallery: ["/assets/img/claude2.jpeg", "/assets/img/claude3.jpeg"],
      metrics: [
        { value: "100%", label: "Sales Target Met" },
        { value: "+15%", label: "Conversion Rate" },
        { value: "48h", label: "Max Response Time" }
      ]
    },
    {
      id: "02",
      category: "Hospitality",
      title: "Theron Vacation Homes",
      role: "Guest Experience Manager & Digital Marketing Specialist",
      situation: "During my tenure at Theron Vacation Homes, I identified that maintaining consistent 5-star review ratings across Airbnb, Booking.com, and VRBO required a faster response system for guest inquiries and seamless onboarding operations.",
      approach: "I managed property listings and client communications on online booking platforms, oversaw stay lifecycles, and coordinated housekeeping and maintenance schedules to resolve stay issues immediately.",
      outcome: "My high-touch service delivery ensured top-tier guest satisfaction, generated a 20% increase in repeat guest bookings, and consistently maintained 5-star rating averages across all property channels.",
      tags: ["HOSPITALITY", "GUEST RELATIONS"],
      icon: Handshake,
      iconColor: "text-secondary",
      iconBg: "bg-secondary/5",
      reverse: true,
      image: "/assets/img/TheronVacationHomes.png",
      imagePosition: "object-[center_30%]",
      gallery: ["/assets/img/IMG_1112.jpg", "/assets/img/IMG_0999.jpg"],
      metrics: [
        { value: "98%", label: "Guest Satisfaction" },
        { value: "+20%", label: "Repeat Bookings" },
        { value: "5 ★", label: "Average Review" }
      ]
    },
    {
      id: "03",
      category: "Education",
      title: "Al Noor Rehabilitation & Welfare Association",
      role: "Student Admissions & Records Specialist",
      situation: "At Al Noor Rehabilitation & Welfare Association (for People of Determination), managing parent correspondence, admissions pipelines, and student records database required high administrative accuracy and confidentiality.",
      approach: "I supervised front desk receptionist operations, maintained the admissions and student records database, and coordinated parent-teacher scheduling across multidisciplinary departments.",
      outcome: "Streamlined records retrieval with 100% database accuracy, significantly reduced parent-response delays, and established a trusted communication channel for families and staff.",
      tags: ["ADMINISTRATION", "CLIENT SUPPORT"],
      icon: BookOpen,
      iconColor: "text-primary",
      iconBg: "bg-primary/5",
      image: "/assets/img/IMG_7893.jpg",
      gallery: ["/assets/img/IMG_7891.jpg", "/assets/img/IMG_7952.jpg"],
      metrics: [
        { value: "-40%", label: "Response Delays" },
        { value: "100%", label: "Record Accuracy" },
        { value: "High", label: "Parent Trust Score" }
      ]
    },
    {
      id: "04",
      category: "Real Estate",
      title: "Off-Market Listing Dubai",
      role: "Executive Operations Manager",
      situation: "At Off-Market Listing Dubai, coordinating high-value property viewings, transaction records, and broker communications required tight scheduling and workflow management to prevent delayed deals.",
      approach: "I managed executive calendars, coordinated property viewing itineraries, organized transaction files, and acted as the primary liaison between brokers, owners, and VIP clients.",
      outcome: "Achieved a 100% coordination rate with zero missed property tours, reduced real estate transaction lifecycle delays, and supported successful high-value sales.",
      tags: ["REAL ESTATE", "EXECUTIVE OPERATIONS"],
      icon: Briefcase,
      iconColor: "text-secondary",
      iconBg: "bg-secondary/5",
      reverse: true,
      image: "/assets/img/OffMarketListing.jpg",
      gallery: ["/assets/img/IMG_8903.jpg", "/assets/img/IMG_9020.jpg", "/assets/img/IMG_9023.jpg"],
      metrics: [
        { value: "0", label: "Missed Viewings" },
        { value: "Fast", label: "Sales Cycles" },
        { value: "100%", label: "Coordination Rate" }
      ]
    },
    {
      id: "05",
      category: "Workspace Management",
      title: "Cloud Spaces",
      role: "Client Relations Specialist",
      situation: "At Cloud Spaces flagship coworking center in Dubai, I continuously focus on elevating member engagement, resolving corporate client inquiries, and delivering daily service excellence.",
      approach: "I lead coworking community initiatives, coordinate workspace onboarding, resolve tenant requests, and collaborate with the Center Manager to maintain our premium workspace standards.",
      outcome: "Successfully achieved a 95% client retention rate, minimized response times to under 10 minutes, and contributed to a vibrant workspace culture.",
      tags: ["CLIENT RELATIONS", "COMMUNITY ENGAGEMENT"],
      icon: BarChart3,
      iconColor: "text-primary",
      iconBg: "bg-primary/5",
      image: "/assets/img/Cloud Spaces.jpeg",
      gallery: ["/assets/img/IMG_9020.jpg", "/assets/img/IMG_9023.jpg", "/assets/img/main2.png"],
      metrics: [
        { value: "95%", label: "Client Retention" },
        { value: "<10m", label: "Average Response" },
        { value: "Top", label: "Service Excellence" }
      ]
    }
  ];

  const activeProject = projects.find(p => p.id === activeStudyId);

  if (activeProject) {
    const Icon = activeProject.icon;
    return (
      <div className="flex flex-col w-full pb-20">
        {/* Banner Section */}
        <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
          <img 
            src={activeProject.image} 
            alt={activeProject.title} 
            className={`w-full h-full object-cover ${activeProject.imagePosition || 'object-center'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-black/30"></div>
          
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="max-w-[1200px] w-full mx-auto px-5 lg:px-6 pb-8 md:pb-12">
              <button 
                onClick={() => {
                  if (previousPage === 'home') {
                    setCurrentPage?.('home');
                  } else {
                    setActiveStudyId?.(null);
                  }
                }}
                className="group inline-flex items-center gap-2 text-primary font-label-md uppercase tracking-wider mb-6 bg-surface/80 hover:bg-surface backdrop-blur-md px-5 py-3 rounded-full transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Cases
              </button>
              
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl ${activeProject.iconBg} flex items-center justify-center ${activeProject.iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-label-md text-secondary uppercase tracking-[0.2em] text-[12px] md:text-[14px]">
                  {activeProject.category}
                </span>
              </div>
              
              <h1 className="font-display-lg-mobile md:font-display-lg text-primary">{activeProject.title}</h1>
              <p className="font-headline-sm text-on-surface-variant font-light mt-2">{activeProject.role}</p>
            </div>
          </div>
        </section>

        {/* Project Details Section */}
        <section className="max-w-[1200px] mx-auto px-5 lg:px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column: Situation, Approach, Outcome */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-4">
                <h3 className="font-headline-sm text-primary flex items-center gap-3 border-b border-outline/10 pb-3">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Situation
                </h3>
                <p className="font-body-lg text-on-surface leading-relaxed">{activeProject.situation}</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-headline-sm text-primary flex items-center gap-3 border-b border-outline/10 pb-3">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Approach
                </h3>
                <p className="font-body-lg text-on-surface leading-relaxed">{activeProject.approach}</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-headline-sm text-primary flex items-center gap-3 border-b border-outline/10 pb-3">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Outcome
                </h3>
                <p className="font-body-lg text-on-surface leading-relaxed">{activeProject.outcome}</p>
              </div>
            </div>

            {/* Right Column: Key Stats & Tags */}
            <div className="lg:col-span-4 space-y-10">
              {/* Metrics */}
              <div className="bg-surface-container-low p-8 rounded-3xl border border-outline/5 space-y-6">
                <h4 className="font-label-md text-primary uppercase tracking-widest text-center border-b border-outline/10 pb-4">
                  Key Metrics Achieved
                </h4>
                <div className="flex flex-col gap-6">
                  {activeProject.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <span className="text-3xl lg:text-4xl font-bold text-secondary block">{metric.value}</span>
                      <span className="text-[11px] font-label-md text-on-surface-variant uppercase tracking-wider block mt-1">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="space-y-4">
                <h4 className="font-label-md text-primary uppercase tracking-widest">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-surface-container rounded-lg font-label-md text-[11px] text-primary tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Gallery */}
          {activeProject.gallery && activeProject.gallery.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 border-t border-outline/10 pt-16"
            >
              <div className="text-center mb-10">
                <span className="font-label-md text-secondary uppercase tracking-[0.2em] block mb-2">Visual Archive</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {activeProject.gallery.map((imgUrl, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-outline/5 cursor-zoom-in group"
                    onClick={() => onViewImage(imgUrl)}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Gallery view ${index + 1} for ${activeProject.title}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-[center_35%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-label-md text-[12px] tracking-wider uppercase">View Image</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full pb-20 bg-surface">
      {/* Page Header */}
      <section className="max-w-[1200px] mx-auto px-5 lg:px-6 py-12 lg:py-16 w-full">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-outline/10 pb-8 lg:pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="font-label-md text-secondary uppercase tracking-[0.2em] mb-4 block">Impact & Strategy</span>
            <h1 className="font-display-lg-mobile lg:font-display-lg text-primary leading-tight">Selected Case Studies</h1>
          </motion.div>
          <div className="hidden lg:flex items-center gap-4 text-primary opacity-40">
            <span className="font-label-md">EXPLORE STORIES</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Case Studies Grid/List */}
      <section className="max-w-[1200px] mx-auto px-5 lg:px-6 w-full space-y-12 lg:space-y-16">
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-surface-container-lowest border border-outline/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-secondary/20 transition-all duration-500 group cursor-pointer flex flex-col lg:flex-row"
              onClick={() => window.location.hash = '#/cases/' + project.id}
            >
              {/* Cover Image Column */}
              <div className="w-full lg:w-[40%] h-[240px] lg:h-auto min-h-[260px] relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full object-cover ${project.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white lg:hidden">
                  <span className="font-label-md text-secondary-container uppercase tracking-widest text-[12px]">{project.category}</span>
                  <h3 className="font-headline-md mt-1 text-white">{project.title}</h3>
                </div>
              </div>
              
              {/* Content Column */}
              <div className="w-full lg:w-[60%] p-8 md:p-10 flex flex-col justify-between gap-8">
                <div className="space-y-4">
                  {/* Category, Title, Role (Desktop version) */}
                  <div className="hidden lg:block">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-lg ${project.iconBg} flex items-center justify-center ${project.iconColor}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-label-md text-secondary uppercase tracking-widest text-[12px]">{project.category}</span>
                    </div>
                    <h3 className="font-headline-md text-primary">{project.title}</h3>
                    <p className="font-body-md text-on-surface-variant font-light mt-1">{project.role}</p>
                  </div>

                  {/* Summary */}
                  <p className="font-body-md text-on-surface leading-relaxed line-clamp-3 lg:line-clamp-4">
                    {project.situation}
                  </p>
                </div>

                {/* Key Metrics Preview & CTA */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-outline/10 pt-6 mt-2">
                  <div className="flex gap-4">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="flex flex-col bg-surface/50 border border-outline/5 px-4 py-2.5 rounded-xl">
                        <span className="text-xl font-bold text-secondary">{m.value}</span>
                        <span className="text-[10px] font-label-md text-on-surface-variant uppercase tracking-wider">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 font-label-md text-secondary uppercase tracking-widest group-hover:text-primary transition-colors">
                    Read Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}

