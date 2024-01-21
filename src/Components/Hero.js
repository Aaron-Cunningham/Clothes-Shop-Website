import React from 'react'


function Hero() {
  return (




        <section className=''>
            <div className='flex justify-evenly items-center bg-red-500 text-center p-7'>
                <div className='hidden md:flex'>
                    <button className='border-2 border-white text-white px-2 text-lg font-semibold active:scale-90 transition transform duration-100 ease-in-out w-[100px]'>WOMEN</button>
                </div>
                <div className=''>
                    <p className='text-white font-semibold'>Do you want 15% off almost everything?* Use code: BEEPBEEP</p>
                </div>
                <div className='hidden md:flex'>
                    <button className='border-2 border-white text-white px-2 text-lg font-semibold active:scale-90 transition transform duration-100 ease-in-out w-[100px]'>MEN</button>
                </div>
            </div>
            <div className='md:max-w-[110rem] md:mx-auto md:px-1 '>

                <div className='relative h-[500px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
                    <img src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2024/03-generic-hp/winter-generic-hp-1440x698.jpg" class="absolute w-full h-full object-cover"/>

                    <div className='flex flex-col absolute top-1/4 left-0 right-0 mt-3 items-center'>
                        <h1 className='text-red-400 text-5xl md:text-5xl lg:text-7xl font-bold mb-5'>This is beep</h1>
                        <p className='bg-black text-white text-sm py-1  w-[210px] rounded-md md:w-[300px] md:text-lg text-center'>Beep design and 950+ brands</p>
                        <div className='flex flex-col items-center justify-center mt-6 gap-7 text-2xl font-semibold md:flex-row'>
                            <button className='bg-white py-2 w-[180px] justify-center rounded-md'>Shop Women</button>
                            <button className='bg-white py-2 w-[180px] flex justify-center rounded-md'>Shop Men</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    
  )
}

export default Hero





