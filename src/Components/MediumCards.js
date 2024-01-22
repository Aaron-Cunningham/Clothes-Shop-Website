import React from 'react';

function MediumCard({ img, text }) {
  return (
    <div className='relative flex-1'>
      <img className='w-full h-[90%] cursor-pointer hover:opacity-90 transition-opacity duration-300' src={img} alt={text} />
      <div className='flex flex-col absolute top-[90%] left-3 sm:top-[75%] md:top-[80%] lg:top-[85%]'>
        <h2 className='text-lg text-white font-semibold md:text-sm lg:text-lg'>
          {text}
        </h2>
      </div>
    </div>
  );
}




export default MediumCard;
