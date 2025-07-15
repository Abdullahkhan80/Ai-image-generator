import React, { useState } from 'react'
import { assets } from '../../public/assets/assets'
const Generate = () => {
  const [isLoadded, setisLoadded] = useState(false)
  const [input, setinput] = useState(null)
  const [image, setimage] = useState(assets.sample_img_2)
  const onSubmitHandler = async (e) => {
    
  }
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-950 via-gray-800 to-gray-900 px-2 md:px-4 py-10 md:py-16">
      <div className="w-full max-w-3xl bg-gray-800/90 rounded-3xl shadow-2xl p-4 md:p-10 flex flex-col items-center gap-6 md:gap-10 border border-gray-700">
        <h1 className="text-2xl md:text-4xl font-extrabold text-lime-400 text-center mb-2 tracking-tight drop-shadow-lg">Generate an AI Image</h1>
        <p className="text-gray-300 text-center max-w-xl mb-2 md:mb-4 text-sm md:text-base leading-relaxed">Describe your vision and let <span className="font-bold text-lime-400">PIXORA</span> create a unique image for you. The more details you provide, the better the result!</p>
        <form onSubmit={onSubmitHandler} className="w-full flex flex-col gap-3 md:gap-4">
          <label className="text-gray-400 text-sm mb-1 font-semibold" htmlFor="prompt">Prompt</label>
          <textarea
          onChange={(e) => setinput(e.target.value)} value={input}
            id="prompt"
            className="w-full min-h-[120px] md:min-h-[150px] rounded-xl p-3 md:p-4 bg-gray-900 text-white border border-gray-700 focus:border-lime-400 focus:ring-2 focus:ring-lime-400 outline-none resize-none text-base md:text-lg placeholder-gray-500"
            placeholder="Describe your image (e.g. A futuristic city at sunset, vibrant colors, flying cars...)"
          />
          {!isLoadded &&
            <button
              type="submit"
              className="w-full py-2 md:py-3 border-lime-400 border-2 text-lime-400 font-bold rounded-2xl hover:bg-lime-400 hover:text-black transition-colors text-xs md:text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 mt-2"
            >
              Generate Image
            </button>
          }
          {isLoadded &&
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 justify-around mt-2">
              <button onClick={()=> setisLoadded(false)} className="w-full md:w-auto px-3 py-2 md:px-8 md:py-3 border border-lime-400 text-lime-400 font-bold rounded-3xl hover:bg-lime-400 hover:text-black transition-colors text-base md:text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2">
                Generate Another
              </button>
              <a
                href={image}
                download
                className="w-full flex justify-center md:w-auto px-3 py-2 md:px-8 md:py-3 bg-lime-400 text-black font-bold rounded-3xl hover:bg-lime-500 transition-colors text-base md:text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
              >
                Download Image
              </a>
            </div>
          }
        </form>
        {/* Placeholder for generated image */}
        <div className="w-full flex flex-col items-center mt-4 md:mt-6">
          <div className="w-full h-40 md:h-64 bg-gradient-to-br from-gray-700/80 to-gray-800/80 rounded-2xl flex items-center justify-center text-gray-400 text-base md:text-lg border-2 border-dashed border-lime-400/30">
            <span className="flex flex-col items-center">
              <svg className="w-10 h-10 mb-2 text-lime-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V19a2 2 0 002 2h14a2 2 0 002-2v-2.5M16 3.13a4 4 0 010 7.75M12 7v6m0 0l-3-3m3 3l3-3" /></svg>
              Your generated image will appear here
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Generate