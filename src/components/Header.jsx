import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        {/* Logo/Name */}
        <a
          href="/"
          className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition duration-300"
        >
          P Neeraj Aravindhakshan
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#about"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-blue-600"
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-1/2 bg-white/80 backdrop-blur-sm text-gray-800 shadow-lg px-6 flex flex-col items-end space-y-4 md:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween" }}
          >
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800 transition-colors"
              aria-label="Close mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <a
              href="#about"
              onClick={toggleMenu}
              className="text-xl text-gray-800 hover:text-blue-600 transition-colors py-2"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={toggleMenu}
              className="text-xl text-gray-800 hover:text-blue-600 transition-colors py-2"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={toggleMenu}
              className="text-xl text-gray-800 hover:text-blue-600 transition-colors py-2"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="text-xl text-gray-800 hover:text-blue-600 transition-colors py-2"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
