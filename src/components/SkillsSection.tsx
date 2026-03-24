import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiIcloud,
  SiGit,
  SiGraphql,
  SiRedux,
  SiJest,
  SiFigma,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiVuedotjs,
  SiWebpack,
  SiVite,
  SiFirebase,
  SiSupabase,
  SiExpo,
  SiReactquery,

} from 'react-icons/si';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: IconType;
  category: string;
  level: number;
  color: string;
  bgColor?: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, icon: SiReact, category: 'Frontend', color: 'from-cyan-400 to-blue-500', bgColor: '#61DAFB' },
  { name: 'Next.js', level: 88, icon: SiNextdotjs, category: 'Frontend', color: 'from-gray-400 to-gray-600', bgColor: '#cacaca' },
  { name: 'Tailwind CSS', level: 90, icon: SiTailwindcss, category: 'Frontend', color: 'from-teal-400 to-cyan-500', bgColor: '#06B6D4' },
  { name: 'Redux', level: 85, icon: SiRedux, category: 'Frontend', color: 'from-violet-400 to-violet-600', bgColor: '#764ABC' },
  { name: 'Framer Motion', level: 85, icon: SiFramer, category: 'Frontend', color: 'from-pink-500 to-rose-500', bgColor: '#0055FF' },
  { name: 'Vue.js', level: 75, icon: SiVuedotjs, category: 'Frontend', color: 'from-green-400 to-emerald-500', bgColor: '#4FC08D' },
  { name: 'Tanstack', level: 70, icon: SiReactquery, category: 'Frontend', color: 'from-red-500 to-red-700', bgColor: '#DD0031' },
  { name: 'Vite', level: 70, icon: SiVite, category: 'Frontend', color: 'from-violet-500 to-cyan-700', bgColor: '#8ecbea' },
  //{ name: 'Angular', level: 70, icon: SiAngular, category: 'Frontend', color: 'from-red-500 to-red-700', bgColor: '#DD0031' },
  //{ name: 'Svelte', level: 65, icon: SiSvelte, category: 'Frontend', color: 'from-orange-500 to-red-500', bgColor: '#FF3E00' },
  
  // Languages
  { name: 'TypeScript', level: 92, icon: SiTypescript, category: 'Languages', color: 'from-blue-400 to-blue-600', bgColor: '#3178C6' },
  { name: 'JavaScript', level: 96, icon: SiJavascript, category: 'Languages', color: 'from-yellow-400 to-yellow-600', bgColor: '#F7DF1E' },
  //{ name: 'Python', level: 85, icon: SiPython, category: 'Languages', color: 'from-blue-500 to-blue-700', bgColor: '#3776AB' },
  //{ name: 'Go', level: 70, icon: SiGo, category: 'Languages', color: 'from-cyan-400 to-blue-500', bgColor: '#00ADD8' },
  //{ name: 'Rust', level: 65, icon: SiRust, category: 'Languages', color: 'from-orange-600 to-red-600', bgColor: '#000000' },
  
  // Backend
  { name: 'Node.js', level: 80, icon: SiNodedotjs, category: 'Backend', color: 'from-green-400 to-green-600', bgColor: '#339933' },
  { name: 'Express.js', level: 85, icon: SiExpress, category: 'Backend', color: 'from-gray-500 to-gray-700', bgColor: '#000000' },
  { name: 'GraphQL', level: 78, icon: SiGraphql, category: 'Backend', color: 'from-pink-400 to-pink-600', bgColor: '#E10098' },
  { name: 'REST APIs', level: 92, icon: SiGraphql, category: 'Backend', color: 'from-purple-400 to-purple-600', bgColor: '#FF6C37' },
  //{ name: 'Django', level: 75, icon: SiDjango, category: 'Backend', color: 'from-green-600 to-green-800', bgColor: '#092E20' },
  //{ name: 'Flask', level: 70, icon: SiFlask, category: 'Backend', color: 'from-gray-600 to-gray-800', bgColor: '#000000' },
  //{ name: 'Spring Boot', level: 65, icon: SiSpringboot, category: 'Backend', color: 'from-green-500 to-green-700', bgColor: '#6DB33F' },
  
  // Database
  { name: 'MongoDB', level: 85, icon: SiMongodb, category: 'Database', color: 'from-green-500 to-green-700', bgColor: '#47A248' },
  { name: 'MySQL', level: 88, icon: SiMysql, category: 'Database', color: 'from-blue-600 to-blue-800', bgColor: '#4479A1' },
  { name: 'PostgreSQL', level: 82, icon: SiPostgresql, category: 'Database', color: 'from-blue-400 to-blue-600', bgColor: '#336791' },
  //{ name: 'Redis', level: 75, icon: SiRedis, category: 'Database', color: 'from-red-500 to-red-700', bgColor: '#DC382D' },
  //{ name: 'Prisma', level: 80, icon: SiPrisma, category: 'Database', color: 'from-indigo-500 to-indigo-700', bgColor: '#2D3748' },
  { name: 'Supabase', level: 78, icon: SiSupabase, category: 'Database', color: 'from-emerald-400 to-emerald-600', bgColor: '#3ECF8E' },
  { name: 'Firebase', level: 85, icon: SiFirebase, category: 'Database', color: 'from-yellow-500 to-orange-500', bgColor: '#FFCA28' },
  
  // Cloud & DevOps
  { name: 'AWS', level: 72, icon: SiIcloud, category: 'Cloud', color: 'from-orange-400 to-orange-600', bgColor: '#FF9900' },
  { name: 'Azure', level: 68, icon: SiIcloud, category: 'Cloud', color: 'from-blue-500 to-blue-700', bgColor: '#0078D4' },
  { name: 'Docker', level: 85, icon: SiDocker, category: 'DevOps', color: 'from-blue-400 to-blue-600', bgColor: '#2496ED' },
  //{ name: 'Kubernetes', level: 70, icon: SiKubernetes, category: 'DevOps', color: 'from-blue-500 to-blue-700', bgColor: '#326CE5' },
  //{ name: 'Terraform', level: 65, icon: SiTerraform, category: 'DevOps', color: 'from-purple-500 to-purple-700', bgColor: '#7B42BC' },
  //{ name: 'Jenkins', level: 68, icon: SiJenkins, category: 'DevOps', color: 'from-red-500 to-red-700', bgColor: '#D24939' },
  //{ name: 'GitHub Actions', level: 82, icon: SiGithubactions, category: 'DevOps', color: 'from-gray-600 to-gray-800', bgColor: '#2088FF' },
  
  // Tools
  { name: 'Git', level: 90, icon: SiGit, category: 'Tools', color: 'from-red-400 to-red-600', bgColor: '#F05032' },
  { name: 'Jest', level: 82, icon: SiJest, category: 'Tools', color: 'from-green-400 to-emerald-500', bgColor: '#C21325' },
  //{ name: 'Cypress', level: 75, icon: SiCypress, category: 'Tools', color: 'from-gray-400 to-gray-500', bgColor: '#17202C' },
  { name: 'Figma', level: 70, icon: SiFigma, category: 'Tools', color: 'from-purple-400 to-pink-500', bgColor: '#F24E1E' },
  { name: 'Webpack', level: 80, icon: SiWebpack, category: 'Tools', color: 'from-blue-400 to-blue-600', bgColor: '#8DD6F9' },
  { name: 'Vite', level: 88, icon: SiVite, category: 'Tools', color: 'from-yellow-400 to-purple-500', bgColor: '#646CFF' },
  
  // Mobile
  { name: 'React Native', level: 75, icon: SiReact, category: 'Mobile', color: 'from-blue-400 to-blue-600', bgColor: '#61DAFB' },
  { name: 'Expo', level: 80, icon: SiExpo, category: 'Mobile', color: 'from-blue-400 to-blue-600', bgColor: '#02569B' },
  //{ name: 'Kotlin', level: 60, icon: SiKotlin, category: 'Mobile', color: 'from-purple-500 to-purple-700', bgColor: '#7F52FF' },
  //{ name: 'Swift', level: 55, icon: SiSwift, category: 'Mobile', color: 'from-orange-500 to-orange-700', bgColor: '#FA7343' },
];

const categories = ['All', 'Frontend', 'Languages', 'Backend', 'Database', 'Cloud', 'DevOps', 'Tools', 'Mobile'];

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
          {filtered.map((skill, i) => {
            const IconComponent = skill.icon;
            return (
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
                    <div className="relative">
                      <IconComponent 
                        size={24}
                        color={skill.bgColor}
                        className="group-hover:scale-125 transition-transform duration-300"
                      />
                    </div>
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
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
