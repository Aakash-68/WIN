import React from 'react'

function GlassCard() {
  return (
   <div className='top-0 -mt-55 duration-400 ease-in-out hover:-translate-y-2' >
        <div className="flex items-center justify-center pl-15 ">
            <h1 className="text-2xl font-bold text-gray-800 p-5 underline">Projects</h1>
            
        </div>
        
        <ul className='text-xl p-5 max-w-50 max-h-50 text-gray-800 absolute flex flex-col items-center justify-center gap-7'>
            <li className=''>
                <h1></h1>
            </li>
            <li>
                <h1>Projects</h1>
            </li>
            <li>
                <h1>Projects</h1>
            </li>
            <li>
                <h1>Projects</h1>
            </li>
            <li>
                <h1>Projects</h1>
            </li>
        </ul>
        
            <div className="bg-black/3 border border-white/10 shadow-xl h-85 rounded-2xl backdrop-blur-[10px] aspect-[1/1] absolute 
            transition-all duration-300 ease-in-out -hover:translate-y-2 hover:translate-x-1 hover:shadow-md ">
                <div className='flex items-center justify-center min-h-80'>
                    <h className="text-2xl font-semibold text-gray-600">Developing...</h>
                </div>
            </div>
    </div>


  )
}

export default GlassCard