import { motion } from 'motion/react';
import { Heart, TrendingUp, Layers, ArrowRight } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
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
                    onClick={() => setCurrentPage('cases')}
                    className="px-8 py-4 bg-secondary text-on-primary font-label-md rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                  >
                    EXPLORE CASE STUDIES
                  </button>
                  <button 
                    onClick={() => setCurrentPage('contact')}
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
              onClick={() => setCurrentPage('cases')}
              className="group flex items-center gap-2 font-label-md text-secondary uppercase tracking-widest hover:gap-4 transition-all"
            >
              View all projects
              <ArrowRight className="w-[18px] h-[18px]" />
            </button>
          </div>

          <div className="space-y-8 lg:space-y-12">
            {[
              {
                tag: "Commercial Strategy",
                title: "Global Expansion: The Relationship Framework",
                desc: "A comprehensive case study on scaling a luxury hospitality brand across three continents while maintaining a personal, boutique feel for every high-net-worth client.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1zoWclPSQ8WVnczdYWnxvdKFwVfwZVB2lvlkzner_TzPiOcCvxE90lcVVUJxdDCoBtnd3ZcbskF7wX_gbuSdpMEJqWD-50hiWjEq6ghi9iGVbTii2hmMMo9aTJJPSuKitvvtlBTBwPn7xGQFsuoIVVo9LsAIz1pgFHHyjA3b5xxCGylbbPM1sHn8LMql7kGCzzgJ1aTACf0mXLVXG1tEg4lW0kbsJzA19pKKEdqhWwDwu6vBwzoR68xyMKHH1hhKVGIH2r39qHbA",
                reverse: false
              },
              {
                tag: "Retention & Care",
                title: "Optimizing Client Success Workflows",
                desc: "How we restructured a failing account management department into a high-performing retention engine, increasing LTV by 45% in twelve months through emotional intelligence training and process automation.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCJcXpgl8fUvctsJcsCH2b6gm7r82jP2A5AHGWU4Y-4JWVdvMjnB6yOwgXETA6xrSMJI5Hkpb0r8AkPXNm2rF5I7p0qJ8OAxfJD1mADTk6qWO0DS4nSNk86HEjIrfWc-tGGkW9cdCDOJJBPubdyrU4lWumS4IvM2QrGZn3Teum6sDfgWUm8wUh6nFpRfoYpfVFMZ6SGVLatMGF3x9xI7QTPjoYXs8hZn7FWypd_JBZqoEsavxd4Y53OpQAKn8qbQeFVPQm8LjyINU",
                reverse: true
              }
            ].map((work, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${work.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-surface-container rounded-2xl overflow-hidden group`}
              >
                <div className="w-full lg:w-3/5 overflow-hidden h-64 lg:h-[450px]">
                  <img 
                    src={work.img} 
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4 lg:mb-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-label-md text-[12px] tracking-wider uppercase">
                      {work.tag}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-primary mb-4 lg:mb-6">{work.title}</h3>
                  <p className="font-body-md text-on-surface-variant mb-6 lg:mb-8 line-clamp-3">
                    {work.desc}
                  </p>
                  <button className="inline-flex items-center text-primary font-label-md font-bold group/link self-start">
                    READ CASE STUDY 
                    <ArrowRight className="w-[18px] h-[18px] ml-2 transition-transform group-hover/link:translate-x-1" />
                  </button>
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
                onClick={() => setCurrentPage('contact')}
                className="px-10 py-5 bg-secondary text-on-primary font-label-md rounded-lg shadow-lg hover:shadow-secondary/20 transition-all"
              >
                BOOK A CONSULTATION
              </button>
              <button 
                onClick={() => setCurrentPage('resume')}
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
