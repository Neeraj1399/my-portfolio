import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Contact = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          ref={ref}
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-8"
            variants={itemVariants}
          >
            Get In Touch 📧
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-xl"
            variants={itemVariants}
          >
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            variants={itemVariants}
          >
            <motion.a
              href="mailto:neerajaravind13@gmail.com"
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
              variants={itemVariants}
            >
              Email Me
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/neerajaravind"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-900 transition duration-300"
              variants={itemVariants}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/Neeraj1399"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-900 transition duration-300"
              variants={itemVariants}
            >
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
