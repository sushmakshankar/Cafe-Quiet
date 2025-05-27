# Cafe-Quiet
Final project for HCDE 438 - coffee shop crowdedness and activity tracker

## Project Description
Welcome to Café Quiet, a Coffee Shop Occupancy Tracker! This application seeks to provide users who frequently use cafes as study spots to see how crowded a coffee shop currently is. In return, the user will gain insights into whether they can productively work in the space depending on the crowd levels. 

Café Quiet will first identify the user’s location and then search for nearby coffee shops. If the user does not want to provide the application with their location, they can instead search by zipcode. The application will then identify the least crowded coffee shops and display the noise level of that shop as well so that the user can make their own judgement on which café would best suit their current needs. 

**Key Features:**
- Google Maps integration to populate and visualize cafés near the user’s location
- Auto-detection of user location
- Search bar to filter cafes by name
- Café ratings and connection to view reviews
- Updated crowd levels

## Setup Instructions
1. Clone this repository
2. Run <code>npm install</code> to install the dependencies
3. Set up the environment variables by creating a <code>.env</code> file and adding your Google Maps API key
    <code>VITE_GOOGLE_MAPS_API_KEY=your_api_key_here</code>
    Make sure that this key has access to the Maps JavaScript API and the Places API
4. Start the development server by running <code>npm run dev</code>. Once you do this, you can visit http://localhost:5173 in your browser

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
