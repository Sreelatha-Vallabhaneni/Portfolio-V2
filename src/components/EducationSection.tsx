import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science in Signal Processing',
    school: 'Blekinge tekniska högskola',
    location: 'Karlskrona, Sweden',
    period: '2014',
    //gpa: '3.8/4.0',
    // highlights: [
    //   'Specialization in Software Engineering',
    //   'Graduate Research Assistant',
    //   'Dean\'s List - All Semesters',
    // ],
    icon: '🎓',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'JNTU - Hyderabad',
    location: 'India',
    period: '2009',
    // gpa: '3.6/4.0',
    // highlights: [
    //   'First Class with Distinction',
    //   'Technical Club Lead',
    //   'Published research paper on Web Technologies',
    // ],
    icon: '📚',
    color: 'from-emerald-400 to-teal-500',
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block text-primary font-mono text-sm mb-4 px-4 py-2 rounded-full glass-card"
            whileHover={{ scale: 1.05 }}
          >
            {'<'} Education {'/>'}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Academic <span className="gradient-text-animated">Background</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A strong academic foundation that fuels my passion for building innovative solutions.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
              />

              <div className="relative glass-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Icon */}
                  <motion.div
                    className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-3xl`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    {edu.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-semibold text-sm mb-3">
                      {edu.school}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                      {/* <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" />
                        GPA: {edu.gpa}
                      </span> */}
                    </div>

                    {/* <ul className="space-y-2">
                      {edu.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
