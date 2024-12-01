import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 flex items-center justify-center px-4">
      {/* Content Section */}
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center space-y-8" style={{color: 'white'}}>
        {/* Welcome Heading */}
        <h1 className="text-5xl font-extrabold text-gray-800" style={{color: 'white'}}>
          Welcome to My Information Site
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl" style={{color: 'white'}}>
          Hi, my name is <span className="font-bold text-blue-700">Ayub Oketch</span>. I am a web developer passionate about creating modern, responsive, and user-friendly web applications. This site highlights my skills and journey in web development.
        </p>

        {/* About Me Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            I specialize in front-end and back-end web development, with a focus on building scalable and efficient applications. My expertise includes:
          </p>
          <ul className="list-disc list-inside text-left text-gray-700 mt-4">
            <li>
              Proficiency in <span className="font-bold">JavaScript</span> and modern frameworks like <span className="font-bold">React</span>.
            </li>
            <li>
              Styling libraries such as <span className="font-bold">Tailwind CSS</span> for creating responsive designs.
            </li>
            <li>
              Experience with <span className="font-bold">Node.js</span> for server-side development.
            </li>
            <li>
              Currently learning advanced back-end technologies and API integrations.
            </li>
          </ul>
        </div>

        {/* Call to Action Section */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-gray-700" style={{color: 'white'}}>
            Explore the site to learn more about me or get in touch to collaborate on exciting projects!
          </p>
          <button  className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            <Link to='/Contact' >Contact Me</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
