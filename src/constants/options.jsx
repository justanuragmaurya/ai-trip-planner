export const SelectTravelsList = [
      {
        id: 1,
        title: "Just Me",
        desc: "A sole travels in exploration",
        icon: "🧳",
        people: "1 Person"
      },
      {
        id: 2,
        title: "A Couple",
        desc: "Two travels in tandem",
        icon: "🥂",
        people: "2 Persons"
      },
      {
        id: 3,
        title: "Family",
        desc: "A group of fun loving peace",
        icon: "👨‍👩‍👧‍👦",
        people: "3 to 5 Persons"
      },
      {
        id: 3,
        title: "Friends",
        desc: "A group of friends loving adv",
        icon: "👨‍👩",
        people: "3 to 4 Persons"
      }
]

export const SelectBudgetOptions = [
  {
    id: 1,
    title:"Economy",
    desc:"Budget Friendly",
    icon:"💵"
  },
  {
    id:2,
    title:"Moderate",
    desc:"The rich experience",
    icon:"💰"
  },
  {
    id:3,
    title:"Luxury",
    desc:"Dont overthink it",
    icon:"💸"
  }
]

export const PROMPT = "Generate Travel Plan for Location: {location}, for {duration_of_trip} Days for {travel_with} with a {budget} budget ,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for {duration_of_trip} days with each day plan with best time to visit in JSON format."