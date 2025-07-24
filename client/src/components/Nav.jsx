import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../public/assets/assets';
import { AppContext } from './AppContext';
import { motion } from 'framer-motion';

const Nav = () => {
    const { user, logout, credit, setshowLogin } = useContext(AppContext);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showLogout, setShowLogout] = useState(false);

    console.log("Nav credit:", credit);

    return (
        <nav className="fixed top-0 left-0 flex items-center justify-between px-4 py-3 w-full z-50 bg-gradient-to-b from-gray-950/90 via-gray-900/80 to-transparent text-white shadow-sm">
            <div className="text-2xl font-bold text-lime-400 tracking-wide">
                <Link to="/">PIXORA</Link>
            </div>
            {/* Hamburger for mobile */}
            <div className="md:hidden flex items-center">
                <button
                    className="focus:outline-none"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    aria-label="Toggle Menu"
                >
                    <svg className="w-8 h-8 text-lime-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={showMobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
                    </svg>
                </button>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
                {user ? (
                    <>
                        <Link to="/buy" className="flex items-center gap-2 px-4 py-2 bg-lime-400 rounded-3xl hover:bg-lime-500 font-semibold transition-colors">
                            <img src={"./assets/credit_star.svg"} alt="" />
                            <span>Credit left : {credit}</span>
                        </Link>
                        <div className="flex items-center gap-2 relative">
                            <span>Hi {user.name}</span>
                            <div className="relative">
                                <img
                                    src={assets.profile_icon}
                                    width={40}
                                    alt=""
                                    className="cursor-pointer rounded-full border-2 border-lime-400"
                                    onClick={() => setShowLogout((prev) => !prev)}
                                />
                                {showLogout && (
                                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-32 bg-gray-900 text-white text-center text-sm rounded shadow-lg py-2 z-20">
                                        <button onClick={logout} className="w-full text-left px-4 py-2 hover:bg-gray-800">Logout</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to="/buy" className="text-white hover:text-lime-400 font-semibold transition-colors">Pricing</Link>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setshowLogin(true)}
                            className="px-4 text-black py-2 bg-lime-400 rounded-3xl hover:bg-lime-500 font-semibold transition-colors"
                        >
                            Login
                        </motion.button>
                    </>
                )}
            </div>
            {/* Mobile Menu */}
            {showMobileMenu && (
                <div className="md:hidden absolute top-16 left-0 w-full  bg-gray-900/95 flex flex-col-reverse items-center gap-6 py-6 z-40 shadow-2xl animate-fade-in-down">
                    {user ? (
                        <>
                            <Link to="/buy" className="flex items-center gap-2 px-4 py-2 bg-lime-400 rounded-3xl hover:bg-lime-500 font-semibold transition-colors w-11/12 justify-center">
                                <img src={"./assets/credit_star.svg"} alt="" />
                                <span>Credit left :{credit}</span>
                            </Link>
                            <div className="flex flex-col items-center gap-2">
                                <img
                                    src={assets.profile_icon}
                                    width={40}
                                    alt=""
                                    className="cursor-pointer rounded-full border-2 border-lime-400"
                                    onClick={() => setShowLogout((prev) => !prev)}
                                />
                                <span>Hi {user.name}</span>
                                {showLogout && (
                                    <div className="w-32 bg-gray-900 text-white text-center text-sm rounded shadow-lg py-2 z-20 mt-2">
                                        <button className="w-full text-left px-4 py-2 hover:bg-gray-800">Logout</button>
                                        <Link to="/buy" className="flex items-center gap-1 py-2 px-4 bg-lime-400 rounded-3xl hover:bg-lime-500 font-semibold transition-colors mt-2">
                                            <img src={"./assets/credit_star.svg"} alt="" />
                                            <span>Credit left: {credit}</span>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/buy" className="text-white hover:text-lime-400 font-semibold transition-colors w-11/12 text-center">Pricing</Link>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    setshowLogin(true);
                                    setShowMobileMenu(false);
                                }}
                                className="w-11/12 px-4 py-2 bg-lime-400 text-black rounded-3xl hover:bg-lime-500 font-semibold transition-colors"
                            >
                                Login
                            </motion.button>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Nav;