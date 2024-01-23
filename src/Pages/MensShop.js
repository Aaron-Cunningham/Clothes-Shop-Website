import React, { useEffect, useState } from 'react'
import ItemCard from '../Components/Cards/ItemCard'
import { useBinData } from '../useBinData';
import { RxCross2 } from "react-icons/rx";
import BannerCard from '../Components/Cards/BannerCard';
import { mensBannerImg } from '../data';

function MensShop() {
    const fetchedData = useBinData('65aff84d266cfc3fde7ed801')


    const cards = fetchedData.map((item, index) => (
        <ItemCard
        key={index}
        {...item}/>
    ))

    const bannerCards = mensBannerImg.map((items, index) => (
        <BannerCard
        key = {index}
        {...items}/>
    ))
  return (
    <div>
        <div className='flex justify-center bg-gray-100 py-4'>
            <h1 className='text-2xl font-bold'>MENS</h1>
        </div>
        <div className=' md:max-w-[80rem] md:mx-auto md:px-1 bg-gray-100 mt-2 pt-2'>
            <p className='ml-5'>
                At MOKI, we aim to find the best fit for you! Have a browse around our mens section, and see what you like.
            </p>
            <div className='flex justify-evenly pb-3 mt-3'>
                {bannerCards}
            </div>
        </div>
        <div className='max-w-full md:max-w-[100rem] md:mx-auto  mt-20 flex justify-center mb-2'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-[80%]'>
                {cards}
            </div>
        </div>
    </div>

  )
}

export default MensShop