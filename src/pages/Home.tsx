import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, TrendingUp, Layers, ArrowRight } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
  setActiveStudyId?: (id: string | null) => void;
  onViewImage: (imgUrl: string) => void;
  isImageExpanded: boolean;
}

export default function Home({ setCurrentPage, setActiveStudyId, onViewImage, isImageExpanded }: HomeProps) {
  const [showAllGalleryPhotos, setShowAllGalleryPhotos] = useState(false);

  const featuredProjects = [
    {
      id: "01",
      category: "Workspace Management",
      title: "Cloud Spaces",
      image: "/assets/img/Cloud Spaces.jpeg",
      situation: "Inconsistent follow-ups with potential members after workspace tours led to a noticeable gap in conversion rates and missed sales opportunities."
    },
    {
      id: "02",
      category: "Hospitality",
      title: "Theron Vacation Homes",
      image: "/assets/img/TheronVacationHomes.png",
      imagePosition: "object-[center_30%]",
      situation: "Guests required faster response times and a higher degree of personalized support to feel fully accommodated throughout their stay."
    },
    {
      id: "03",
      category: "Education",
      title: "Alnoor Training Center",
      image: "/assets/img/IMG_7893.jpg",
      situation: "Gaps in parent communication and record management were causing delays in administrative support services."
    },
    {
      id: "04",
      category: "Real Estate",
      title: "Off Market Listing",
      image: "/assets/img/OffMarketListing.jpg",
      situation: "Coordinating property viewings and managing client communications lacked a unified process, risking costly delays throughout the sales cycle."
    }
  ];

  const galleryImages = [
    {
      src: "/assets/img/new/DSC00525.jpg.jpeg",
      alt: "Nelly at Cloud Spaces",
      itemClass: "md:col-span-2 md:row-span-2",
      imageClass: "object-[center_34%]"
    },
    {
      src: "/assets/img/new/DSC00621.jpg.jpeg",
      alt: "Professional portrait of Nelly",
      itemClass: "md:row-span-2",
      imageClass: "object-[center_18%]"
    },
    {
      src: "/assets/img/new/JI2_0687.JPG.jpeg",
      alt: "Nelly in a helicopter cabin",
      itemClass: "md:col-span-2",
      imageClass: "object-[center_42%]"
    },
    {
      src: "/assets/img/new/JI2_0648.JPG.jpeg",
      alt: "Nelly walking outdoors in a blue suit",
      itemClass: "",
      imageClass: "object-[center_30%]"
    },
    {
      src: "/assets/img/new/DSC00616.jpg.jpeg",
      alt: "Seated professional portrait of Nelly",
      itemClass: "md:row-span-2",
      imageClass: "object-[center_16%]"
    },
    {
      src: "/assets/img/new/JI2_0649.JPG.jpeg",
      alt: "Nelly outdoors with phone in hand",
      itemClass: "",
      imageClass: "object-[center_28%]"
    },
    {
      src: "/assets/img/new/JI2_0693.JPG.jpeg",
      alt: "Nelly smiling inside a helicopter cabin",
      itemClass: "md:col-span-2",
      imageClass: "object-[center_42%]"
    },
    {
      src: "/assets/img/Cloud Spaces.jpeg",
      alt: "Cloud Spaces workspace",
      itemClass: "md:col-span-2",
      imageClass: "object-center"
    },
    {
      src: "/assets/img/TheronVacationHomes.png",
      alt: "Theron Vacation Homes",
      itemClass: "",
      imageClass: "object-[center_30%]"
    },
    {
      src: "/assets/img/OffMarketListing.jpg",
      alt: "Off Market Listing",
      itemClass: "",
      imageClass: "object-center"
    },
    {
      src: "/assets/img/claude3.jpeg",
      alt: "Portfolio image",
      itemClass: "",
      imageClass: "object-center"
    },
    {
      src: "/assets/img/claude2.jpeg",
      alt: "Portfolio image",
      itemClass: "",
      imageClass: "object-center"
    },
    {
      src: "/assets/img/main.png",
      alt: "Nelly portrait",
      itemClass: "md:row-span-2",
      imageClass: "object-[center_20%]"
    },
    {
      src: "/assets/img/main2.png",
      alt: "Nelly portrait",
      itemClass: "",
      imageClass: "object-[center_20%]"
    },
    {
      src: "/assets/img/IMG_9023.jpg",
      alt: "Portfolio photo",
      itemClass: "",
      imageClass: "object-center"
    },
    {
      src: "/assets/img/IMG_9020.jpg",
      alt: "Portfolio photo",
      itemClass: "",
      imageClass: "object-center"
    },
    {
      src: "/assets/img/IMG_8903.jpg",
      alt: "Portfolio photo",
      itemClass: "",
      imageClass: "object-center"
    },
    {
      src: "/assets/img/IMG_7952.jpg",
      alt: "Portfolio photo",
      itemClass: "",
      imageClass: "object-center"
    },
    {
      src: "/assets/img/IMG_7893.jpg",
      alt: "Portfolio photo",
      itemClass: "",
      imageClass: "object-center"
    },
    {
      src: "/assets/img/IMG_7891.jpg",
      alt: "Portfolio photo",
      itemClass: "",
      imageClass: "object-center"
    },
    {
      src: "/assets/img/IMG_1112.jpg",
      alt: "Portfolio photo",
      itemClass: "",
      imageClass: "object-center"
    },
    {
      src: "/assets/img/IMG_0999.jpg",
      alt: "Portfolio photo",
      itemClass: "",
      imageClass: "object-center"
    }
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
                <div className="absolute bottom-8 left-8 p-6 bg-surface/90 backdrop-blur-md rounded-xl max-w-xs border border-primary/5 hidden lg:block">
                  <p className="font-label-md text-[12px] uppercase tracking-widest text-secondary mb-2">Philosophy</p>
                  <p className="font-headline-sm text-primary">"Business is built on the strength of our shared trust."</p>
                </div>
                
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
                    className="w-full h-full object-cover object-[center_30%]"
                  />
                </div>

                {/* Overlapping Image 2: Moss Wall Team Photo (Top Right) */}
                <div 
                  className="absolute w-[50%] aspect-[4/3] -top-8 -right-8 rounded-2xl overflow-hidden shadow-xl border-4 border-surface-container-low hidden sm:block cursor-zoom-in"
                  onClick={() => onViewImage("/assets/img/IMG_9020.jpg")}
                >
                  <img 
                    src="/assets/img/IMG_9020.jpg" 
                    alt="Team at Moss Wall" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Right: Biography Narrative */}
            <div className="col-span-1 lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <span className="font-label-md text-secondary uppercase tracking-[0.2em] block">About Nelly</span>
                <p className="font-body-lg text-secondary italic">Real Estate Operations & Client Relations Specialist</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-body-md text-on-surface-variant leading-relaxed space-y-4"
              >
                <p>
                  My professional focus is centered on managing environments where operational efficiency and high-standard customer service intersect. With hands-on experience across flagship coworking workspaces, luxury hospitality portfolios, admissions administration, and executive real estate support, I specialize in streamlining calendar and communication workflows while building strong client relationships.
                </p>
                <p>
                  Currently, as a <strong>Client Relations Specialist at Cloud Spaces</strong>, I lead daily client engagement, conduct center tours, manage CRM pipelines, and oversee onboarding cycles for coworking members and corporate office suites at our flagship Dubai Mall Fountain Views location.
                </p>
                <p>
                  Throughout my journey, whether optimizing listings and calendars as an <strong>Executive Operations Manager at Off-Market Listing Dubai</strong>, coordinating guest relations for <strong>Theron Vacation Homes</strong>, or managing student admissions and front desk coordination at <strong>Al Noor Rehabilitation & Welfare Association</strong>, I have committed myself to operational efficiency, proactive problem-solving, and building high-trust partnerships.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pt-4"
              >
                <button 
                  onClick={() => window.location.hash = '#/resume'}
                  className="px-8 py-4 bg-secondary text-on-primary font-label-md rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                >
                  VIEW RESUME & EXPERIENCE
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
            <h2 className="font-headline-md text-primary">Featured Work</h2>
            <button 
              onClick={() => window.location.hash = '#/cases'}
              className="group flex items-center gap-2 font-label-md text-secondary uppercase tracking-widest hover:gap-4 transition-all"
            >
              View all projects
              <ArrowRight className="w-[18px] h-[18px]" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer border border-outline/5"
                onClick={() => window.location.hash = '#/cases/' + project.id}
              >
                <div className="w-full h-[240px] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`w-full h-full object-cover ${project.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-700`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="font-label-md text-secondary-container uppercase tracking-widest">{project.category}</span>
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
                      <ArrowRight className="w-4 h-4 text-primary group-hover:text-secondary transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
