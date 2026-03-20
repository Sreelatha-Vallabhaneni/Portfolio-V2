import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    year: '2024 - Present',
    role: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    description:
      'Leading frontend development for enterprise SaaS products. Architecting scalable React applications and mentoring junior developers.',
    highlights: [
      'Led migration from legacy codebase to Next.js 14',
      'Reduced bundle size by 45% through code splitting',
      'Established component library used across 5 products',
    ],
  },
  {
    year: '2022 - 2024',
    role: 'Frontend Developer',
    company: 'HealthTech Solutions',
    location: 'Austin, TX',
    description:
      'Developed patient-facing applications for healthcare platforms. Focused on accessibility and HIPAA compliance.',
    highlights: [
      'Built accessible UI components (WCAG 2.1 AA)',
      'Integrated real-time chat with WebSocket',
      'Improved page load times by 60%',
    ],
  },
  {
    year: '2021 - 2022',
    role: 'Frontend Developer',
    company: 'Green Energy Corp',
    location: 'Remote',
    description:
      'Created interactive dashboards for carbon tracking and sustainability metrics visualization.',
    highlights: [
      'Developed D3.js data visualizations',
      'Built responsive mobile-first designs',
      'Implemented offline-first PWA features',
    ],
  },
  {
    year: '2020 - 2021',
    role: 'Junior Frontend Developer',
    company: 'Digital Agency XYZ',
    location: 'New York, NY',
    description:
      'Started my professional journey building marketing websites and e-commerce frontends for various clients.',
    highlights: [
      'Delivered 15+ client projects',
      'Learned React and modern JavaScript',
      'Collaborated with designers on UI/UX',
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
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

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {experiences.map((exp, index) => (
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

                  <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>

                  <ul className="space-y-2">
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
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
