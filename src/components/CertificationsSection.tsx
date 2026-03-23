import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const certifications = [
  {
    title: 'AZ-900: Azure Cloud Fundamentals',
    issuer: 'Microsoft',
    date: '2025',
    icon: '☁️',
    credentialUrl: 'https://learn.microsoft.com/en-gb/users/sreelathavallabhaneni-7385/credentials/707fa97984e99b6f?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    color: 'from-orange-400 to-amber-500',
  },
  {
    title: 'Full-Stack Web developer ',
    issuer: 'HackYourFuture - Copenhagen,Denmark',
    date: '2020',
    icon: '🌐 ',
    //credentialUrl: '#',
    color: 'from-blue-400 to-green-400',
  },
  {
    title: 'Prøve-Dansk 2',
    issuer: 'Høje-Taastrup sprogskole',
    date: '2017',
    icon: '📚',
    //credentialUrl: '#',
    color: 'from-blue-500 to-indigo-500',
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
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
            {'<'} Achievements {'/>'}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Certifications & <span className="gradient-text-animated">Credentials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise across cloud, analytics, and frontend development.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500`}
              />
              <motion.div
                className="relative glass-card rounded-2xl p-6 h-full border border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col"
                whileHover={{ y: -6 }}
              >
                <motion.span
                  className="text-4xl mb-4 block"
                  whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {cert.icon}
                </motion.span>

                <h3 className="text-sm font-bold text-foreground mb-2 leading-tight">
                  {cert.title}
                </h3>

                <p className="text-xs text-muted-foreground mb-3">{cert.issuer}</p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                  {cert.credentialUrl &&
                    <motion.a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  }
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
