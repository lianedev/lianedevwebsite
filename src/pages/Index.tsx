
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ExternalLink, Code2, Database, Globe, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const skills = [
    { name: "HTML", icon: Globe, color: "from-orange-400 to-red-500", level: 95 },
    { name: "CSS", icon: Code2, color: "from-blue-400 to-cyan-500", level: 90 },
    { name: "JavaScript", icon: Code2, color: "from-yellow-400 to-orange-500", level: 88 },
    { name: "React", icon: Code2, color: "from-cyan-400 to-blue-500", level: 92 },
    { name: "Tailwind", icon: Server, color: "from-green-400 to-emerald-500", level: 85 },
    { name: "Python", icon: Database, color: "from-blue-500 to-purple-500", level: 80 },
  ];

  const projects = [
    {
      title: "lonestar construction",
      description: "Construction website for my client in Texas",
      tech: ["React", "Framer-motion","Tailwind" ],
      link: "https://lonestar-construction.netlify.app/"
    },
    {
      title: "whisper Crisper",
      description: "Python-basedtools software that is used for verbatim transcription",
      tech: ["Python"],
      link: "#"
    },
    {
      title: "Auto trader indicator",
      description: "This is ann indicator used for Forex trading,it can identify OB,Fvg,Choch and Bos",
      tech: ["Pine Script"],
      link: "#"
    },

    {
      title: "Vema home repair",
      description: "This is home repair website for my client in Dallas",
      tech: ["React","Tailwind"],
      link: "https://spookyliane.github.io/vema/"
    },
    {
      title: "Salarysync",
      description: "Payroll calculator to manage employees salaries",
      tech: ['Vite','TypeScript','React','shadcn-ui','Tailwind CSS'],
      link: "#"
    },
    {
      
      title: "Legal",
      description: "legal website",
      tech: ["React","shadcn-ui","Tailwind"],
      link: "https://legal-project.netlify.app/"
    
    },
    {
      
      title: "Royal Taste",
      description: "Catering website template",
      tech: ["React","Framer","Tailwind",'shadcn-ui'],
      link: "https://royal-taste.netlify.app/"
    
    },
    {
      
      title: "Aquaflows",
      description: "pluming website",
      tech: ["React","Tailwind"],
      link: "https://aquaflows.netlify.app/"
    
    },
    {
      title: "Helmingskies Voyagehub",
      description: "Abroad work agency in Kenya",
      tech: ["Vite", "TypeScript", "React", "shadcn-ui", "TailwindCSS"],
      link: "https://helmingskies.netlify.app/"
    }

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-particle opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 4 + 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6">
                <span className="gradient-text">LianeDev</span>
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
                Full Stack Developer & Creative Technologist
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Crafting digital experiences with modern technologies. 
                Passionate about clean code, innovative solutions, and bringing ideas to life.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              <Button 
                size="lg" 
                className="glass-effect hover:bg-primary/20 transition-all duration-300 text-lg px-8 py-6"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass-effect hover:bg-white/10 transition-all duration-300 text-lg px-8 py-6"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>

            {/* Contact Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button 
                variant="ghost" 
                size="lg"
                className="glass-effect hover:bg-white/10 transition-all duration-300 group"
                asChild
              >
                <a href="mailto:Vomirone@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">Email</span>
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="glass-effect hover:bg-white/10 transition-all duration-300 group"
                asChild
              >
                <a href="tel:+254797547464" className="flex items-center gap-2">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">Phone</span>
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="glass-effect hover:bg-white/10 transition-all duration-300 group"
                asChild
              >
                <a href="https://linkedin.com" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="glass-effect hover:bg-white/10 transition-all duration-300 group"
                asChild
              >
                <a href="https://github.com/Spookyliane" className="flex items-center gap-2">
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills"
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text"
            >
              Skills & Technologies
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="group"
                  >
                    <Card className="glass-effect p-6 h-full transition-all duration-300 group-hover:border-primary/50">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} group-hover:animate-pulse-glow`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold">{skill.name}</h3>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Proficiency</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div 
                            className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects"
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text"
            >
              Featured Projects
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="group"
                >
                  <Card className="glass-effect p-6 h-full transition-all duration-300 group-hover:border-primary/50">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button 
                      variant="ghost" 
                      className="w-full glass-effect hover:bg-primary/20 transition-all duration-300"
                      asChild
                    >
                      <a href={project.link}>View Project</a>
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact"
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold mb-8 gradient-text"
            >
              Let's Work Together
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            >
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              <Button 
                size="lg"
                className="glass-effect hover:bg-primary/20 transition-all duration-300 group h-16"
                asChild
              >
                <a href="mailto:Vomirone@gmail.com" className="flex flex-col items-center gap-1">
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Email Me</span>
                </a>
              </Button>
              
              <Button 
                size="lg"
                className="glass-effect hover:bg-primary/20 transition-all duration-300 group h-16"
                asChild
              >
                <a href="tel:+254745468173" className="flex flex-col items-center gap-1">
                  <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Call Me</span>
                </a>
              </Button>
              
              <Button 
                size="lg"
                className="glass-effect hover:bg-primary/20 transition-all duration-300 group h-16"
                asChild
              >
                <a href="https://linkedin.com" className="flex flex-col items-center gap-1">
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </Button>
              
              <Button 
                size="lg"
                className="glass-effect hover:bg-primary/20 transition-all duration-300 group h-16"
                asChild
              >
                <a href="https://github.com/Spookyliane" className="flex flex-col items-center gap-1">
                  <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">GitHub</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground">
              © 2025 Lianedev. Built with React and Framer Motion
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
