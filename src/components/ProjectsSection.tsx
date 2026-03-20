import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const projects = [
  {
    title: 'Aisel',
    subtitle: 'Health-tech AI Platform',
    description:
      'An intelligent healthcare platform leveraging AI to provide personalized health insights, symptom analysis, and medication recommendations for users worldwide.',
    image: '/placeholder.svg',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Python', 'FastAPI', 'OpenAI'],
    role: 'Lead Frontend Developer',
    highlights: ['Built responsive UI components', 'Integrated AI chat interface', 'Improved performance by 40%'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    accentColor: 'text-cyan-400',
  },
  {
    title: 'Sufu',
    subtitle: 'Carbon Emissions SaaS',
    description:
      'Enterprise sustainability platform helping organizations track, analyze, and reduce their carbon footprint through data-driven insights and actionable recommendations.',
    image: '/placeholder.svg',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'D3.js'],
    role: 'Senior Frontend Engineer',
    highlights: ['Developed interactive dashboards', 'Built real-time data visualization', 'Led UI/UX redesign'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    accentColor: 'text-emerald-400',
  },
  {
    title: 'Seasony',
    subtitle: 'Vertical Farming Dashboard',
    description:
      'Smart agricultural monitoring system for vertical farms, providing real-time crop analytics, environmental control, and yield optimization through IoT sensors.',
    image: '/placeholder.svg',
    techStack: ['React', 'TypeScript', 'GraphQL', 'Chart.js', 'Tailwind', 'Azure'],
    role: 'Frontend Developer',
    highlights: ['Created IoT data dashboards', 'Built crop monitoring UI', 'Implemented real-time updates'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    accentColor: 'text-pink-400',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative group cursor-pointer"
    >
      {/* Background Glow */}
      <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
      
      <div className="relative glass-card rounded-3xl p-8 h-full border border-border/50 group-hover:border-primary/30 transition-all duration-300 overflow-hidden">
        {/* Gradient Accent Line */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
        
        {/* Project Number */}
        <motion.div
          className="absolute top-6 right-6 text-6xl font-bold text-foreground/5 group-hover:text-primary/10 transition-colors"
          style={{ transform: 'translateZ(50px)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </motion.div>

        {/* Content */}
        <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
          {/* Header */}
          <div className="mb-6">
            <span className={`text-xs font-mono ${project.accentColor} mb-2 block`}>
              Featured Project
            </span>
            <h3 className="text-3xl font-bold text-foreground mb-1 group-hover:text-gradient transition-all">
              {project.title}
            </h3>
            <p className={`font-medium ${project.accentColor}`}>{project.subtitle}</p>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Role */}
          <div className="mb-6 p-4 rounded-xl bg-secondary/50">
            <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Role</span>
            <p className="text-foreground font-semibold">{project.role}</p>
          </div>

          {/* Highlights */}
          <div className="mb-6 space-y-2">
            {project.highlights.map((highlight, i) => (
              <motion.div 
                key={highlight} 
                className="flex items-center gap-3 text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                {highlight}
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-6 border-t border-border/50">
            <motion.a
              href={project.liveUrl}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group/link"
              whileHover={{ x: 4 }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group/link"
              whileHover={{ x: 4 }}
            >
              <Github className="w-4 h-4" />
              Source Code
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-primary font-mono text-sm mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {'// Featured Work'}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Projects I've <span className="gradient-text-animated">Built</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my expertise in building
            scalable, user-centric web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card text-foreground font-medium hover:border-primary/50 transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View More on GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
