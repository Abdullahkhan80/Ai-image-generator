import React from 'react'
import { plans } from '../../public/assets/assets';

const Buy = () => {
  return (
    <section className="w-full min-h-screen flex flex-col  items-center justify-center bg-gradient-to-br from-purple-950 via-gray-800 to-gray-900 px-1 sm:px-2 md:px-4 py-8 md:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-lime-400 text-center mb-3 mt-10 md:mt-0 md:mb-10  drop-shadow-lg tracking-tight">Our Plans</h1>
      <p className="text-gray-300 text-center max-w-2xl mb-6 sm:mb-8 md:mb-14 text-sm sm:text-base md:text-lg">Choose the plan that fits your creative needs. Upgrade anytime and unlock more powerful features for your AI image generation journey.</p>
      <div className="w-full max-w-5xl grid grid-cols-1 p-5  md:p-0 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col items-center bg-gray-800/90 rounded-3xl shadow-2xl py-10 px-5 md:py-5 md:px-5 sm:p-7 md:p-8 border-2 ${plan.highlight ? 'border-lime-400 scale-105 z-10 ring-4 ring-lime-400/20' : 'border-gray-700'} transition-transform group hover:scale-105`}
          >
            {plan.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-400 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg uppercase tracking-wider">Most Popular</span>
            )}
            <div className="text-lg sm:text-2xl font-bold mb-2 text-lime-400 group-hover:text-white transition">{plan.name}</div>
            <div className="text-2xl sm:text-3xl font-extrabold mb-4 text-white group-hover:text-lime-400 transition">{plan.price}</div>
            <ul className="mb-6 space-y-2 w-full">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-300 flex items-center gap-2 text-sm sm:text-base md:text-lg">
                  <span className="inline-block w-2 h-2 bg-lime-400 rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 sm:py-3 rounded-2xl font-bold shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 ${plan.highlight ? 'bg-lime-400 text-black hover:bg-lime-500' : 'bg-gray-900 text-lime-400 border border-lime-400 hover:bg-lime-400 hover:text-black'}`}
            >
              {plan.price === 'Contact Us' ? 'Contact Sales' : 'Choose Plan'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Buy