import { Dice1, Target } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Hotels({tripInfo}) {
  return (
    <div className='w-full'>
        <h2 className='font-bold font-xl mt-5' >Hotel Recommendation</h2>
        <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-2'>
            {tripInfo?.tripdata?.hotelOptions?.map((hotel, index) => (
                <Link to={`https://www.google.com/maps/search/?api=1&query=${hotel.hotelName+" "+hotel.hotelAddress}`} target="_blank" >
                <div className=' cursor-pointer hover:shadow-xl hover:scale-105 transition-all rounded-xl p-3 bg-slate-50 border'>
                    <img className='rounded-xl'
                     src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D" />
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
