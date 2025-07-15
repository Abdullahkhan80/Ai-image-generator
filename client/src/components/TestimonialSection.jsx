import React from "react";
import { assets, testimonialsData } from "../../public/assets/assets";
import { motion } from "framer-motion";


const TestimonialSection = () => {
  return (
    <section className="w-full py-16 flex flex-col items-center px-4 bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-extrabold text-lime-400 mb-10 text-center drop-shadow-lg">What Our Users Say</h2>
      <motion.div
        initial={{ y: 100, opacity: 0, }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialsData.map((t, idx) => (
          <div key={idx} className="bg-gray-800/80 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-700">
            <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full mb-4 border-2 border-lime-400 object-cover" />
            <p className="text-gray-200 text-base mb-4">“{t.text}”</p>
            <div className="font-bold text-lime-400">{t.name}</div>
            <div className="text-gray-400 text-sm">{t.role}</div>
            <div className="flex justify-center items-center mt-2">
              {[...Array(t.stars)].map((_, i) => (
                <img key={i} src={assets.rating_star} alt="star" className="w-5 h-5 mx-0.5" />
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
