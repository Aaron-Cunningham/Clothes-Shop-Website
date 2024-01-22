import React from 'react';
import { MediumCardsData } from './Data/MediumCardsData';
import MediumCard from './MediumCards';

function AddCard() {
  return (
    <section className='md:max-w-[110rem] md:mx-auto md:px-1'>
      <div className='flex flex-col gap-1 sm:flex-row sm:gap-1 m-1'>
        {MediumCardsData.map(item => (
          <MediumCard
            key={item.id} 
            img={item.img}
            text={item.text} 
          />
        ))}
      </div>
    </section>
  );
}

export default AddCard;