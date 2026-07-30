import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function Resume() {
    const experiences = [
    {
      period: "Jul 2025 - Present",
      company: "Cloud Spaces",
      title: "Client Relations Specialist",
      desc: "Drive member retention, manage office operations, coordinate client onboarding, and conduct center tours at the flagship Dubai Mall Fountain Views location.",
      bullets: [
        "Lead daily client engagement, community tours, inquiries, and onboarding cycles for coworking members and corporate office suites.",
        "Manage CRM system updates and lead follow-up pipelines to drive sales conversions and workspace occupancy.",
        "Foster a vibrant coworking workspace culture and coordinate day-to-day operations with the Center Manager."
      ]
    },
    {
      period: "Mar 2025 - Jul 2025",
      company: "Freelance",
      title: "Short-Term Accommodation Coordinator",
      desc: "Managed bookings, guest relations, and logistics for short-term luxury accommodation properties in Dubai.",
      bullets: [
        "Coordinated guest check-ins, check-outs, and booking calendars across major travel portals.",
        "Handled guest communication, local logistics, and housekeeping schedules with high responsiveness."
      ]
    },
    {
      period: "Dec 2023 - Jul 2025",
      company: "Theron Vacation Homes",
      title: "Guest Experience Manager & Digital Marketing Specialist",
      desc: "Oversaw the guest support lifecycle, resolved stay issues, and managed digital booking platforms for a premium short-term rental portfolio.",
      bullets: [
        "Delivered high-touch guest relations, ensuring 5-star review ratings and driving guest satisfaction.",
        "Coordinated with housekeeping and maintenance teams to resolve property issues promptly.",
        "Managed property listings and guest communications on platforms like Airbnb, Booking.com, and VRBO."
      ]
    },
    {
      period: "Feb 2023 - Nov 2023",
      company: "Off-Market Listing Dubai",
      title: "Executive Operations Manager",
      desc: "Managed administrative operations, calendar workflows, and stakeholder communication for a high-end real estate listings firm.",
      bullets: [
        "Coordinated property transaction schedules and listing details across executive teams.",
        "Streamlined communications between real estate brokers, property owners, and prospective buyers.",
        "Optimized internal calendar management and file organization to reduce workflow friction."
      ]
    },
    {
      period: "Nov 2019 - Jan 2023",
      company: "Al Noor Rehabilitation & Welfare Association",
      title: "Front Desk Coordinator / Student Admissions & Records Specialist",
      desc: "Supervised front desk operations, coordinated parent communications, and managed student admissions and records database.",
      bullets: [
        "Managed student admissions database, files, and records retrieval with high precision and confidentiality.",
        "Led front desk reception, receptionist duties, administrative operations, and client coordination.",
        "Coordinated parent-teacher communications and scheduled administrative meetings across departments."
      ]
    },
    {
      period: "Mar 2017 - Jan 2018",
      company: "African Resort International",
      title: "Receptionist",
      desc: "Managed visitor reception, switchboard calls, and basic office administrative support.",
      bullets: [
        "Welcomed visitors and directed inquiries to appropriate departments with a professional and friendly approach.",
        "Managed incoming telephone calls and coordinated office mail and courier logistics."
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
              Helping businesses grow through operational support, client relations, administrative efficiency, and events coordination, with an entrepreneurial edge. A versatile and results-driven professional with over five years of experience based in Dubai, spanning real estate operations, hospitality, Admissions administration, and executive client support.
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
          {['Client Relations', 'Real Estate Operations', 'CRM & Calendar Management', 'Event Planning & Support', 'Guest Experience', 'Administrative Efficiency', 'Booking Coordination', 'Office Administration'].map(tag => (
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
                  Years of experience delivering seamless customer journeys, maximizing sales pipelines, and coordinating administrative workflows.
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
                  <span className="font-label-md text-secondary">2013</span>
                  <h4 className="font-headline-sm text-primary mt-1">Aviation/Airway Management and Operations</h4>
                  <p className="font-body-md text-on-surface-variant mt-1">Skylink Flight Services</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-headline-md text-primary mb-8 lg:mb-12 border-b-2 border-primary/10 pb-4 inline-block">Recognition</h2>
              <div className="flex flex-col gap-6 lg:gap-8">
                {[
                  { award: "Excellence in Client Relations", desc: "Cloud Spaces Community & Onboarding Operations", year: "2025" },
                  { award: "Outstanding Operations Management", desc: "Off-Market Listing Dubai Real Estate Coordination", year: "2023" },
                  { award: "Administrative Excellence Award", desc: "Al Noor Rehabilitation & Welfare Association Support Services", year: "2021" }
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
