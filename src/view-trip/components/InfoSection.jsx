import { Button } from '@/components/ui/button';
import { IoIosSend } from "react-icons/io";
import React from 'react'

function InfoSection({ tripInfo }) {

    // Check if tripInfo or tripInfo.userSelection is null
    if (!tripInfo || !tripInfo.userSelection) {
        // Optionally, render a fallback UI or return null
        return <div>Information is not available</div>;
    }

    return (
        <>
        <div>
            <img src='https://deih43ym53wif.cloudfront.net/berlin-germany-shutterstock_314149679_87b7a543ce.jpeg'
            className='h-[340px] w-full object-cover rounded-xl' />
        <div className='flex justify-between items-center'>
            <div className='my-5 flex flex-col gap-2'>
                <h2 className='font-bold text-2xl'> {tripInfo.userSelection.location}</h2>
                <div className='flex gap-5 '>
                    <h2 className='p-1 px-3 bg-slate-200 rounded-xl text-gray-500 text-xs md:text-sm'>{tripInfo.userSelection.duration_of_trip + " "}  Days</h2>
                    <h2 className='p-1 px-3 bg-slate-200 rounded-xl text-gray-500 text-xs md:text-sm'>{tripInfo.userSelection.budget + " "}  Budget</h2>
                    <h2 className='p-1 px-3 bg-slate-200 rounded-xl text-gray-500 text-xs md:text-sm'> Traveling along {tripInfo.userSelection.travel_with + " "}</h2>
                </div>
            </div>
            <Button> <IoIosSend /> Share </Button>
        </div>

            </div>
        </>
    )
}

export default InfoSection