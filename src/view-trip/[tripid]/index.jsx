import React, { useEffect, useState } from 'react'
import { doc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { toast } from '@/components/ui/use-toast';
import { db } from '@/service/FirebaseConfig';
import { getDoc } from 'firebase/firestore';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import Dailyplan from '../components/Dailyplan';

function ViewTrip() {


    const [tripData , setTripData] = useState(null)

    //Getting the trip id from the url
    const { tripid } = useParams();
    //Creating a function to get the trip
    const getTrip = async() => {
        //Getting the document reference
        const docRef = doc(db, "ai-trips", tripid);
        //Getting the document snapshot
        const docSnap = await getDoc(docRef);
        //Checking if the document exists
        if(docSnap.exists()){
            console.log("Document data:", docSnap.data());
            setTripData(docSnap.data())
        }
        else{
            console.log("No such document")
            toast({
                title: "No such document found",
                description: "No document found with the trip id : " + tripid,
              })
        }
    }

    //Using the useEffect hook
    useEffect(() => {
        console.log(tripData)
        tripid&&getTrip();
    }, [tripid])
  
  
  
  
    return (
    <>
    <div className='p-10 max-w-5xl mx-auto'>
    
        {/* Information Section */}
        <InfoSection tripInfo={tripData}/>

        {/* Recommended Hotels  */}
        <Hotels tripInfo={tripData}/>
    
        {/* Daily Plan  */}
        <Dailyplan  tripInfo={tripData} />
        
    </div>
    </>
    )
}
export default ViewTrip