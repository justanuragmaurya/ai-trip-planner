import { Dice1, Target } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Hotels({tripInfo}) {
  return (
    <div>
        <h2 className='font-bold font-xl mt-5' >Hotel Recommendation</h2>
        <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-2'>
            {tripInfo?.tripdata?.hotelOptions?.map((hotel, index) => (
                <Link to={`https://www.google.com/maps/search/?api=1&query=${hotel.hotelName+" "+hotel.hotelAddress}`} target="_blank" >
                <div className='shadow-md cursor-pointer hover:shadow-xl hover:scale-105 transition-all rounded-xl p-3 bg-slate-50'>
                    <img className='rounded-xl'
                     src="https://placehold.co/1920x1280" />
                    <div className='my-3'>
                        <h2 className='font-medium'>{hotel.hotelName}</h2>
                        <h2 className='font-normal text-sm text-black'>{hotel.description}</h2>
                        <h2 className='text-xs text-gray-500 mt-1'>📍 {hotel.hotelAddress}</h2>
                        <h2 className='text-xs text-gray-600 mt-1 font-bold'>💵 {hotel.price}</h2>
                        <h2 className='text-xs text-gray-600 mt-1'>⭐ {hotel.rating} stars</h2>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Hotels
