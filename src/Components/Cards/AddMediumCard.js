import React, { useState, useEffect } from 'react';
import MediumCard from './MediumCards';
import { heroImg } from '../../data';

function AddCard() {


  const fetchedData = heroImg;
  
  return (
    <section className='md:max-w-[85rem] md:mx-auto md:px-1'>
      <div className='flex flex-col gap-1 sm:flex-row sm:gap-1 mt-1'>
        {fetchedData.map(item => (
          <MediumCard
            key={item.id}
            img={item.img}
            text={item.text}
          />
        ))}
      </div> 
      <div className="relative">

      </div>
    </section>
  );
}

export default AddCard;
