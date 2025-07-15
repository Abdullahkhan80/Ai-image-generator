import React from 'react';
import { assets, stepsData } from '../../public/assets/assets';
import { motion } from 'framer-motion';


const HowItWorks = () => {
  return (
    <motion.section
      initial={{ y:100, opacity: 0, }}
  whileInView={{ y:0 ,opacity: 1 }}
  transition={{ ease: "easeOut", duration: 0.5 }}
     className="w-full  py-16 bg-gray-900 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full max-w-5xl">
        {stepsData.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center bg-gray-800/80 rounded-2xl p-8 shadow-lg w-72 text-center border border-gray-700">
            <img src={step.icon} alt={step.title} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold text-lime-400 mb-2">{step.title}</h3>
            <p className="text-gray-300 text-base">{step.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default HowItWorks;
