import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ChevronDown } from 'lucide-react';

const experiences = [
  {
    year: 'Nov/2025 - Present',
    role: 'Web Developer',
    company: 'Self-Project',
    location: 'Denmark',
    description:
      'Full-stack SaaS platform for service providers to manage appointments, availability, and customer interactions at one place.',
    highlights: [
      'Built a scalable monorepo with Turborepo',
      'Implemented authentication using Supabase Auth with middleware protection',
      'Integrated Google OAuth for SSO and social login', 'Created protected routes in Next.js', 'Developed role-based access control (RBAC)', 
      'Designed a PostgreSQL relational schema', 'Managed secure sessions and auth callback flows',
    ],
  },
  {
    year: 'Sep/2025 - Oct/2025',
    role: 'Frontend Developer',
    company: 'Aisel',
    location: 'Copenhagen, Denmark',
    description:
      'Worked on an AI-powered health-tech platform supporting clinicians and patients through intelligent digital workflows.',
    highlights: [
      'Worked in an Nx monorepo with shared libraries',
      'Developed and maintained website using Webflow', 'Built responsive frontend features and UI components',
      'Improved page load times by 60%', 'Tested and debugged APIs using Postman',
    ],
  },
  {
    year: 'Jan/2025 - Jun/2025',
    role: 'Frontend Developer',
    company: 'Sufu',
    location: 'Copenhagen, Denmark',
    description:
      'Contributed to a SaaS platform for carbon-emissions analytics used by organizations to track sustainability metrics',
    highlights: ['Built dashboard interfaces with React, TypeScript, and Next.js', 'Implemented onboarding flows and premium feature access',
      'Developed D3.js data visualizations', 'Collaborated with product managers and backend engineers',
      'Built responsive mobile-first designs',
      'Improved maintainability with component-driven architecture',
    ],
  },
  {
    year: 'Dec/2021 - Nov/2023',
    role: 'Frontend Developer',
    company: 'Strømworks',
    location: 'Copenhagen, Denmark',
    description:
      'Developed an e-commerce application for a Danish luxury jewellery brand focused on heritage, craftsmanship, and elegance.',
    highlights: ['Worked on multiple projects', 'Designed and developed user interfaces with Next.js, React, and Vue.js',
      'Led development of major frontend components and reusable features', 'Introduced testing standards using React Testing Library and Jest.',
      'Architected and delivered major frontend components and reusable libraries and created CMS modules',
      'Integrated REST APIs and GraphQL to enable seamless frontend-backend data flow',
      'Drove Agile collaboration, guiding sprints, code reviews, and feature delivery across cross-functional teams',
    ],
  },
  {
    year: 'Aug/2021 - Jun/2025',
    role: 'ReactNative Developer',
    company: 'Aline',
    location: 'Stockholm, Sweden - (Remote)',
    description:
      'Developed and maintained mobile application for E-learning platform, created user interfaces for both iOS and Android platforms.',
    highlights: ['Built cross-platform apps using React Native CLI, Xcode, and Android Studio',
      'Developed clean, maintainable code and resolved functional & styling issues', 'Collaborated with developers, designers, and cross-functional teams',
      'Managed version control with Git, including PRs and code reviews',
      'Conducted cross-platform testing on multiple emulators and TestFlight, efficiently debugging issues',
    ],
  },
  {
    year: 'Mar/2021 - Apr/2025',
    role: 'ReactNative Developer',
    company: 'Freetrailer',
    location: 'Copenhagen, Denmark',
    description:
      'Developed and maintained mobile application for E-booking platform, created user interfaces for both iOS and Android platforms.',
    highlights: ['Built cross-platform apps using React Native CLI, Xcode, and Android Studio',
      'Developed clean, maintainable code and resolved functional & styling issues', 'Collaborated with developers, designers, and cross-functional teams',
      'Managed version control with Git, including PRs and code reviews',
      'Conducted cross-platform testing on multiple emulators and efficiently resolved bugs',
    ],
  },
  {
    year: 'Sep/2020 - Nov/2020',
    role: 'Frontend Developer Intern',
    company: 'Winefamly',
    location: 'Copenhagen, Denmark',
    description:
      'Winefamly is an online platform for buying curated wines and managing wine subscriptions',
    highlights: [
      'Integrated React.js with Magento 2 and added admin widgets',
      'Optimized bundle size and managed Webpack plugins', 'Collaborated with senior developers, project leads, and designers',
      'Participated in daily stand-ups, weekly meetings, and task grooming',
      'Improved page load times by 60%', 'Tested and debugged APIs using Postman',
    ],
  },
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      key={exp.year}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
        index % 2 === 0 ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10">
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
      </div>

      {/* Year Badge - Mobile */}
      <div className="md:hidden pl-8 mb-2">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-sm font-medium text-primary">
          <Calendar className="w-4 h-4" />
          {exp.year}
        </span>
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 ml-8 md:ml-0">
          {/* Year Badge - Desktop */}
          <div className="hidden md:block mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-sm font-medium text-primary">
              <Calendar className="w-4 h-4" />
              {exp.year}
            </span>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
              <p className="text-primary font-medium">{exp.company}</p>
              <p className="text-sm text-muted-foreground">{exp.location}</p>
            </div>
          </div>

          <p className="text-muted-foreground text-sm mb-3">{exp.description}</p>

          {/* Expand/Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors mb-2 group"
          >
            <span>{isExpanded ? 'Show less' : 'Show highlights'}</span>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </motion.span>
          </button>

          {/* Collapsible Highlights */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 pt-1">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block w-1/2" />
    </motion.div>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">Career Journey</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional growth and the amazing teams I've been fortunate to work with.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.year} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
