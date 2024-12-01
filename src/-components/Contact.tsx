import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for reaching out! Your message has been submitted.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-lg p-10">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Fill in the form below, and I’ll get back to you shortly. Let’s create something amazing together!
        </p>
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              placeholder="Enter your full name"
              required
            />
          </div>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              placeholder="Enter your email address"
              required
            />
          </div>
          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              rows={5}
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 rounded-lg shadow-md hover:from-purple-600 hover:to-blue-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
