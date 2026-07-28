import { motion } from 'motion/react';
import { Briefcase, Building, BookOpen, Handshake, BarChart3, ArrowDown } from 'lucide-react';

export default function CaseStudies() {
  const projects = [
    {
      id: "01",
      category: "Workspace Management",
      title: "Cloud Spaces",
      role: "Sales & Operations",
      situation: "While working at Cloud Spaces, I noticed that many potential members were not being followed up consistently after their tours, leading to missed sales opportunities. I improved the follow-up process by organizing leads and communicating with prospects more effectively, which helped increase conversions, improve member satisfaction and meet my monthly sales targets.",
      approach: "I took the initiative to reach out to each prospect, followed up regularly and took the time to understand what they were looking for. By staying in touch and responding to their questions quickly, I built trust and helped them choose the membership plan that best suited their work requirements.",
      outcome: "I stayed in regular contact with each prospect, answered their questions and recommended the membership plan that best matched their needs. As a result, I improved conversion rates, met my monthly sales targets and helped increase workspace occupancy while delivering a positive customer experience.",
      tags: ["SALES", "CUSTOMER RELATIONS"],
      icon: Building,
      iconColor: "text-primary",
      iconBg: "bg-primary/5"
    },
    {
      id: "02",
      category: "Hospitality",
      title: "Theron Vacation Homes",
      role: "Guest Relations",
      situation: "During my time at Theron Vacation Homes, I identified that guests needed faster responses and more personalized support throughout their stay. I improved communication by following up with guests, addressing concerns quickly and coordinating with internal teams to resolve issues. This resulted in smoother guest experiences, improved satisfaction and stronger client relationships through positive feedback and repeat bookings.",
      approach: "I approached it by taking the time to understand each guest and client's needs, maintaining clear communication and following up consistently. I worked closely with the relevant teams to address concerns quickly, provide suitable solutions and ensure every guest or client had a smooth and positive experience.",
      outcome: "I managed guest and client inquiries, followed up on requests and coordinated with internal teams to resolve concerns efficiently. By providing personalized support and ensuring smooth communication, I helped improve guest satisfaction, strengthen client relationships and create a positive experience that encouraged repeat business and referrals.",
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
      situation: "During my time as a Student Affairs Secretary at Alnoor Training Center, I identified gaps in parent communication, record management and follow-up processes that affected the efficiency of support services. I improved the organization of parent requests, maintained accurate records and coordinated closely with different departments to ensure concerns were addressed promptly. This helped improve communication with parents, reduced delays, and created a smoother support experience for families.",
      approach: "I approached it by building strong relationships with parents through clear and consistent communication. I made sure their concerns were listened to, updates were shared promptly and any issues were followed up with the relevant departments. By creating a supportive and reliable communication process, I helped strengthen parent trust and improve their overall experience with the center.",
      outcome: "I improved the way parent inquiries, requests and records were managed by organizing information more efficiently and ensuring timely communication. I worked closely with different departments to address parent concerns and provide accurate updates. As a result, communication with parents improved, response times were faster and the overall support process became more organized and effective.",
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
      situation: "During my time as an Executive Assistant at Off Market Listing, I identified challenges in coordinating property viewings, managing client communication and ensuring a smooth process from the initial viewing stage through to the final sale. These gaps created a risk of delays and missed opportunities. I took the initiative to improve coordination, maintain organized records and ensure consistent follow-ups with clients and stakeholders throughout the sales process.",
      approach: "I approached it by creating a more organized process for managing property viewings, client communication and follow-ups. I coordinated schedules between clients and property owners, ensured all details were communicated clearly and monitored each stage of the process from viewing to sale completion to avoid delays and provide a smooth experience for all stakeholders.",
      outcome: "I coordinated property viewings, managed client communication, followed up on inquiries and supported the sales process from the initial viewing stage through to completion. By keeping schedules organized and ensuring clear communication between all parties, I helped create a smoother client experience, reduced delays and supported successful property transactions.",
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
      situation: "In my current role as a Guest Relations and Client Relations Executive at Cloud Spaces, I continuously focus on improving the client experience by identifying opportunities to enhance communication, follow-ups and service delivery. I manage client inquiries, coordinate requests and work closely with internal teams to ensure client needs are addressed promptly, helping maintain strong relationships and a positive workspace experience.",
      approach: "I approached it by staying proactive with client communication, understanding their needs and ensuring their requests were followed up on promptly. I worked closely with internal teams to resolve issues efficiently, provided regular updates to clients, and focused on creating a smooth and positive experience throughout their journey with Cloud Spaces.",
      outcome: "I managed client inquiries, coordinated requests with internal teams and ensured timely follow-ups to resolve concerns and maintain a high level of service. By providing personalized support and maintaining clear communication, I helped strengthen client relationships, improve client satisfaction and create a positive workspace experience for members.",
      tags: ["CLIENT RELATIONS", "SERVICE DELIVERY"],
      icon: BarChart3,
      iconColor: "text-primary",
      iconBg: "bg-primary/5"
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
              A deep dive into strategic interventions, operational improvements, and the tangible outcomes of relationship-first project management.
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
              <div className={`col-span-1 lg:col-span-3 ${project.reverse ? 'lg:order-last lg:text-right' : ''}`}>
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
                <div className="flex flex-col gap-8 lg:gap-10">
                  <div className="space-y-4">
                    <h4 className="font-label-md text-primary uppercase tracking-widest border-b border-outline/10 pb-2">Situation</h4>
                    <p className="font-body-md text-on-surface leading-relaxed">
                      {project.situation}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-label-md text-primary uppercase tracking-widest border-b border-outline/10 pb-2">Approach</h4>
                    <p className="font-body-md text-on-surface leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-label-md text-secondary uppercase tracking-widest border-b border-outline/10 pb-2">Outcome</h4>
                    <p className="font-body-md text-on-surface leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 lg:gap-3 mt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-md text-[12px]">
                        {tag}
                      </span>
                    ))}
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
            Full case study dossiers - including process documentation, stakeholder mapping, and final metric reports - are available upon request for verified inquiries.
          </p>
          <button className="bg-secondary text-on-primary px-8 py-4 rounded-lg font-label-md hover:bg-secondary/90 transition-all transform hover:scale-105 active:scale-95 shadow-xl">
            REQUEST FULL PORTFOLIO
          </button>
        </div>
      </section>
    </div>
  );
}
