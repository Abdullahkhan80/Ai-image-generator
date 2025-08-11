import React, { useContext } from 'react'

const Loader = () => {
  return (
     <div className='h-screen w-screen fixed top-0 left-0 flex items-center justify-center backdrop-blur-sm z-70'>
      <div className="flex flex-col items-center">
        <svg className="animate-spin h-16 w-16 text-lime-400 mb-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
        </svg>
      
      </div>
    </div>

  )
}

export default Loader