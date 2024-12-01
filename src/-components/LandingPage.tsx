import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Ayub Oketch</h1>
          <div className="space-x-4">
            <button style={{margin: '20px'}}>
                <Link to="/" className="text-white hover:text-blue-200">
                Home
                </Link>
            </button>
            <button style={{margin: '20px'}}>
                <Link to="/About" className="text-white hover:text-blue-200">
                About
                </Link>
            </button>
            <button style={{margin: '20px'}}>
                <Link to="/Contact" className="text-white hover:text-blue-200">
                Contact
                </Link>
            </button>
          </div>
        </div>
      </nav> */}
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Welcome to my page
          </h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            My name is Ayub Oketch, and I am a JavaScript, React, and TypeScript
            developer. <br /> 
            </p>
            <p>
            Every day, I create apps to solve real-world problems and
            enhance user experiences.
            </p> 
          
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
