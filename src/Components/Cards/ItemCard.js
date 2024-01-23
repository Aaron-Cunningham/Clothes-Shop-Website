import React, {useState, useEffect} from 'react'
import { SlBasket } from "react-icons/sl";
import { LiaStarSolid } from "react-icons/lia";
function ItemCard(props) {



    const stars = Array.from({length : props.stars}, (_, index) =>(
        <LiaStarSolid key={index}/>
    ))

  return (
            <div className=''>
                <div className=' cursor-pointer flex justify-center items-center hover:opacity-85 transition-opacity duration-00 transform ease-in-out'>
                    <img className='w-full' src={props.img} />
                </div>
                <div>
                    <p>{props.title}</p>
                </div>
                <div className='flex'>
                    {stars}
                </div>
                <div className='flex justify-between item-center'>
                    <p>{props.price}</p>
                    <SlBasket className='w-5 h-5 cursor-pointer hover:scale-110 duration-200' />
                </div>
            </div>
        
  )
}

export default ItemCard