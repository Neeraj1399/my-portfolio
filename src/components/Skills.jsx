import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { skills } from "../data/portfolioData";

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">My Skills 🛠️</h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-center space-y-2 hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              {skill.icon && <skill.icon className="w-10 h-10 text-gray-700" />}
              <p className="text-lg font-medium text-gray-700">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
