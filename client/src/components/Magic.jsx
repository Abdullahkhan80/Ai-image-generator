import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../../public/assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from './AppContext'
const Magic = () => {
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
        <div className="flex flex-col items-center justify-center w-full max-w-3xl gap-10 py-16 md:py-28 mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                See The Magic
                <span className="text-lime-400"> Try Now</span>
            </h1>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClick}
                    className="px-8 py-3 border flex items-center border-lime-400 text-lime-400 font-bold rounded-3xl hover:bg-lime-400 hover:text-black transition-colors text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2">
                    Generate Now
                    <img width={30} src={assets.star_group} alt="" />
                </motion.button>
        </div>
    )
}

export default Magic