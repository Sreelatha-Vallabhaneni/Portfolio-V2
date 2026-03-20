import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, ExternalLink, Mail, Sparkles, Code2, Palette } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useEffect, useState } from 'react';

const FloatingIcon = ({ icon: Icon, delay, className }: { icon: React.ElementType; delay: number; className?: string }) => (
  <motion.div
    className={`absolute glass-card p-3 rounded-xl ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, type: 'spring', stiffness: 200 }}
  >
    <motion.div
      animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay }}
    >
      <Icon className="w-6 h-6 text-primary" />
    </motion.div>
  </motion.div>
);

export const HeroSection = () => {
  const tagline = useTypewriter({
    words: [
      'Building beautiful user experiences',
      'Crafting scalable web applications',
      'Turning ideas into reality',
      'Creating impactful digital solutions',
    ],
    typeSpeed: 80,
    deleteSpeed: 40,
    delayBetweenWords: 2500,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 50, stiffness: 100 };
  const parallaxX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), springConfig);
  const parallaxY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth);
      mouseY.set(clientY / innerHeight);
      setMousePosition({ x: clientX / innerWidth, y: clientY / innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px] animate-morph"
          style={{ x: parallaxX, y: parallaxY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/20 blur-[100px] animate-morph"
          style={{ 
            x: useTransform(mouseX, [0, 1], [20, -20]),
            y: useTransform(mouseY, [0, 1], [20, -20]),
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Animated Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating Icons */}
      <FloatingIcon icon={Code2} delay={0.8} className="top-1/4 left-[15%] hidden lg:block" />
      <FloatingIcon icon={Palette} delay={1} className="top-1/3 right-[15%] hidden lg:block" />
      <FloatingIcon icon={Sparkles} delay={1.2} className="bottom-1/3 left-[20%] hidden lg:block" />

      {/* Rotating Border Ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-dashed border-primary/10 hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge with Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-muted-foreground mb-8 border border-green-500/30"
          >
            <motion.span 
              className="w-2 h-2 rounded-full bg-green-400"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Available for new opportunities
          </motion.div>

          {/* Main Heading with Creative Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <motion.span 
              className="inline-block text-foreground"
              whileHover={{ scale: 1.02 }}
            >
              Hi, I'm{' '}
            </motion.span>
            <br />
            <motion.span 
              className="inline-block gradient-text-animated text-shadow-glow"
              whileHover={{ scale: 1.02 }}
            >
              Sreelatha
            </motion.span>
          </motion.h1>

          {/* Animated Role Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6"
          >
            <motion.span 
              className="inline-flex items-center gap-2 text-xl md:text-2xl text-primary font-semibold px-6 py-2 rounded-full glass-card border-gradient"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="w-5 h-5" />
              Frontend Developer
            </motion.span>
          </motion.div>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-8 mb-10"
          >
            <span className="text-lg md:text-xl text-muted-foreground font-mono">
              {tagline}
              <motion.span 
                className="text-primary ml-1 inline-block"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </motion.span>
            </span>
          </motion.div>

          {/* CTAs with Enhanced Styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              <span className="relative z-10">View My Work</span>
              <ExternalLink className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-card font-semibold text-foreground border border-border hover:border-primary/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
              <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mt-16"
          >
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '20+', label: 'Projects Delivered' },
              { value: '10+', label: 'Happy Clients' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-primary"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#projects"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="p-2 rounded-full glass-card group-hover:border-primary/50 transition-colors"
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
