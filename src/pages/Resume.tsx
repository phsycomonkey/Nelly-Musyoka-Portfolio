import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function Resume() {
    const experiences = [
    {
      period: "Current",
      company: "Cloud Spaces",
      title: "Guest Relations & Client Relations Executive / Sales & Operations",
      desc: "Managing client inquiries, coordinating requests, and working closely with internal teams to ensure client needs are addressed promptly. Consistently focusing on improving the client experience by enhancing communication, follow-ups, and service delivery.",
      bullets: [
        "Organized leads and communicated with prospects effectively, increasing conversions and meeting monthly sales targets.",
        "Strengthened client relationships and improved client satisfaction by providing personalized support and maintaining clear communication."
      ]
    },
    {
      period: "Previous",
      company: "Off Market Listing",
      title: "Executive Assistant",
      desc: "Identified challenges in coordinating property viewings, managing client communication, and ensuring a smooth process from the initial viewing stage through to the final sale.",
      bullets: [
        "Created a more organized process for managing property viewings, client communication, and follow-ups.",
        "Coordinated schedules between clients and property owners, ensuring all details were communicated clearly.",
        "Reduced delays and supported successful property transactions by keeping schedules organized."
      ]
    },
    {
      period: "Previous",
      company: "Alnoor Training Center",
      title: "Student Affairs Secretary",
      desc: "Addressed gaps in parent communication, record management, and follow-up processes that affected the efficiency of support services.",
      bullets: [
        "Improved the organization of parent requests and maintained accurate records.",
        "Built strong relationships with parents through clear and consistent communication.",
        "Reduced delays and created a smoother support experience for families by coordinating closely with different departments."
      ]
    },
    {
      period: "Previous",
      company: "Theron Vacation Homes",
      title: "Guest Relations",
      desc: "Improved communication by following up with guests, addressing concerns quickly, and coordinating with internal teams to resolve issues.",
      bullets: [
        "Managed guest and client inquiries, following up on requests to resolve concerns efficiently.",
        "Provided personalized support to ensure a smooth and positive experience.",
        "Encouraged repeat business and referrals through smoother guest experiences and improved satisfaction."
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Header */}
      <section className="max-w-[1200px] mx-auto px-5 lg:px-6 py-12 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8"
          >
            <span className="font-label-md text-secondary uppercase tracking-[0.2em] mb-4 block">Curriculum Vitae</span>
            <h1 className="font-display-lg-mobile lg:font-display-lg text-primary max-w-3xl leading-tight">
              Professional Resume
            </h1>
            <p className="font-body-lg text-on-surface-variant mt-6 max-w-2xl">
              A highly organized and detail-oriented administrative professional with extensive experience in client relations, executive assistance, and operations management. Proven track record of improving communication workflows, enhancing customer satisfaction, and ensuring seamless operational delivery across real estate, education, and workspace management sectors.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 flex lg:justify-end pb-4"
          >
            <button className="group relative inline-flex items-center gap-3 bg-secondary px-8 py-4 rounded-full overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-secondary/20">
              <span className="font-label-md text-on-primary relative z-10">Download Full CV</span>
              <Download className="w-[18px] h-[18px] text-on-primary relative z-10 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Core Expertise Tags */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 lg:mt-16 flex flex-wrap gap-2 lg:gap-3"
        >
          {['Product Strategy', 'Design Leadership', 'User Research', 'Cloud Ecosystems', 'Stakeholder Management', 'Cross-functional Collaboration'].map(tag => (
            <span key={tag} className="px-5 lg:px-6 py-2 bg-surface-container-high rounded-full font-label-md text-primary cursor-default hover:bg-primary-container hover:text-on-primary-container transition-colors">
              {tag}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="bg-surface-container-low py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
            <div className="lg:col-span-3">
              <div className="lg:sticky top-32">
                <h2 className="font-headline-md text-primary mb-4 lg:mb-6">Professional Journey</h2>
                <p className="font-body-md text-on-surface-variant max-w-[240px]">
                  A decade of experience bridging the gap between technical complexity and intuitive user experiences.
                </p>
                <div className="mt-12 hidden lg:block">
                  <div className="w-px h-32 bg-gradient-to-b from-secondary to-transparent ml-4 opacity-30"></div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-9 flex flex-col gap-8 lg:gap-12">
              {experiences.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-surface p-6 lg:p-12 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row gap-6 lg:gap-8 overflow-hidden"
                >
                  <div className="md:w-1/4">
                    <span className="font-label-md text-secondary tracking-widest uppercase block mb-2">{exp.period}</span>
                    <h3 className="font-headline-sm text-primary">{exp.company}</h3>
                    <p className="font-body-md text-on-surface-variant italic mt-1">{exp.title}</p>
                  </div>
                  <div className="md:w-3/4 flex flex-col gap-4 lg:gap-6">
                    <p className="font-body-lg text-on-surface leading-relaxed">
                      {exp.desc}
                    </p>
                    
                    {exp.bullets && (
                      <ul className="flex flex-col gap-3">
                        {exp.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0"></span>
                            <span className="font-body-md text-on-surface-variant">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {exp.stats && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                        {exp.stats.map((stat, j) => (
                          <div key={j} className="bg-surface-container p-4 rounded-lg">
                            <span className="font-headline-sm text-primary block">{stat.value}</span>
                            <span className="font-label-md text-on-surface-variant uppercase">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Recognition */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <h2 className="font-headline-md text-primary mb-8 lg:mb-12 border-b-2 border-primary/10 pb-4 inline-block">Education</h2>
              <div className="flex flex-col gap-8 lg:gap-10">
                <div>
                  <span className="font-label-md text-secondary">2014</span>
                  <h4 className="font-headline-sm text-primary mt-1">MA in Human-Computer Interaction</h4>
                  <p className="font-body-md text-on-surface-variant mt-1">University of Design & Tech</p>
                </div>
                <div>
                  <span className="font-label-md text-secondary">2012</span>
                  <h4 className="font-headline-sm text-primary mt-1">BA in Visual Communication</h4>
                  <p className="font-body-md text-on-surface-variant mt-1">Global Arts Institute</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-headline-md text-primary mb-8 lg:mb-12 border-b-2 border-primary/10 pb-4 inline-block">Recognition</h2>
              <div className="flex flex-col gap-6 lg:gap-8">
                {[
                  { award: "Red Dot Award: Interface Design", desc: "Cloud Spaces Dashboard Implementation", year: "2023" },
                  { award: "UX Design Awards Nominee", desc: "Off Market Listing App Concept", year: "2020" },
                  { award: "Awwwards Honorable Mention", desc: "Digital Vanguard Corporate Website", year: "2017" }
                ].map((rec, i) => (
                  <div key={i} className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 -mx-4 hover:bg-surface-container transition-colors rounded-xl gap-2">
                    <div>
                      <h4 className="font-label-md text-primary uppercase tracking-wider">{rec.award}</h4>
                      <p className="font-body-md text-on-surface-variant">{rec.desc}</p>
                    </div>
                    <span className="font-label-md text-secondary">{rec.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
