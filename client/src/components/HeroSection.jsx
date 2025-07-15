import React, { useContext } from 'react'
import { assets } from '../../public/assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AppContext } from './AppContext'


const HeroSection = () => {
    const navigate =useNavigate();
    const { setshowLogin, user } = useContext(AppContext);

    const handleClick = () => {

        if (!user) {
            setshowLogin(true);
        } else {
            navigate('/generate');
        }
    }
    return (
        <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-purple-950  via-gray-900 to-gray-900 overflow-hidden px-4">
            {/* Hero Card */}
            <div className="flex flex-col items-center justify-center w-full max-w-3xl gap-10 py-16 md:py-28 mx-auto">
                <div className="flex flex-col items-center text-center gap-8 w-full">
                    <div className="flex items-center justify-center gap-3 bg-gray-800/80 border border-lime-400 rounded-full px-6 py-2 shadow-lg mb-2">
                        <img src={assets.star_icon} alt="star" className="w-6 h-6" />
                        <span className="text-lime-400 font-semibold tracking-wide text-base">Best text to image generator</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                        Unleash Your Creativity<br />
                        with <span className="text-lime-400">AI Image Generation</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 max-w-xl mx-auto">
                        Instantly create stunning, unique images from your imagination.<br className="hidden md:block" />
                        Just describe what you want, and let <span className="font-bold text-lime-400">PIXORA</span> do the magic.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-2 w-full">   
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}  
                                onClick={handleClick}   
                                className="px-8 py-3 flex items-center gap-1  bg-lime-400 text-black font-extrabold rounded-3xl hover:bg-lime-500 transition-colors text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2">
                                Generate Now
                                <img width={30} src={assets.star_group} alt="" />
                            </motion.button>
                        <Link
                            to="/buy"
                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 border border-lime-400 text-lime-400 font-bold rounded-3xl hover:bg-lime-400 hover:text-black transition-colors text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2">
                                See Pricing
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection