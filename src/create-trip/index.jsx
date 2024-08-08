import React, { useEffect } from 'react'
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { useToast } from '@/components/ui/use-toast'
import { chatSession } from '@/service/AIModal'
import { Button } from "@/components/ui/button"
import { SelectBudgetOptions, SelectTravelsList, PROMPT } from '@/constants/options'
import { toast } from '@/components/ui/use-toast'
import { doc, documentId, setDoc } from "firebase/firestore"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useGoogleLogin } from '@react-oauth/google'
import { db } from '@/service/FirebaseConfig'

import axios from 'axios'
import { useNavigate} from 'react-router-dom'


//Creating a function to create a trip
function CreateTrip() {
  //Creating a state to store the place
  const [place, setPlace] = React.useState('')
  //Creating a state to store the number of days
  const [days, setDays] = React.useState('')
  //Creating a state to store the form data
  const [formData, setFormData] = React.useState([])

  //Using the useToast hook
  const { toast } = useToast()

  const [loading, setLoading] = useState(false)

  const router = useNavigate();

  const [openDialog, setOpenDialog] = React.useState(false)

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const login = useGoogleLogin({
    onSuccess: (user) => getUserProfile(user),
    onError: (error) => console.log(error)
  })

  const getUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((res) => {
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res.data))
      setOpenDialog(false)
      handleFormSubmit();
    })
  }


  let docid ;

  const saveTripData = async(tripdata) =>{
    docid = Date.now().toString()
    const user = JSON.parse(localStorage.getItem('user'))
    setLoading(true)
    await setDoc(doc(db, "ai-trips", docid ), {
      userSelection:formData,
      tripdata: JSON.parse(tripdata),
      userEmail: user.email,
      id: docid
    });
    setLoading(false)
  }

  const handleFormSubmit = async () => {
    const user = localStorage.getItem('user')
    //
      console.log(user);
      //Checking if all the fields are filled
      if (formData.location && formData.duration_of_trip && formData.budget && formData.travel_with) {
        //Showing a success toast
        toast({
          title: 'Success',
          description: 'Form Submitted Successfully',
        })

        setLoading(true)
        //Replaceing variables in Propmt with the data to ffed ai
        const finalPrompt = PROMPT.replace('{location}', formData?.location)
          .replace('{duration_of_trip}', formData?.duration_of_trip)
          .replace('{budget}', formData?.budget)
          .replace('{travel_with}', formData?.travel_with)
          .replace('{duration_of_trip}', formData?.duration_of_trip)
        //Sending the data to AI
        const result = await chatSession.sendMessage(finalPrompt)
        console.log(result?.response?.text())
        //Saving the trip data to firebase
        setLoading(false)
        saveTripData(result?.response?.text())
        router(`/view-trip/${docid}`)

      }
      //Showing an error toast if any field is empty
      else {
        toast({
          variant: "destructive",
          title: 'Error',
          description: 'Please fill all the fields',
        })
      }
  }
  //Rendering the form
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 mt-10'>
      <h2 className='font-bold text-3xl'># Tell us your travel preferences 🏖️</h2>
      <p className='mt-3 text-gray-500 text-xl'>Fill out a quick survey to help us understand your travel preferences and requirements. This will help us create a personalized itinerary for you.</p>
      <div className='mt-10'>
        <div>
          <h2 className='text-xl my-3 font-medium'>What is your Destination of choice</h2>
          <Input type="text" placeholder={place ? place : "Your Destination"} onChange={(e) => { setPlace(e.target.value); handleInputChange('location', e.target.value) }} />
        </div>
      </div>
      <div>
        <h2 className='text-xl my-3 font-medium'>Durration of stay: </h2>
        <Input type="number" placeholder={days ? days : "Eg: 2"} onChange={(e) => { (e.target.value); handleInputChange('duration_of_trip', e.target.value) }} />
      </div>

      <div>
        <h2 className='text-xl my-3 font-medium'>What is your budget ?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectBudgetOptions.map((item, index) => (
            <div key={index}
              onClick={() => handleInputChange('budget', item.title)}
              className={`p-4 cursor-pointer border rounded-lg shadow-sm hover:shadow-lg ${formData?.budget == item.title && 'shadow-lg border-black'}`}>
              <h2 className='text-4xl '>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className='text-xl my-3 font-medium'>Whome do you plan to travel with</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectTravelsList.map((item, index) => (
            <div key={index}
              onClick={() => handleInputChange('travel_with', item.title)}
              className={`p-4 cursor-pointer border rounded-lg shadow-sm hover:shadow-lg ${formData?.travel_with == item.title && 'shadow-lg border-black'}`}>
              <h2 className='text-4xl '>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              <h2 className='text-lg font-bold'>{item.people}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className='my-10 flex flex-col items-center'>
        <Button
        disabled={loading}
        className='w-full'
        onClick={handleFormSubmit}>
        {loading? <AiOutlineLoading3Quarters />  : ' '}
        Generate Trip
        </Button>
        
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <div className='p-4 flex-col gap-4'>
                <img src="/logo.svg" />
                <h2 className=' font-bold text-lg mt-7 py-2'>Sign In with Google</h2>
                <p className='text-gray-500'>Sign in to the app with google auth securely</p>
                <Button
                  onClick={login}
                  className="mt-10 w-full"> <img width="25px" className='m-3' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png'></img>Sign In with Google </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default CreateTrip
