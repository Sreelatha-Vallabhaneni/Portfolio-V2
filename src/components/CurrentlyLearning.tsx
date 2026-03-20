import { motion } from 'framer-motion';
import { BookOpen, Flame, Target, Zap, Code2, Cpu, Sparkles, TrendingUp } from 'lucide-react';

interface LearningPath {
  title: string;
  description: string;
  progress: number;
  icon: React.ReactNode;
  status: 'active' | 'upcoming' | 'completed';
  tags: string[];
  color: string;
}

const learningPaths: LearningPath[] = [
  {
    title: 'AI & Machine Learning',
    description: 'Exploring LangChain, OpenAI APIs, and building AI-powered applications with modern frameworks.',
    progress: 65,
    icon: <Cpu className="w-6 h-6" />,
    status: 'active',
    tags: ['LangChain', 'OpenAI', 'RAG', 'Vector DBs'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Three.js & WebGL',
    description: 'Creating immersive 3D experiences for the web with Three.js and React Three Fiber.',
    progress: 40,
    icon: <Sparkles className="w-6 h-6" />,
    status: 'active',
    tags: ['Three.js', 'R3F', 'GSAP', 'Shaders'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'System Design',
    description: 'Mastering scalable architecture patterns, microservices, and distributed systems.',
    progress: 55,
    icon: <Code2 className="w-6 h-6" />,
    status: 'active',
    tags: ['Microservices', 'Redis', 'Kafka', 'Docker'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Web3 & Blockchain',
    description: 'Understanding smart contracts, DApps, and the decentralized web ecosystem.',
    progress: 25,
    icon: <TrendingUp className="w-6 h-6" />,
    status: 'upcoming',
    tags: ['Solidity', 'Ethers.js', 'IPFS', 'Web3.js'],
    color: 'from-orange-500 to-amber-500',
  },
];

const focusAreas = [
  { icon: <Flame className="w-5 h-5" />, text: 'Performance Optimization', color: 'text-orange-400' },
  { icon: <Target className="w-5 h-5" />, text: 'Accessibility (a11y)', color: 'text-green-400' },
  { icon: <Zap className="w-5 h-5" />, text: 'Edge Computing', color: 'text-yellow-400' },
  { icon: <BookOpen className="w-5 h-5" />, text: 'Design Systems', color: 'text-blue-400' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export const CurrentlyLearning = () => {
  return (
    <section id="learning" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary font-mono text-sm mb-4"
            animate={{ 
              boxShadow: ['0 0 20px hsl(217 91% 60% / 0.2)', '0 0 40px hsl(217 91% 60% / 0.4)', '0 0 20px hsl(217 91% 60% / 0.2)'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Flame className="w-4 h-4 animate-pulse" />
            Always Growing
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Currently <span className="gradient-text-animated">Learning</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tech landscape evolves rapidly. Here's what I'm actively exploring to stay ahead
            and deliver cutting-edge solutions.
          </p>
        </motion.div>

        {/* Learning Paths Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.title}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${path.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              
              <div className="relative glass-card rounded-2xl p-6 h-full border border-border/50 hover:border-primary/30 transition-colors">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${path.color} text-white`}>
                      {path.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{path.title}</h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        path.status === 'active' 
                          ? 'bg-green-500/20 text-green-400' 
                          : path.status === 'completed'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {path.status === 'active' ? '🔥 In Progress' : path.status === 'completed' ? '✓ Completed' : '📋 Up Next'}
                      </span>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-primary">{path.progress}%</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">{path.description}</p>

                {/* Progress Bar */}
                <div className="relative h-2 bg-secondary rounded-full overflow-hidden mb-4">
                  <motion.div
                    className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${path.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${path.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                  />
                  {/* Animated shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {path.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-foreground mb-6">Current Focus Areas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card cursor-default"
              >
                <span className={area.color}>{area.icon}</span>
                <span className="text-sm font-medium text-foreground">{area.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
