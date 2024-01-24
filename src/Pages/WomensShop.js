import React from 'react'
import ItemCard from '../Components/Cards/ItemCard'
import { useBinData } from '../useBinData';
import { womensBannerImg } from '../data';
import BannerCard from '../Components/Cards/BannerCard';

function WomensShop() {
    const {fetchedData, isLoading} = useBinData('65afffeadc74654018995f8c')
    if (isLoading) {
        return <div>Loading...</div>;
    }

    const cards = fetchedData.map((item, index) => (
        <ItemCard
        key={index}
        {...item}/>
    ))

    const womenBanner = womensBannerImg.map((items,index) => (
      <BannerCard 
      key={index}
      {...items}/>
    ))
  return (
    <div>
      <div className='flex justify-center bg-gray-100 py-4'>
            <h1 className='text-2xl font-bold'>WOMEN</h1>
        </div>

        <div className=' md:max-w-[80rem] md:mx-auto md:px-1 bg-gray-100 mt-2 pt-2'>
            <p className='ml-5'>
                Explore our womens section, with comfy coats great for a winters day, and also the latest fashion trends, whether its for work or chilling out at home.
            </p>
            <div className='flex justify-evenly pb-3 mt-3'>
                {womenBanner}
            </div>
        </div>
    <div className='md:max-w-[100rem] md:mx-auto  mt-20 flex justify-center mb-2'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-[80%]'>
            {cards}
        </div>
    </div>
</div>
  )
}

export default WomensShop