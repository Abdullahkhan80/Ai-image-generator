import React from 'react';
import { assets } from '../../public/assets/assets';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0, }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="w-full py-16 bg-gray-900 flex flex-col items-center px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-lime-400 mb-10 text-center drop-shadow-lg">About PIXORA</h2>
      <motion.div
        initial={{ y: 100, opacity: 0, }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 bg-gray-800/80 rounded-3xl shadow-xl p-6 md:p-12">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <p className="text-lg md:text-xl text-gray-300">
            <span className="font-bold text-lime-400">PIXORA</span> is your creative companion for generating stunning, unique images using the power of artificial intelligence. Whether you're an artist, designer, marketer, or just someone with a vivid imagination, PIXORA empowers you to bring your ideas to life instantly.<br className="hidden md:block" />
            <br />
            Our mission is to make high-quality image generation accessible, fun, and effortless for everyone.
          </p>
          <p className="text-base md:text-lg text-gray-400">
            Built with cutting-edge AI technology, PIXORA transforms your text prompts into beautiful visuals in seconds. No design skills required—just describe what you want, and let our platform do the rest. Join a growing community of creators and experience the future of image generation today!
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src="./assets/About.jpeg" alt="PIXORA sample" className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-2xl border-4 border-gray-700 bg-gray-900/60 object-cover" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
