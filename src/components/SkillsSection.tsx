import { motion } from 'framer-motion';
import { useState } from 'react';

interface Skill {
  name: string;
  icon: string;
  category: string;
  level: number;
  //color: string;
}
const skills: Skill[] = [
  { name: 'React', level: 95, icon: '⚛️', category: 'Frontend' },
  { name: 'Next.js', level: 88, icon: '▲', category: 'Frontend' },
  { name: 'TypeScript', level: 92, icon: '📘', category: 'Languages' },
  { name: 'JavaScript', level: 96, icon: '🟨', category: 'Languages' },
  { name: 'Tailwind CSS', level: 90, icon: '🎨', category: 'Frontend' },
  { name: 'Node.js', level: 80, icon: '🟢', category: 'Backend' },
  { name: 'AWS', level: 72, icon: '☁️', category: 'Cloud' },
  { name: 'Azure', level: 68, icon: '🔷', category: 'Cloud' },
  { name: 'Git', level: 90, icon: '📦', category: 'Tools' },
  { name: 'GraphQL', level: 78, icon: '◇', category: 'Backend' },
  { name: 'REST APIs', level: 92, icon: '🔗', category: 'Backend' },
  { name: 'Redux', level: 85, icon: '🔄', category: 'Frontend' },
  { name: 'Jest', level: 82, icon: '🃏', category: 'Tools' },
  { name: 'Cypress', level: 75, icon: '🧪', category: 'Tools' },
  { name: 'Figma', level: 70, icon: '🎭', category: 'Tools' },
  { name: 'Framer Motion', level: 85, icon: '✨', category: 'Frontend' },
];

// const skills: Skill[] = [
//   { name: 'React', icon: '⚛️', category: 'Frontend', level: 95, color: 'from-cyan-400 to-blue-500' },
//   { name: 'Next.js', icon: '▲', category: 'Frontend', level: 90, color: 'from-gray-400 to-gray-600' },
//   { name: 'TypeScript', icon: '📘', category: 'Languages', level: 92, color: 'from-blue-400 to-blue-600' },
//   { name: 'JavaScript', icon: '🟨', category: 'Languages', level: 95, color: 'from-yellow-400 to-yellow-600' },
//   { name: 'Tailwind CSS', icon: '🎨', category: 'Styling', level: 93, color: 'from-teal-400 to-cyan-500' },
//   { name: 'Node.js', icon: '🟢', category: 'Backend', level: 80, color: 'from-green-400 to-green-600' },
//   { name: 'AWS', icon: '☁️', category: 'Cloud', level: 75, color: 'from-orange-400 to-orange-600' },
//   { name: 'Azure', icon: '🔷', category: 'Cloud', level: 70, color: 'from-blue-500 to-blue-700' },
//   { name: 'Git', icon: '📦', category: 'Tools', level: 90, color: 'from-red-400 to-red-600' },
//   { name: 'GraphQL', icon: '◇', category: 'API', level: 85, color: 'from-pink-400 to-pink-600' },
//   { name: 'REST APIs', icon: '🔗', category: 'API', level: 92, color: 'from-purple-400 to-purple-600' },
//   { name: 'Redux', icon: '🔄', category: 'State', level: 88, color: 'from-violet-400 to-violet-600' },
//   { name: 'Jest', icon: '🃏', category: 'Testing', level: 85, color: 'from-green-400 to-emerald-500' },
//   { name: 'Cypress', icon: '🧪', category: 'Testing', level: 80, color: 'from-gray-400 to-gray-500' },
//   { name: 'Figma', icon: '🎭', category: 'Design', level: 78, color: 'from-purple-400 to-pink-500' },
//   { name: 'Framer Motion', icon: '✨', category: 'Animation', level: 88, color: 'from-pink-500 to-rose-500' },
// ];


//const categories = [...new Set(skills.map(s => s.category))];
//const categories = ['Frontend', 'Languages', 'Backend', 'Cloud', 'API', 'Tools', 'Styling', 'State', 'Testing', 'Design', 'Animation']

const categories = ['All', 'Frontend', 'Languages', 'Backend', 'Cloud', 'Tools'];

