import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 3,
    title: 'Senior Graduation Project – Smart Home Using IoT',
    role: 'Full-stack Developer',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Raspberry Pi'],
    desc: `Designed and developed a smart home system that allows remote control of home appliances. Used sensors and Raspberry Pi for real-time data processing and implemented web interface using React.`,
    year: 2022
  }
];

function Project({ id }) {
  const project = projects.find((p) => p.id === Number(id));
  if (!project) return <div className="p-6">Project not found.</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <motion.h1 className="text-3xl font-bold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {project.title}
      </motion.h1>
      <p className="text-gray-600 mb-2">Role: <strong>{project.role}</strong></p>
      <p className="text-gray-600 mb-2">Year: <strong>{project.year}</strong></p>
      <div className="mb-4">
        {project.tech.map((tech) => (
          <span key={tech} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2">
            {tech}
          </span>
        ))}
      </div>
      <p className="text-gray-800 leading-relaxed">{project.desc}</p>
    </div>
  );
}

function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-gray-600">Explore my work and experiences</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="p-4 shadow-md bg-white">
        <div className="max-w-4xl mx-auto flex space-x-4">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-600'}>Home</NavLink>
          <NavLink to="/project/3" className={({ isActive }) => isActive ? 'text-blue-600 font-bold' : 'text-gray-600'}>Project</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectWrapper />} />
      </Routes>
    </Router>
  );
}

function ProjectWrapper() {
  const id = window.location.pathname.split('/').pop();
  return <Project id={id} />;
}

export default App;