import { FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostman, SiVite } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

export const projects = [
  {
    title: "Chatbot: A Gemini-Powered Conversational AI App",
    description:
      "A single-page, full-stack conversational AI application built with the React.j. It uses the `@google/genai` library to communicate with the Gemini API, providing dynamic and intelligent responses. The frontend, built with React and Vite, features a sleek, responsive UI styled with Tailwind CSS. All AI-generated content is rendered with `react-markdown` to support rich text, while `axios` handles secure API communication with a Node.js/Express backend.",
    image: "/src/assets/chatbotDemo.jpg",
    link: "https://gemini-chatbot-plum-alpha.vercel.app/",
    github: "https://github.com/Neeraj1399/gemini-chatbot",
  },
  {
    title: "RideEasy: A MERN Stack Ride-Sharing App",
    description:
      "A full-stack ride-sharing application inspired by Porter, built using the MERN stack. It features secure user authentication with Clerk (including SSO), a geolocation API for location-based ride visibility, and a driver onboarding flow with secure KYC. The application allows drivers to manage their rides and customers to view and join them via RESTful APIs.",
    image: "/src/assets/RideeasyDemo.jpg",
    link: "#",
    github: "https://github.com/Neeraj1399/RideEasy",
  },
];

export const skills = [
  { name: "JavaScript", icon: FaJs },
  { name: "React.js", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "SQL", icon: FaDatabase },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Postman", icon: SiPostman },
  { name: "Vite", icon: SiVite },
];
