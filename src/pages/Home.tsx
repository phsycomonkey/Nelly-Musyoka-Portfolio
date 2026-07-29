import { motion } from 'motion/react';
import { Heart, TrendingUp, Layers, ArrowRight } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
  setActiveStudyId?: (id: string | null) => void;
}

export default function Home({ setCurrentPage, setActiveStudyId }: HomeProps) {

  const featuredProjects = [
    {
      id: "01",
      category: "Workspace Management",
      title: "Cloud Spaces",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
      situation: "Inconsistent follow-ups with potential members after workspace tours led to a noticeable gap in conversion rates and missed sales opportunities."
    },
    {
      id: "02",
      category: "Hospitality",
      title: "Theron Vacation Homes",
      image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=800",
      situation: "Guests required faster response times and a higher degree of personalized support to feel fully accommodated throughout their stay."
    },
    {
      id: "03",
      category: "Education",
      title: "Alnoor Training Center",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800",
      situation: "Gaps in parent communication and record management were causing delays in administrative support services."
    },
    {
      id: "04",
      category: "Real Estate",
      title: "Off Market Listing",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
      situation: "Coordinating property viewings and managing client communications lacked a unified process, risking costly delays throughout the sales cycle."
    },
    {
      id: "05",
      category: "Workspace Management",
      title: "Cloud Spaces",
      image: "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?auto=format&fit=crop&q=80&w=800",
      situation: "We needed to consistently refine the client experience to ensure high retention rates and seamless daily service delivery."
    }
  ];

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
                  <span className="font-label-md uppercase tracking-[0.2em] text-secondary">Strategic Leadership</span>
                </motion.div>
                
                <motion.h1 variants={fadeIn} className="font-display-lg-mobile lg:font-display-lg text-primary leading-tight">
                  Steady expertise. <br/>
                  <span className="italic font-light">Approachable warmth.</span>
                </motion.h1>
                
                <motion.p variants={fadeIn} className="font-body-lg text-on-surface-variant leading-relaxed">
                  I specialize in bridging the gap between ambitious business goals and the human connections that make them possible. With a focus on relationship-first strategy, I help organizations navigate complex growth challenges through proactive problem-solving and authentic engagement.
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
                  src="https://lh3.googleusercontent.com/aida/AP1WRLvZA_-xekRoL9Fx8eZdsPvqSPB_CishVVAez4BWlqu95MrX--ZApWyH7hXZF1x8I3ZU2tLMIlFLotqBTJo_AdJDrpHW56pbRosavyddoyWaGFKZQuxFv7LgBdYVYZI7HoyQC3YwBuxbAFWITCuKERDXJS29tMpHvfrp8NsfHvSlCNwxxlj_jlooIOMWnaWAbwreD9xwvGmXq1B91bDMYRYab3BWkOUUdhvD0RwWuBEdQVrUmwuHYRIrsQ"
                />
                <div className="absolute bottom-8 left-8 p-6 bg-surface/90 backdrop-blur-md rounded-xl max-w-xs border border-primary/5 hidden lg:block">
                  <p className="font-label-md text-[12px] uppercase tracking-widest text-secondary mb-2">Philosophy</p>
                  <p className="font-headline-sm text-primary">"Business is built on the strength of our shared trust."</p>
                </div>
                
                {/* Mobile text overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-6 lg:hidden">
                  <h1 className="font-display-lg-mobile text-on-primary mb-2">Nelly Nzula Musyoka</h1>
                  <p className="font-body-lg text-primary-fixed-dim">Elevating brand loyalty through intentional guest relations.</p>
                </div>
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
              onClick={() => window.location.hash = '#/cases/' + project.id}
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
                      <ArrowRight className="w-4 h-4 text-primary group-hover:text-secondary transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
