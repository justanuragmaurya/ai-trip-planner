import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget ,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50 - $100 per night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/hotels/2000000/1990000/1988700/1988662/e1a08f28.jpg\",\n      \"geoCoordinates\": \"36.1699, -115.1423\",\n      \"rating\": 4,\n      \"description\": \"A budget-friendly hotel located in the heart of Fremont Street, offering a retro vibe and access to the lively Fremont Street Experience.\"\n    },\n    {\n      \"hotelName\": \"The Golden Nugget\",\n      \"hotelAddress\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"price\": \"$75 - $150 per night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/hotels/2000000/1990000/1988500/1988498/244f9a0a.jpg\",\n      \"geoCoordinates\": \"36.1693, -115.1429\",\n      \"rating\": 4.5,\n      \"description\": \"A historic hotel with a lively atmosphere, featuring a shark tank, a pool, and several dining options.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$40 - $80 per night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/hotels/1000000/990000/988000/987978/28e27757.jpg\",\n      \"geoCoordinates\": \"36.1076, -115.1719\",\n      \"rating\": 3.5,\n      \"description\": \"A family-friendly hotel with a circus theme, offering budget-friendly rooms and a variety of entertainment options.\"\n    },\n    {\n      \"hotelName\": \"Plaza Hotel & Casino\",\n      \"hotelAddress\": \"1 Main St, Las Vegas, NV 89101\",\n      \"price\": \"$60 - $120 per night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/hotels/2000000/1990000/1988600/1988571/6f95d616.jpg\",\n      \"geoCoordinates\": \"36.1698, -115.1426\",\n      \"rating\": 4,\n      \"description\": \"A historic hotel located on Fremont Street, offering classic rooms, a casino, and a variety of dining options.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": \"Day 1\",\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A pedestrian-only street with a canopy of lights, offering live music, street performers, and various dining options.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Fremont_Street_Experience_%282010%29.jpg/1280px-Fremont_Street_Experience_%282010%29.jpg\",\n          \"geoCoordinates\": \"36.1698, -115.1426\",\n          \"ticketPricing\": \"Free\",\n          \"timeToTravel\": \"3 hours\"\n        },\n        {\n          \"placeName\": \"Neon Museum\",\n          \"placeDetails\": \"A museum showcasing historic Las Vegas neon signs, offering guided tours and a glimpse into the city's past.\",\n          \"placeImageUrl\": \"https://images.trvl-media.com/hotels/2000000/1990000/1988600/1988571/6f95d616.jpg\",\n          \"geoCoordinates\": \"36.1727, -115.1443\",\n          \"ticketPricing\": \"$20 - $30\",\n          \"timeToTravel\": \"2 hours\"\n        }\n      ],\n      \"bestTime\": \"Afternoon & Evening\"\n    },\n    {\n      \"day\": \"Day 2\",\n      \"plan\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"A beautiful botanical garden located inside the Bellagio Hotel, offering stunning floral displays and themed exhibitions.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Bellagio_Conservatory_and_Botanical_Garden_-_Christmas_2011.jpg/1280px-Bellagio_Conservatory_and_Botanical_Garden_-_Christmas_2011.jpg\",\n          \"geoCoordinates\": \"36.1175, -115.1725\",\n          \"ticketPricing\": \"Free\",\n          \"timeToTravel\": \"1 hour\"\n        },\n        {\n          \"placeName\": \"Fountains of Bellagio\",\n          \"placeDetails\": \"A spectacular water and music show featuring synchronized fountains, offering free performances throughout the day.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Bellagio_fountains.jpg/1280px-Bellagio_fountains.jpg\",\n          \"geoCoordinates\": \"36.1175, -115.1725\",\n          \"ticketPricing\": \"Free\",\n          \"timeToTravel\": \"30 minutes\"\n        }\n      ],\n      \"bestTime\": \"Afternoon & Evening\"\n    },\n    {\n      \"day\": \"Day 3\",\n      \"plan\": [\n        {\n          \"placeName\": \"Hoover Dam\",\n          \"placeDetails\": \"A historic dam located on the Colorado River, offering tours and scenic views.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Hoover_Dam_from_Arizona_side_2006.jpg/1280px-Hoover_Dam_from_Arizona_side_2006.jpg\",\n          \"geoCoordinates\": \"36.0057, -114.9947\",\n          \"ticketPricing\": \"$30 - $40\",\n          \"timeToTravel\": \"4 hours (round trip)\"\n        },\n        {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\": \"A scenic desert area with red rock formations, offering hiking trails, rock climbing, and stunning views.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Red_Rock_Canyon_Nevada_2.jpg/1280px-Red_Rock_Canyon_Nevada_2.jpg\",\n          \"geoCoordinates\": \"36.1319, -115.3493\",\n          \"ticketPricing\": \"$15 per vehicle\",\n          \"timeToTravel\": \"3 hours\"\n        }\n      ],\n      \"bestTime\": \"Morning & Afternoon\"\n    }\n  ]\n}\n```\n"},
        ],
      },
    ],
  });
