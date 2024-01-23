import React from 'react'


function Hero() {
  return (
        <section className='mt-1'>
            <div className='flex justify-evenly items-center bg-black text-center p-7 mb-1'>
                <div className='hidden lg:flex'>
                    <button className='border-2 border-white text-white px-2 text-lg font-semibold active:scale-90 transition transform duration-500 ease-out w-[100px] hover:opacity-80'>WOMEN</button>
                </div>
                <div className=''>
                    <p className='text-white font-semibold'>Do you want 15% off almost everything?* Use code: WINTERMOKI</p>
                </div>
                <div className='hidden lg:flex'>
                    <button className='border-2 border-white text-white px-2 text-lg font-semibold active:scale-90 transition-all transform duration-500 ease-in-out w-[100px] hover:opacity-80'>MEN</button>
                </div>
            </div>
            
            <div className='md:max-w-[85rem] md:mx-auto md:px-1 '>

                <div className=' h-[500px] sm:h-[400px] lg:h-[500px] xl:h-[600px] xxl:h-[700px] '>
                    <img alt={"Cover photo"} src="https://robbreport.com/wp-content/uploads/2021/04/todd-snyder-footjoy-1.jpg" class="w-full h-full object-cover"/>

                    <div className='flex flex-col absolute top-1/4 left-0 right-0 mt-32 xl:mt-24 items-center'>
                        <h1 className='text-white text-6xl lg:text-7xl font-bold mb-5'>This is MOKI</h1>
                        <div className='flex flex-col items-center justify-center mt-6 gap-7 text-2xl font-semibold sm:flex-row'>
                            <button className='bg-white py-2 w-[180px] justify-center hover:opacity-80 transition-all transform duration-300 ease-in-out'>Shop Women</button>
                            <button className='bg-white py-2 w-[180px] flex justify-center hover:opacity-80 transition-all transform duration-300 ease-in-out'>Shop Men</button>
                        </div>
                    </div>
                    
                </div>
                

            </div>
        </section>
    
  )
}

export default Hero





