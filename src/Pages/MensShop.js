import React, { useEffect, useState } from 'react'
import ItemCard from '../Components/Cards/ItemCard'
import { useBinData } from '../useBinData';

function MensShop() {
    const fetchedData = useBinData('65aff84d266cfc3fde7ed801')


    const cards = fetchedData.map((item, index) => (
        <ItemCard
        key={index}
        {...item}/>

    ))
  return (
    <div>
        <div className='max-w-full md:max-w-[100rem] md:mx-auto  mt-20 flex justify-center mb-2'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-[80%]'>
                {cards}
            </div>
        </div>
    </div>

  )
}

export default MensShop