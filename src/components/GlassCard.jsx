import React from 'react'

function GlassCard() {
  return (
    <>
    {/* 
        <div className='top-0 -mt-55 duration-400 ease-in-out hover:-translate-y-2' >
                <div className="flex items-center justify-center pl-15 ">
                    <h1 className="text-2xl font-bold text-gray-800 p-5 underline">Projects</h1>
                    
                </div>
                
                <ul className='text-xl p-5 max-w-50 max-h-50 text-gray-800 absolute flex flex-col items-center justify-center gap-7'>
                    <li className=''>
                        <h1></h1>
                    </li>
                    <li>
                        <h1>Movie Website</h1>
                    </li>
                    <li>
                        <h1>Commit Clock (Vs code Extension)</h1>
                    </li>
                    <li>
                        <h1>AI G-Dino</h1>
                    </li>
                    <li>
                        <h1>Three.js</h1>
                    </li>
                </ul>
                
                    <div className="bg-black/3 border border-white/10 shadow-xl h-85 rounded-2xl backdrop-blur-[10px] aspect-[1/1] absolute 
                    transition-all duration-300 ease-in-out -hover:translate-y-2 hover:translate-x-1 hover:shadow-md ">
                        <div className='flex items-center justify-center min-h-80'>
                            <h className="text-2xl font-semibold text-gray-600">Developing...</h>
                        </div>
                    </div>
            </div>
        */}
        
        <div className='' >
            <div className='flex justify-center pb-4'>
                    <h1 className="font-s text-3xl font-bold text-gray-800 underline">Projects</h1>
            </div>
                <div className='h-95 aspect-[4/5] p-10 absolute'> 
                    <ul className=' pt-10 absolute flex flex-col gap-5 text-gray-800/60'>
                        <li>Movie Website</li>
                        <hr></hr>
                        <li>Commit Clock (Vs code Extension)</li>
                        <hr></hr>
                        <li>AI G-Dino</li>
                        <hr></hr>
                        <li>Product showcase</li>
                    </ul>
                </div>
            <div className='bg-gray-200/20 rounded-2xl shadow-lg noise-bg p-5 alt-message relative group transition-all duration-300 ease-in-out -hover:translate-y-2 hover:translate-x-1 hover:shadow-md'>
                <div className="bg-black/5 border border-white/10 shadow-xl h-80 rounded-2xl backdrop-blur-[4px] aspect-[1/1] 
                         ">
                    <div className='flex items-center justify-center min-h-80'>
                        <h1 className="text-2xl font-semibold text-gray-600 font-s">Developing</h1>
                        <h1 className="ml-2 flex space-x-1 w-6 text-4xl pb-3">
                            <h1 className="dot animate-dot delay-[0s]">.</h1>
                            <h1 className="dot animate-dot delay-[2s]">.</h1>
                            <h1 className="dot animate-dot delay-[4s]">.</h1>
                        </h1>
                    </div>
                </div>
                <div className="absolute duration-700 bottom-[-2.5rem] left-1/2 transform -translate-x-1/2 bg-white text-gray-700 text-sm px-3 py-1 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
                    Live preview will be available here soon
                </div>
            </div>
            
            
        </div>
    </>
    


  )
}

export default GlassCard