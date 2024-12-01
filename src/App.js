import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LandingPage from './-components/LandingPage';
import Home from './-components/Home';
import About from './-components/About';
import Contact from './-components/Contact';
import './App.css';
const App = () => {
    return (_jsx(BrowserRouter, { children: _jsxs("div", { className: "min-h-screen bg-gray-100", children: [_jsx("nav", { className: "bg-blue-600 p-4", children: _jsxs("div", { className: "container mx-auto flex justify-between items-center", children: [_jsx("h1", { className: "text-white text-2xl font-bold", children: "Ayub Oketch" }), _jsxs("div", { className: "space-x-4", children: [_jsx("button", { style: { margin: '20px' }, children: _jsx("a", { href: "/home", className: "text-white hover:text-blue-200", children: "Home" }) }), _jsx("button", { style: { margin: '20px' }, children: _jsx("a", { href: "/about", className: "text-white hover:text-blue-200", children: "About" }) }), _jsx("button", { style: { margin: '20px' }, children: _jsx("a", { href: "/contact", className: "text-white hover:text-blue-200", children: "Contact" }) })] })] }) }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/home", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) })] })] }) }));
};
export default App;
