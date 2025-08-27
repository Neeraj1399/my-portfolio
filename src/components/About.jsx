import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import yourPhoto from "../assets/photo_profile.jpg";

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="about" className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row items-center md:space-x-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Profile Photo */}
          <motion.div
            className="w-full md:w-1/3 mb-8 md:mb-0"
            variants={itemVariants}
          >
            <img
              src={yourPhoto}
              alt="Neeraj Aravindhakshan"
              className="rounded-full shadow-lg w-48 h-48 mx-auto object-cover"
            />
          </motion.div>

          <div className="w-full md:w-2/3 text-center md:text-left">
            {/* Title */}
            <motion.h1
              className="text-4xl font-bold text-gray-800 mb-4"
              variants={itemVariants}
            >
              Hello, I'm P Neeraj Aravindhakshan 👋
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Motivated and detail-oriented Computer Science graduate with
              hands-on experience in full-stack development using the MERN
              stack. Passionate about building scalable web applications and
              solving real-world problems. Collaborative team player with a
              focus on clean, maintainable, and scalable code.
            </motion.p>

            <motion.div className="mt-8" variants={itemVariants}>
              <a
                href="#contact"
                className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
