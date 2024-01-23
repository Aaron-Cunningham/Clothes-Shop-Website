import React from 'react'

function BannerCard(props) {
  return (
    <div>
        <div className='flex flex-col items-center mt-8'>
            <div className='h-16 w-16 hover:opacity-85 cursor-pointer duration-200 ease-in-out'>
                <img className='border border-gray-400 rounded-full' src={props.img} alt={props.text}/>
            </div>
            <div>
                {props.title}
            </div>
        </div>
    </div>
  )
}

export default BannerCard