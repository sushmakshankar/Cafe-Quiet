# Cafe-Quiet
Final project for HCDE 438 - coffee shop crowdedness and activity tracker

## Project Description:
Welcome to Café Quiet, a Coffee Shop Occupancy Tracker! This application seeks to provide users who frequently use cafes as study spots to see how crowded a coffee shop currently is. In return, the user will gain insights into whether they can productively work in the space depending on the crowd levels. 

Café Quiet will first identify the user’s location and then search for nearby coffee shops. The application will then identify the least crowded coffee shops and display the noise level of that shop as well so that the user can make their own judgement on which café would best suit their current needs. 

## Key Features:
- Google Maps integration to populate and visualize cafés near the user’s location
- Auto-detection of user location
- Viewing the crowd levels
- Click on markers to view more details and train the 
- Search bar to filter cafes by name
- Café ratings and connection to view reviews
- Updated crowd levels

## Technologies Used:
- React with Vite
- Google Maps JavaScript API
- Google Places API
- Browser-based Geolocation API 
- Firebase Firestore (for data storage)
- Bootstrap for styling

## Setup Instructions
1. Clone this repository
2. Run <code>npm install</code> to install the dependencies
3. Set up the environment variables by creating a <code>.env</code> file in the root and adding your Google Maps API key
    <code>VITE_GOOGLE_MAPS_API_KEY=your_api_key_here</code>
    Make sure that this key has access to the Maps JavaScript API and the Places API
4. Configure Firebase project within Firestore using the instructions provided, then create a <code>firebase/config.js</code> with the following configuration:
    ```import { initializeApp } from "firebase/app";
            import { getFirestore } from "firebase/firestore";

            const firebaseConfig = {
            apiKey: "your_firebase_api_key",
            authDomain: "your_project.firebaseapp.com",
            projectId: "your_project_id",
            storageBucket: "your_project.appspot.com",
            messagingSenderId: "your_sender_id",
            appId: "your_app_id"
            };

            const app = initializeApp(firebaseConfig);
            export const db = getFirestore(app);```
5. Start the development server by running <code>npm run dev</code>. Once you do this, you can visit http://localhost:5173 in your browser

## Usage Guidelines

## API Documentation

## Future Enhancements and Known Issues
If I was to continue working on this project in the future, I want to achieve the following:
### Expand the data to not just be hardcoded values
Currently, all of the data that the program uses are hardcoded and I have manually included the coordinates for them. A major issue I was facing was not getting my API to accurately fetch all of the locations from Google Maps with the key word "cafe" in it, and after spending hours trying to get this feature to work, I decided to timeblock myself and move on to focus on other areas of the project (namely, the database integration). 

### Get the search bar to work
The search bar proved to be extremely buggy for the same API issues I was having from above. I eventually had to time block myself on this issue and move on from getting the search bar to work, but I'd really like to integrate this feature into my application in the future.

### Filter by current crowd level and leverage actual crowdedness data
I faced paywall issues when trying to get this aspect of my project to work, so the crowdedness levels within my project were also hardcoded. In the future, if I had a larger budget and more availability, I'd like to successfully integrate this feature into the project. 

### Improve the CSS
Coming from a UX Design background, I feel as if the usability of this application could be improved and is not very visually appealing to a user. In the future, I'd like to develop a full visual redesign of my project and establish a solid brand identity for Cafe Quiet, as well as conduct usability tests to understand the ways in which the app could become more intuitive to a user. 