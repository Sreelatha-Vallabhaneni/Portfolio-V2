import { motion } from 'framer-motion';

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-lg"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          y: [0, 20, 0],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-20 w-16 h-16 border border-purple-500/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-20 w-12 h-12 bg-gradient-to-br from-primary/10 to-transparent rounded-lg"
        animate={{
          rotate: [0, -45, 0, 45, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute top-2/3 right-1/4 w-8 h-8 bg-cyan-500/20 rounded-full blur-sm"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Code-like brackets */}
      <motion.div
        className="absolute top-1/2 left-1/4 text-6xl font-mono text-primary/5 select-none"
        animate={{
          opacity: [0.1, 0.2, 0.1],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {'</>'}
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/3 right-1/3 text-4xl font-mono text-purple-500/5 select-none"
        animate={{
          opacity: [0.1, 0.15, 0.1],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {'{ }'}
      </motion.div>
    </div>
  );
};
