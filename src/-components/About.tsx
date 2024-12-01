import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 flex items-center justify-center px-4 ">
      <div className="container mx-auto px-4 py-16 max-w-4xl bg-white rounded-lg shadow-lg">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-6">About Me</h2>
        
        {/* Intro Section */}
        <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
          Hello! My name is <span className="font-bold">Ayub Oketch</span>, and I’m a passionate web developer with a love for creating modern, clean, and user-friendly web applications. This site is a demonstration of my skills in React and Tailwind CSS.
        </p>
        
        {/* Skills Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">My Skills & Expertise</h3>
          <p className="text-gray-700 text-lg">
            Over the course of my journey in web development, I’ve honed a variety of technical skills, including:
          </p>
          <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
            <li>
              Proficient in front-end technologies like <span className="font-bold">JavaScript</span>, <span className="font-bold">React</span>, and styling frameworks such as <span className="font-bold">Tailwind CSS</span>.
            </li>
            <li>
              Building dynamic and responsive designs with a focus on user experience.
            </li>
            <li>
              Back-end development using <span className="font-bold">Node.js</span>, including REST API creation and server-side logic.
            </li>
            <li>
              Experience with state management libraries and modern development tools.
            </li>
          </ul>
        </div>

        {/* Personal Vision */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Why I Love Web Development</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            I thrive on solving problems and turning ideas into reality through code. For me, web development is about more than just writing code—it's about creating experiences that make people's lives easier and more enjoyable. I'm committed to continuous learning and growing as a developer to stay ahead of the curve in this ever-evolving industry.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Want to Work Together?</h3>
          <p className="text-gray-700 text-lg mb-6">
            If you’re looking for a dedicated developer to bring your ideas to life or collaborate on an exciting project, feel free to get in touch!
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            <Link to='/Contact' >Contact Me</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
