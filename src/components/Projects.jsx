import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { projects } from "../data/portfolioData";

const Projects = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const sectionContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
  };

  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Featured Projects 🚀
        </h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12"
          variants={sectionContainerVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
              variants={projectCardVariants}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover md:h-96"
                variants={imageVariants}
              />
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold text-gray-800 mb-2"
                  variants={contentVariants}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 text-sm mb-4"
                  variants={contentVariants}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex justify-center space-x-4"
                  variants={contentVariants}
                >
                  <a
                    href={project.link}
                    className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm hover:bg-blue-700 transition duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="bg-gray-800 text-white py-2 px-4 rounded-full text-sm hover:bg-gray-900 transition duration-300"
                  >
                    GitHub
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
