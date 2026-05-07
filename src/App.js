import {
  FaGithub,
  FaLinkedin,
  FaPython,
  FaReact,
  FaDownload,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import profile from "./assets/profile.jpg";
import resume from "./assets/resume.pdf";

function App() {
  return (
    <div className="bg-slate-950 text-white overflow-hidden">

      {/* GLOW EFFECT */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 blur-[200px] opacity-20 rounded-full"></div>

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 flex justify-between items-center px-10 py-6 bg-slate-950/70 backdrop-blur-md">

        <h1 className="text-3xl font-bold text-cyan-400">
          Kartik Bhagat
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4"
      >

        {/* PROFILE IMAGE */}
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          src={profile}
          alt="profile"
          className="w-48 h-48 rounded-full object-cover border-4 border-cyan-400 shadow-lg shadow-cyan-500/50 mb-10"
        />

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold"
        >
          Hi, I'm Kartik 👋
        </motion.h1>

        {/* TYPING EFFECT */}
        <div className="text-cyan-400 text-2xl md:text-4xl mt-6 font-bold">

          <TypeAnimation
            sequence={[
              "AI Developer",
              2000,
              "React Developer",
              2000,
              "ML Engineer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />

        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-400 mt-8 max-w-2xl text-lg">
          Passionate about AI, Deep Learning and modern web applications.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-6 mt-10">

          <a
            href={resume}
            download
            className="bg-cyan-500 px-8 py-4 rounded-2xl hover:scale-105 duration-300 flex items-center gap-3"
          >
            <FaDownload />
            Resume
          </a>

          <a
            href="#contact"
            className="border border-cyan-500 px-8 py-4 rounded-2xl hover:bg-cyan-500 duration-300"
          >
            Contact
          </a>

        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-8 text-4xl mt-10">

          <a
            href="https://github.com/KartikBhagat18"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-cyan-400 hover:scale-125 duration-300" />
          </a>

          <a
            href="https://www.linkedin.com/in/kartik-bhagat-508635408"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:text-cyan-400 hover:scale-125 duration-300" />
          </a>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center px-10 md:px-32"
      >

        <h1 className="text-5xl font-bold text-cyan-400 mb-10">
          About Me
        </h1>

        <p className="text-xl leading-10 text-gray-300">
          I'm Kartik Bhagat, a passionate AI & Full Stack Developer from India.
          I specialize in Machine Learning, CNN models, TensorFlow and modern web technologies.
          I love building intelligent applications and futuristic web experiences.
        </p>

      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="min-h-screen px-10 md:px-32 py-20"
      >

        <h1 className="text-5xl font-bold text-cyan-400 mb-20">
          Skills
        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          {/* PYTHON */}
          <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 hover:-translate-y-4 duration-500">
            <FaPython className="text-7xl text-yellow-400 mb-6" />
            <h2 className="text-3xl font-bold">Python</h2>
          </div>

          {/* REACT */}
          <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 hover:-translate-y-4 duration-500">
            <FaReact className="text-7xl text-cyan-400 mb-6" />
            <h2 className="text-3xl font-bold">React</h2>
          </div>

          {/* TENSORFLOW */}
          <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 hover:-translate-y-4 duration-500">
            <h2 className="text-6xl mb-6">🤖</h2>
            <h2 className="text-3xl font-bold">TensorFlow</h2>
          </div>

          {/* MONGODB */}
          <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 hover:-translate-y-4 duration-500">
            <h2 className="text-6xl mb-6">🌐</h2>
            <h2 className="text-3xl font-bold">MongoDB</h2>
          </div>

          {/* JAVASCRIPT */}
          <div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 hover:-translate-y-4 duration-500">
            <h2 className="text-6xl mb-6">⚡</h2>
            <h2 className="text-3xl font-bold">JavaScript</h2>
          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen px-10 md:px-32 py-20"
      >

        <h1 className="text-5xl font-bold text-cyan-400 mb-20">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* PROJECT 1 */}
          <div className="bg-slate-900 rounded-3xl overflow-hidden hover:scale-105 duration-500">

            <img
              src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e"
              alt="Brain Tumor Detection"
              className="h-64 w-full object-cover"
            />

            <div className="p-8">

              <h2 className="text-3xl font-bold mb-4">
                Brain Tumor Detection
              </h2>

              <p className="text-gray-400">
                CNN model that detects tumors using MRI images.
              </p>

            </div>

          </div>

          {/* PROJECT 2 */}
          <div className="bg-slate-900 rounded-3xl overflow-hidden hover:scale-105 duration-500">

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="AI Chatbot"
              className="h-64 w-full object-cover"
            />

            <div className="p-8">

              <h2 className="text-3xl font-bold mb-4">
                AI Chatbot
              </h2>

              <p className="text-gray-400">
                Intelligent chatbot using Machine Learning.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4"
      >

        <h1 className="text-6xl font-bold text-cyan-400 mb-10">
          Contact Me
        </h1>

        <p className="text-xl text-gray-400 mb-10">
          bhagatkartik700@gmail.com
        </p>

        <button className="bg-cyan-500 px-10 py-5 rounded-2xl hover:scale-110 duration-300">
          Say Hello 👋
        </button>

      </section>

    </div>
  );
}

export default App;