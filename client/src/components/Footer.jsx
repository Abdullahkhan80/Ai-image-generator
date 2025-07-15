import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800 py-8 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-2xl font-bold text-lime-400 tracking-wide">
          <Link to="/">PIXORA</Link>
        </div>
        <div className="text-gray-400 text-sm flex flex-col md:flex-row gap-2 md:gap-6 items-center">
          <span>&copy; {new Date().getFullYear()} PIXORA. All rights reserved.</span>
          <span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition">Instagram</a> |
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition"> Twitter</a> |
            <a href="mailto:support@pixora.com" className="hover:text-lime-400 transition">Contact</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer