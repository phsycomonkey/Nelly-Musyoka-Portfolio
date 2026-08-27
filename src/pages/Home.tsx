import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, TrendingUp, Layers, ArrowRight, Building, Briefcase, Handshake, BookOpen, Calendar, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import TiltCard from '../components/TiltCard';

interface HomeProps {
  setCurrentPage: (page: string) => void;
  setActiveStudyId?: (id: string | null) => void;
  onViewImage: (imgUrl: string) => void;
  isImageExpanded: boolean;
}

export default function Home({ setCurrentPage, setActiveStudyId, onViewImage, isImageExpanded }: HomeProps) {
  const [showAllGalleryPhotos, setShowAllGalleryPhotos] = useState(false);
  const [activeStoryTab, setActiveStoryTab] = useState<'workspace' | 'realestate' | 'hospitality' | 'education'>('workspace');
  const [activeTimelineId, setActiveTimelineId] = useState<string>('01');

  const featuredProjects = [
    {
      id: "01",
      category: "Workspace Management",
      title: "Cloud Spaces",
      role: "Client Relations Specialist",
      image: "/assets/img/Cloud Spaces.jpeg",
      situation: "While working as a Client Relations Specialist at Cloud Spaces Dubai Mall Fountain Views flagship coworking center, I noticed that lead inquiries and onboarding cycles needed a highly proactive follow-up process to maximize occupancy and build client retention.",
      metrics: [
        { value: "100%", label: "Sales Target Met" },
        { value: "+15%", label: "Conversion Rate" }
      ]
    },
    {
      id: "02",
      category: "Hospitality",
      title: "Theron Vacation Homes",
      role: "Guest Experience Manager & Digital Marketing Specialist",
      image: "/assets/img/TheronVacationHomes.png",
      imagePosition: "object-[center_30%]",
      situation: "During my tenure at Theron Vacation Homes, I identified that maintaining consistent 5-star review ratings across Airbnb, Booking.com, and VRBO required a faster response system for guest inquiries and seamless onboarding operations.",
      metrics: [
        { value: "98%", label: "Guest Satisfaction" },
        { value: "+20%", label: "Repeat Bookings" }
      ]
    },
    {
      id: "03",
      category: "Education",
      title: "Al Noor Rehabilitation Association",
      role: "Student Admissions & Records Specialist",
      image: "/assets/img/IMG_7893.jpg",
      situation: "At Al Noor Rehabilitation & Welfare Association (for People of Determination), managing parent correspondence, admissions pipelines, and student records database required high administrative accuracy and confidentiality.",
      metrics: [
        { value: "-40%", label: "Response Delays" },
        { value: "100%", label: "Record Accuracy" }
      ]
    },
    {
      id: "04",
      category: "Real Estate",
      title: "Off-Market Listing Dubai",
      role: "Executive Operations Manager",
      image: "/assets/img/OffMarketListing.jpg",
      situation: "At Off-Market Listing Dubai, coordinating high-value property viewings, transaction records, and broker communications required tight scheduling and workflow management to prevent delayed deals.",
      metrics: [
        { value: "0", label: "Missed Viewings" },
        { value: "Fast", label: "Sales Cycles" }
      ]
    }
  ];

  const galleryImages = [
    {
      src: "/assets/img/main.png",
      alt: "Nelly Nzula Musyoka, Executive Portrait",
      itemClass: "md:col-span-2 md:row-span-2",
      imageClass: "object-[center_18%]"
    },
    {
      src: "/assets/img/Cloud Spaces.jpeg",
      alt: "Cloud Spaces Flagship Workspace",
      itemClass: "md:col-span-2",
      imageClass: "object-center"
    },
    {
      src: "/assets/img/TheronVacationHomes.png",
      alt: "Theron Vacation Homes Portfolio",
      itemClass: "",
      imageClass: "object-[center_20%]"
    },
    {
      src: "/assets/img/OffMarketListing.jpg",
      alt: "Off Market Real Estate Operations",
      itemClass: "",
      imageClass: "object-center"
    },
    {
      src: "/assets/img/IMG_9020.jpg",
      alt: "Executive Desk & Client Relations",
      itemClass: "md:row-span-2",
      imageClass: "object-[center_20%]"
    },
    {
      src: "/assets/img/IMG_9023.jpg",
      alt: "Operations & Client Engagement",
      itemClass: "",
      imageClass: "object-center"
    },
    {
      src: "/assets/img/IMG_7893.jpg",
      alt: "Al Noor Community & Administrative Operations",
      itemClass: "",
      imageClass: "object-center"
    }

    /* 
      Commented out per request (kept in codebase for future reference):
      { src: "/assets/img/new/DSC00525.webp", alt: "Nelly at Cloud Spaces", itemClass: "md:col-span-2 md:row-span-2", imageClass: "object-[center_34%]" },
      { src: "/assets/img/new/JI2_0687.webp", alt: "Nelly in a helicopter cabin", itemClass: "md:col-span-2", imageClass: "object-[center_42%]" },
      { src: "/assets/img/new/JI2_0648.webp", alt: "Nelly walking outdoors in a blue suit", itemClass: "", imageClass: "object-[center_30%]" },
      { src: "/assets/img/new/JI2_0649.webp", alt: "Nelly outdoors with phone in hand", itemClass: "", imageClass: "object-[center_28%]" },
      { src: "/assets/img/new/JI2_0693.webp", alt: "Nelly smiling inside a helicopter cabin", itemClass: "md:col-span-2", imageClass: "object-[center_42%]" },
      { src: "/assets/img/main2.webp", alt: "Nelly portrait", itemClass: "", imageClass: "object-[center_20%]" }
    */
  ];

  const mobilePreviewCount = 6;
  const mobileHiddenCount = galleryImages.length - mobilePreviewCount;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-surface">
        <div className="max-w-[1200px] mx-auto px-5 md:px-6">
          <div className="flex flex-col lg:flex-row min-h-[85vh] items-stretch gap-8 pt-8 lg:pt-0">
            
            {/* Left: Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center py-10 lg:py-0 pr-0 lg:pr-16 z-10 order-2 lg:order-1">
              <motion.div 
                className="space-y-8 max-w-xl"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                }}
              >
                <motion.div variants={fadeIn} className="flex items-center gap-3">
                  <span className="w-12 h-[1px] bg-secondary"></span>
                  <span className="font-label-md uppercase tracking-[0.2em] text-secondary">Real Estate Operations & Client Relations</span>
                </motion.div>
                
                <motion.h1 variants={fadeIn} className="font-display-lg-mobile lg:font-display-lg text-primary leading-tight">
                  Nelly Nzula <br/>
                  <span className="italic font-light">Musyoka.</span>
                </motion.h1>
                
                <motion.p variants={fadeIn} className="font-body-lg text-on-surface-variant leading-relaxed">
                  I am a versatile and results-driven professional based in Dubai, specializing in real estate operations, client relations, administrative efficiency, and event coordination with an entrepreneurial edge. I help businesses grow through proactive operational support and a client-focused mindset.
                </motion.p>
                
                <motion.div variants={fadeIn} className="flex flex-wrap gap-4 pt-4">
                  <button 
                    onClick={() => window.location.hash = '#/cases'}
                    className="px-8 py-4 bg-secondary text-on-primary font-label-md rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                  >
                    EXPLORE CASE STUDIES
                  </button>
                  <button 
                    onClick={() => window.location.hash = '#/contact'}
                    className="px-8 py-4 border-[1.5px] border-primary text-primary font-label-md rounded-lg hover:bg-primary/5 transition-all duration-300 w-full sm:w-auto"
                  >
                    GET IN TOUCH
                  </button>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Right: Image */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-0 order-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 lg:-inset-y-12 lg:right-0 lg:left-8 bg-surface-container-low rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  alt="Nelly Nzula Musyoka" 
                  className="w-full h-full object-cover" 
                  src="/assets/img/main.png"
                />
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute bottom-8 left-8 p-6 bg-surface/90 backdrop-blur-md rounded-xl max-w-xs border border-secondary/20 shadow-xl hidden lg:block"
                >
                  <p className="font-label-md text-[12px] uppercase tracking-widest text-secondary mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    Philosophy
                  </p>
                  <p className="font-headline-sm text-primary">"Business is built on the strength of our shared trust."</p>
                </motion.div>
                
                {/* Mobile text overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-6 lg:hidden">
                  <h1 className="font-display-lg-mobile text-on-primary mb-2">Nelly Nzula Musyoka</h1>
                  <p className="font-body-lg text-white/80">Elevating brand loyalty through intentional guest relations.</p>
                </div>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 lg:py-24 bg-surface-container-low">
        <div className="max-w-[1200px] mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Workspace & Team Photo Collage */}
            <div className="col-span-1 lg:col-span-5 relative py-8 lg:py-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-md mx-auto aspect-[4/3]"
              >
                {/* Main Image: Cloud Spaces Workspace */}
                <div 
                  className="w-full h-full rounded-2xl overflow-hidden shadow-lg border border-outline/5 cursor-zoom-in"
                  onClick={() => onViewImage("/assets/img/Cloud Spaces.jpeg")}
                >
                  <img 
                    src="/assets/img/Cloud Spaces.jpeg" 
                    alt="Cloud Spaces Workspace" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlapping Image 1: Theron Vacation Homes Hospitality (Bottom Left) */}
                <div 
                  className="absolute w-[60%] aspect-[4/3] -bottom-8 -left-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-surface-container-low hidden sm:block cursor-zoom-in"
                  onClick={() => onViewImage("/assets/img/TheronVacationHomes.png")}
                >
                  <img 
                    src="/assets/img/TheronVacationHomes.png" 
                    alt="Theron Vacation Homes" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </div>

                {/* Overlapping Image 2: Executive Desk Photo (Top Right) */}
                <div 
                  className="absolute w-[50%] aspect-[4/3] -top-8 -right-8 rounded-2xl overflow-hidden shadow-xl border-4 border-surface-container-low hidden sm:block cursor-zoom-in"
                  onClick={() => onViewImage("/assets/img/IMG_9020.jpg")}
                >
                  <img 
                    src="/assets/img/IMG_9020.jpg" 
                    alt="Nelly Executive Operations" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-[center_22%]"
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Right: Biography Narrative & Impact Highlights */}
            <div className="col-span-1 lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <span className="font-label-md text-secondary uppercase tracking-[0.2em] block">About Nelly</span>
                <h2 className="font-headline-md text-primary">High-Touch Relations Meets Operational Rigor</h2>
                <p className="font-body-lg text-secondary italic">
                  "Creating seamless, trusted client experiences where precision and warmth intersect."
                </p>
              </motion.div>
              
              {/* Stat Counters Banner */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-surface-container-lowest border border-outline/10 shadow-sm"
              >
                <div className="text-center sm:text-left">
                  <p className="font-display-sm text-secondary font-bold">100%</p>
                  <p className="font-label-md text-[11px] sm:text-xs uppercase tracking-wider text-on-surface-variant">Sales Target Met</p>
                </div>
                <div className="text-center sm:text-left border-x border-outline/10 px-3 sm:px-4">
                  <p className="font-display-sm text-secondary font-bold">+20%</p>
                  <p className="font-label-md text-[11px] sm:text-xs uppercase tracking-wider text-on-surface-variant">Repeat Bookings</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-display-sm text-secondary font-bold">95%</p>
                  <p className="font-label-md text-[11px] sm:text-xs uppercase tracking-wider text-on-surface-variant">Client Retention</p>
                </div>
              </motion.div>

              {/* Structured Key Focus Cards */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="space-y-4"
              >
                <div className="p-5 rounded-xl bg-surface border border-outline/10 hover:border-secondary/30 transition-all duration-300 shadow-xs">
                  <h4 className="font-headline-sm text-primary text-base mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    Client Relations & Workspace Operations, Cloud Spaces Dubai
                  </h4>
                  <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                    Lead daily client engagement, conduct center tours, manage CRM pipelines, and oversee onboarding cycles for corporate office suites at our flagship Dubai Mall Fountain Views location.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface border border-outline/10 hover:border-secondary/30 transition-all duration-300 shadow-xs">
                  <h4 className="font-headline-sm text-primary text-base mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    Executive Operations & VIP Liaison, Off-Market Listing Dubai
                  </h4>
                  <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                    Streamlined executive calendars, managed property viewing itineraries, and acted as primary operational liaison between brokers, property owners, and high-net-worth clients.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface border border-outline/10 hover:border-secondary/30 transition-all duration-300 shadow-xs">
                  <h4 className="font-headline-sm text-primary text-base mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    Hospitality & Admissions Support, Theron Homes & Al Noor
                  </h4>
                  <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                    Managed multi-channel guest experiences generating +20% repeat bookings, and coordinated parent correspondence and confidential records retrieval with 100% accuracy.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pt-2"
              >
                <button 
                  onClick={() => window.location.hash = '#/resume'}
                  className="px-8 py-4 bg-secondary text-on-primary font-label-md rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                >
                  VIEW RESUME & DETAILED EXPERIENCE
                </button>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="w-full py-16 lg:py-24 bg-surface-container-lowest">
        <div className="max-w-[1200px] mx-auto px-5 md:px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col lg:flex-row justify-between items-end mb-12 lg:mb-16 gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="font-headline-md text-primary mb-4">Core Expertise</h2>
              <p className="font-body-md text-on-surface-variant">A multi-disciplinary approach to organizational health and commercial success, rooted in decade-long experience and a commitment to excellence.</p>
            </div>
            <div className="hidden lg:block text-right">
              <span className="text-[80px] font-bold text-primary/5 select-none leading-none tracking-tighter">01 - 03</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Building Strong Relationships", desc: "Establishing high-trust environments with stakeholders and clients. I focus on long-term value creation through empathetic communication and consistent delivery." },
              { icon: TrendingUp, title: "Sales & Business Growth", desc: "Driving revenue through strategic market positioning and consultative sales processes. Turning business objectives into actionable, scalable growth engines." },
              { icon: Layers, title: "Organization & Problem Solving", desc: "Streamlining operations and navigating complex roadblocks. I bring a calm, analytical perspective to messy problems, ensuring teams remain focused and efficient." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-8 lg:p-10 bg-surface border border-outline/10 rounded-xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-6 lg:mb-8 group-hover:bg-secondary group-hover:text-on-primary transition-colors duration-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-headline-sm text-primary mb-4">{item.title}</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="w-full py-16 lg:py-24 bg-surface">
        <div className="max-w-[1200px] mx-auto px-5 md:px-6">
          <div className="flex justify-between items-center mb-12 lg:mb-16">
            <div>
              <span className="font-label-md text-secondary uppercase tracking-[0.2em] block mb-2 font-semibold">Selected Case Studies</span>
              <h2 className="font-headline-md text-primary">Featured Work & Operational Impact</h2>
            </div>
            <button 
              onClick={() => {
                if (setCurrentPage) setCurrentPage('cases');
                else window.location.hash = '#/cases';
              }}
              className="group hidden sm:flex items-center gap-2 font-label-md text-secondary uppercase tracking-widest hover:gap-4 transition-all"
            >
              View all projects
              <ArrowRight className="w-[18px] h-[18px]" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TiltCard
                  className="group flex flex-col bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-outline/10 hover:border-secondary/30 cursor-pointer h-full"
                  onClick={() => {
                    if (setActiveStudyId) setActiveStudyId(project.id);
                    if (setCurrentPage) setCurrentPage('cases');
                  }}
                >
                  {/* Image Banner */}
                  <div className="w-full h-[220px] overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full object-cover ${project.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-700`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="font-label-md text-secondary uppercase tracking-widest text-[11px] block mb-1 font-semibold">{project.category}</span>
                      <h3 className="font-headline-sm text-white text-xl font-bold">{project.title}</h3>
                      <p className="font-body-md text-white/80 text-xs">{project.role}</p>
                    </div>
                  </div>
                  
                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <p className="font-body-md text-on-surface-variant text-sm leading-relaxed line-clamp-3">
                      {project.situation}
                    </p>
                    
                    {/* Clean Footer Link */}
                    <div className="pt-4 border-t border-outline/10 flex items-center justify-between group-hover:text-secondary transition-colors">
                      <span className="font-label-md text-primary font-bold text-xs uppercase tracking-widest group-hover:text-secondary">
                        Read Full Case Study
                      </span>
                      <div className="w-8 h-8 rounded-full bg-primary/5 group-hover:bg-secondary group-hover:text-on-secondary flex items-center justify-center transition-colors">
                        <ArrowRight className="w-4 h-4 text-primary group-hover:text-on-secondary transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Career Timeline Section */}
      <section className="w-full py-16 lg:py-24 bg-surface-container-low border-y border-outline/10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-label-md text-secondary uppercase tracking-[0.2em] block mb-2 font-semibold">Career Journey</span>
            <h2 className="font-headline-md text-primary mb-3">Interactive Career Timeline</h2>
            <p className="font-body-md text-on-surface-variant">Click any milestone below to interactively explore Nelly's role evolution across Dubai's leading organizations.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Timeline Nodes (Left) */}
            <div className="col-span-1 lg:col-span-5 space-y-4">
              {[
                { id: '01', year: '2024 - Present', title: 'Cloud Spaces Dubai', subtitle: 'Client Relations Specialist' },
                { id: '02', year: '2023 - 2024', title: 'Off-Market Listing', subtitle: 'Executive Operations Manager' },
                { id: '03', year: '2022 - 2023', title: 'Theron Vacation Homes', subtitle: 'Guest Experience Manager' },
                { id: '04', year: '2021 - 2022', title: 'Al Noor Welfare Association', subtitle: 'Student Admissions Specialist' },
              ].map((item) => (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveTimelineId(item.id)}
                  whileHover={{ x: 6 }}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    activeTimelineId === item.id
                      ? 'bg-surface border-secondary shadow-lg scale-[1.02]'
                      : 'bg-surface/50 border-outline/10 hover:border-outline/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`w-3 h-3 rounded-full bg-secondary ${activeTimelineId === item.id ? 'animate-pulse ring-4 ring-secondary/20' : ''}`} />
                      <div>
                        <span className="font-label-md text-xs text-secondary font-bold tracking-wider">{item.year}</span>
                        <h4 className="font-headline-sm text-primary text-base font-bold">{item.title}</h4>
                        <p className="font-body-md text-xs text-on-surface-variant">{item.subtitle}</p>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeTimelineId === item.id ? 'text-secondary translate-x-1' : 'text-on-surface-variant/40'}`} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Expanded Milestone Details Card (Right) */}
            <div className="col-span-1 lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTimelineId}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-3xl bg-surface border border-secondary/20 shadow-xl space-y-6"
                >
                  {activeTimelineId === '01' && (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                          <Building className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">2024 - Present • Flagship Coworking</span>
                          <h3 className="font-headline-md text-primary text-2xl font-bold">Cloud Spaces Dubai Mall</h3>
                        </div>
                      </div>
                      <p className="font-body-md text-on-surface-variant leading-relaxed">
                        Leading corporate office tours, CRM pipeline management, member onboarding, and workspace client retention at Cloud Spaces flagship Fountain Views center.
                      </p>
                      <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-surface-container-lowest border border-outline/10">
                        <div>
                          <p className="font-display-xs text-secondary font-bold">100%</p>
                          <p className="font-label-md text-xs text-on-surface-variant">Sales Target Achieved</p>
                        </div>
                        <div>
                          <p className="font-display-xs text-secondary font-bold">95%</p>
                          <p className="font-label-md text-xs text-on-surface-variant">Member Retention Rate</p>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTimelineId === '02' && (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                          <Briefcase className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">2023 - 2024 • Luxury Real Estate</span>
                          <h3 className="font-headline-md text-primary text-2xl font-bold">Off-Market Listing Dubai</h3>
                        </div>
                      </div>
                      <p className="font-body-md text-on-surface-variant leading-relaxed">
                        Managed executive calendars, coordinated property viewing itineraries, organized transaction records, and served as primary liaison between VIP clients, owners, and brokers.
                      </p>
                      <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-surface-container-lowest border border-outline/10">
                        <div>
                          <p className="font-display-xs text-secondary font-bold">0</p>
                          <p className="font-label-md text-xs text-on-surface-variant">Missed Viewings</p>
                        </div>
                        <div>
                          <p className="font-display-xs text-secondary font-bold">100%</p>
                          <p className="font-label-md text-xs text-on-surface-variant">Calendar Coordination</p>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTimelineId === '03' && (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                          <Handshake className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">2022 - 2023 • Hospitality</span>
                          <h3 className="font-headline-md text-primary text-2xl font-bold">Theron Vacation Homes</h3>
                        </div>
                      </div>
                      <p className="font-body-md text-on-surface-variant leading-relaxed">
                        Oversaw stay lifecycles across Airbnb, Booking.com, and VRBO, coordinated housekeeping, and delivered 5-star service for high-touch guest experiences.
                      </p>
                      <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-surface-container-lowest border border-outline/10">
                        <div>
                          <p className="font-display-xs text-secondary font-bold">5.0 ★</p>
                          <p className="font-label-md text-xs text-on-surface-variant">Average Review Rating</p>
                        </div>
                        <div>
                          <p className="font-display-xs text-secondary font-bold">+20%</p>
                          <p className="font-label-md text-xs text-on-surface-variant">Repeat Guest Bookings</p>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTimelineId === '04' && (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">2021 - 2022 • Education Administration</span>
                          <h3 className="font-headline-md text-primary text-2xl font-bold">Al Noor Rehabilitation Center</h3>
                        </div>
                      </div>
                      <p className="font-body-md text-on-surface-variant leading-relaxed">
                        Supervised front desk operations, managed student records database with 100% accuracy, and coordinated parent-teacher scheduling across multidisciplinary departments.
                      </p>
                      <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-surface-container-lowest border border-outline/10">
                        <div>
                          <p className="font-display-xs text-secondary font-bold">100%</p>
                          <p className="font-label-md text-xs text-on-surface-variant">Database Accuracy</p>
                        </div>
                        <div>
                          <p className="font-display-xs text-secondary font-bold">-40%</p>
                          <p className="font-label-md text-xs text-on-surface-variant">Response Delay Reduction</p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-16 lg:py-24 bg-surface-container-low border-y border-outline/5">
        <div className="max-w-[1200px] mx-auto px-5 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10 lg:mb-14"
          >
            <div className="max-w-2xl">
              <span className="font-label-md text-secondary uppercase tracking-[0.2em] block mb-3">Gallery</span>
              <h2 className="font-headline-md text-primary mb-4">Professional Presence in Motion</h2>
              <p className="font-body-md text-on-surface-variant">
                A closer look at client-facing moments, polished workspaces, and the calm confidence behind Nelly's operations and relationship-led work.
              </p>
            </div>
            <span className="font-label-md text-primary/50 uppercase tracking-widest">{galleryImages.length} photos</span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[230px] gap-4 lg:gap-5">
            {galleryImages.map((image, index) => (
              <motion.button
                key={image.src}
                type="button"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => onViewImage(image.src)}
                className={`group relative min-h-[260px] md:min-h-0 overflow-hidden rounded-xl border border-outline/10 bg-surface shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in ${!showAllGalleryPhotos && index >= mobilePreviewCount ? 'hidden md:block' : ''} ${image.itemClass}`}
                aria-label={`View ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className={`w-full h-full object-cover ${image.imageClass} group-hover:scale-105 transition-transform duration-700`}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {!showAllGalleryPhotos && index === mobilePreviewCount - 1 && mobileHiddenCount > 0 && (
                  <span className="md:hidden absolute inset-0 bg-primary/70 backdrop-blur-[2px] flex items-center justify-center text-on-primary font-headline-sm">
                    +{mobileHiddenCount} more
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          {mobileHiddenCount > 0 && (
            <div className="md:hidden mt-6">
              <button
                type="button"
                onClick={() => setShowAllGalleryPhotos((value) => !value)}
                className="w-full px-6 py-4 bg-secondary text-on-primary font-label-md rounded-lg shadow-sm transition-all duration-300"
              >
                {showAllGalleryPhotos ? 'SHOW FEWER PHOTOS' : `SHOW ALL ${galleryImages.length} PHOTOS`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 lg:py-24 bg-primary text-on-primary">
        <div className="max-w-[1200px] mx-auto px-5 md:px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="font-display-lg-mobile lg:font-display-lg">Ready to build something lasting?</h2>
            <p className="font-body-lg opacity-80">
              Whether you're looking to scale your business operations or need a strategic partner for high-level relationship management, let's start with a conversation.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => window.location.hash = '#/contact'}
                className="px-10 py-5 bg-secondary text-on-primary font-label-md rounded-lg shadow-lg hover:shadow-secondary/20 transition-all"
              >
                BOOK A CONSULTATION
              </button>
              <button 
                onClick={() => window.location.hash = '#/resume'}
                className="px-10 py-5 border border-on-primary/20 hover:bg-on-primary/10 text-on-primary font-label-md rounded-lg transition-all"
              >
                VIEW RESUME
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
