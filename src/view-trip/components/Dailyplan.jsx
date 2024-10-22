import React from 'react'
import { IoIosSend } from "react-icons/io"
import { Link } from 'react-router-dom'

function Dailyplan({ tripInfo }) {
  if (!tripInfo || !tripInfo.tripdata || !tripInfo.tripdata.itinerary) {
    return <div>Itinerary information is not available</div>
  }

  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl mb-5">Daily Itinerary</h2>
      {tripInfo.tripdata.itinerary.map((day, index) => (
        <div key={index} className="mb-8 bg-slate-50 rounded-lg shadow-md p-6">
          <h3 className="font-bold text-xl mb-3">{day.day}</h3>
          <p className="text-gray-600 mb-4">Best Time: {day.bestTime}</p>
          {day.plan.map((place, placeIndex) => (
            <div key={placeIndex} className="mb-6 last:mb-0">
              <div className="flex items-start">
                <img 
                  src={"https://placehold.co/1080x1080"} 
                  alt={place.placeName} 
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">{place.placeName}</h4>
                  <p className="text-sm text-gray-600 mb-2">{place.placeDetails}</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">🕒 {place.timeToTravel}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">💲 {place.ticketPricing}</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">📍 {place.geoCoordinates}</span>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <Link to={`https://www.google.com/maps/search/?api=1&query=${place.geoCoordinates}`} target="_blank">
                  <button variant="outline" size="sm" className=" flex gap-1 items-center justify-center text-xs">
                    <IoIosSend className="mr-1" /> View on Map
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Dailyplan
