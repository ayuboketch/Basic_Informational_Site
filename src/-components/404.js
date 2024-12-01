import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
function NotFound() {
    return (_jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-6xl font-bold text-red-600 mb-4", children: "404" }), _jsx("p", { className: "text-2xl text-gray-700 mb-4", children: "Page Not Found" }), _jsx("p", { className: "text-gray-600 mb-6", children: "The page you're looking for doesn't exist or has been moved." }), _jsx(Link, { to: "/", className: "bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300", children: "Return to Home" })] }));
}
export default NotFound;