export const SkillsSection = () => {
  const [active, setActive] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-mono text-sm mb-4 px-4 py-2 rounded-full glass-card">
            {'<'} My Toolkit {'/>'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="gradient-text-animated">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'glass-card text-muted-foreground hover:text-foreground hover:border-primary/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid with Bars */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group glass-card rounded-xl p-4 border border-border/50 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                    {skill.icon}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {skill.name}
                  </span>
                </div>
                <motion.span
                  className="text-xs font-mono font-bold text-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {skill.level}%
                </motion.span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.05, ease: 'easeOut' }}
                />
                {hoveredSkill === skill.name && (
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-primary/20"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { number: '16+', label: 'Technologies', icon: '🛠️' },
            { number: '5+', label: 'Frameworks', icon: '⚡' },
            { number: '3', label: 'Cloud Platforms', icon: '☁️' },
            { number: '∞', label: 'Learning', icon: '📚' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card rounded-xl p-4 text-center group hover:border-primary/30 transition-colors"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <span className="text-2xl mb-2 block group-hover:animate-bounce-subtle">{stat.icon}</span>
              <div className="text-2xl font-bold text-primary">{stat.number}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div> 
          /))}
        </motion.div>*/}
      </div>
    </section>

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.05,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, scale: 0.8, y: 20 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: { duration: 0.4, ease: 'easeOut' as const },
//   },
// };

// export const SkillsSection = () => {
//   const [activeCategory, setActiveCategory] = useState<string | null>(null);
//   const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

//   const filteredSkills = activeCategory 
//     ? skills.filter(s => s.category === activeCategory)
//     : skills;

//   return (
//     <section id="skills" className="py-24 relative overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
//         <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl" />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <motion.span 
//             className="inline-block text-primary font-mono text-sm mb-4 px-4 py-2 rounded-full glass-card"
//             whileHover={{ scale: 1.05 }}
//           >
//             {'<'} My Toolkit {'/>'} 
//           </motion.span>
//           <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
//             Skills & <span className="gradient-text-animated">Technologies</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             A comprehensive set of technologies and tools I've mastered over the years to build
//             exceptional digital experiences.
//           </p>
//         </motion.div>

//         {/* Category Filters */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-3 mb-12"
//         >
//           <motion.button
//             onClick={() => setActiveCategory(null)}
//             className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//               activeCategory === null 
//                 ? 'bg-primary text-primary-foreground' 
//                 : 'glass-card text-muted-foreground hover:text-foreground'
//             }`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             All
//           </motion.button>
//           {categories.map((category) => (
//             <motion.button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                 activeCategory === category 
//                   ? 'bg-primary text-primary-foreground' 
//                   : 'glass-card text-muted-foreground hover:text-foreground'
//               }`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {category}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Skills Grid - Bento Style */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
//           layout
//         >
//           {filteredSkills.map((skill, index) => (
//             <motion.div
//               key={skill.name}
//               variants={itemVariants}
//               layout
//               onMouseEnter={() => setHoveredSkill(skill.name)}
//               onMouseLeave={() => setHoveredSkill(null)}
//               className="group relative"
//             >
//               {/* Glow effect on hover */}
//               <motion.div
//                 className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
//               />
              
//               <motion.div
//                 className="relative glass-card rounded-2xl p-5 text-center cursor-default overflow-hidden border border-border/50 hover:border-primary/30 transition-colors"
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 transition={{ type: 'spring', stiffness: 300 }}
//               >
//                 {/* Skill Icon */}
//                 <motion.span 
//                   className="text-3xl mb-3 block"
//                   animate={hoveredSkill === skill.name ? { 
//                     scale: [1, 1.2, 1],
//                     rotate: [0, 10, -10, 0],
//                   } : {}}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {skill.icon}
//                 </motion.span>
                
//                 {/* Skill Name */}
//                 <span className="text-sm font-semibold text-foreground block mb-2">
//                   {skill.name}
//                 </span>
                
//                 {/* Progress Bar */}
//                 <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
//                   <motion.div
//                     className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${skill.level}%` }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 1, delay: index * 0.05, ease: 'easeOut' }}
//                   />
//                 </div>
                
//                 {/* Level Badge - Shows on hover */}
//                 <motion.span
//                   className="absolute top-2 right-2 text-xs font-bold text-primary"
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={hoveredSkill === skill.name ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
//                 >
//                   {skill.level}%
//                 </motion.span>

//                 {/* Category Tag */}
//                 <motion.span
//                   className="text-[10px] text-muted-foreground mt-2 block opacity-0 group-hover:opacity-100 transition-opacity"
//                 >
//                   {skill.category}
//                 </motion.span>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Bottom Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//           className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
//         >
//           {[
//             { number: '16+', label: 'Technologies', icon: '🛠️' },
//             { number: '5+', label: 'Frameworks', icon: '⚡' },
//             { number: '3', label: 'Cloud Platforms', icon: '☁️' },
//             { number: '∞', label: 'Learning', icon: '📚' },
//           ].map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               className="glass-card rounded-xl p-4 text-center group hover:border-primary/30 transition-colors"
//               whileHover={{ y: -4 }}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.6 + index * 0.1 }}
//             >
//               <span className="text-2xl mb-2 block group-hover:animate-bounce-subtle">{stat.icon}</span>
//               <div className="text-2xl font-bold text-primary">{stat.number}</div>
//               <div className="text-xs text-muted-foreground">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
  );
};
