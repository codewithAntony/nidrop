import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navigation = () => {
    const [isActive, setIsActive] = useState(false)
  return (
    <div className='flex items-center justify-center'>
        <div className='pt-3'>
            <div className='flex gap-1'>
                <div className={`w-16 h-10 bg-white flex items-center justify-center text-center text-[#1D313F] cursor-pointer rounded-sm p-2 transition-all ease-in-out duration-500 hover:bg-[#1D313F] hover:text-white`}
                onClick={() => setIsActive(!isActive)}>nidrop</div>
                
                <button className={`relative w-30 h-10 bg-white flex items-center justify-center text-[#1D313F] cursor-pointer rounded-sm transition-all ease-in-out duration-500 group px-3`}
                onClick={() => setIsActive(!isActive)}>

                    <div className='absolute inset-0 bg-[#1D313F] transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100'></div>
                    <div className='relative z-10 flex items-center justify-center w-full'>
                        <span className='text-sm uppercase transition-colors duration-300 group-hover:text-white'>
menu
                        </span>
                        <div className='transition-all duration-300 group-hover:text-white'>
                            {isActive ? (<FaTimes className="text-sm" />) : (<FaBars className="text-sm" />)}
                        </div>
                    </div>
                    </button>
            </div>
            
            
        </div>
      
    </div>
  )
}

export default Navigation
