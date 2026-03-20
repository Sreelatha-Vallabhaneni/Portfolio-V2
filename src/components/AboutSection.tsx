import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, MapPin } from 'lucide-react';

const certifications = [
  'AWS Certified Cloud Practitioner',
  'Google Analytics Certified',
  'Meta Frontend Developer Professional Certificate',
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 blur-2xl" />
              <div className="absolute inset-4 glass-card rounded-2xl" />
              
              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute top-8 right-0 glass-card rounded-xl p-4 glow-effect"
              >
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-16 left-0 glass-card rounded-xl p-4 glow-effect"
              >
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-0 right-8 glass-card rounded-xl p-4 glow-effect"
              >
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </motion.div>

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-32 h-32 rounded-full border border-dashed border-primary/30"
                />
                <div className="absolute w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm mb-4 block">About Me</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Passionate About Creating
              <span className="text-gradient"> Impactful</span> Digital Experiences
            </h2>

            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                I'm a Frontend Developer with over 5 years of experience building modern,
                responsive, and user-centric web applications. My journey in tech started with a
                fascination for creating interfaces that not only look beautiful but also provide
                seamless user experiences.
              </p>
              <p>
                Currently based in the United States, I've had the privilege of working with
                startups and enterprises across health-tech, sustainability, and agriculture
                sectors. I specialize in React ecosystem, TypeScript, and modern CSS frameworks.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or mentoring aspiring developers in the community.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="text-sm font-medium text-foreground">United States</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Education</div>
                  <div className="text-sm font-medium text-foreground">MS Computer Science</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Certifications</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 text-xs font-medium rounded-full glass-card text-muted-foreground"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
