// taken from firebase set up, code provided to me by google's firebase set up instructions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBi9BzPlq2KN9-E9qG6RYfAU2ZMp1d7BK4",
    authDomain: "cafe-quiet.firebaseapp.com",
    projectId: "cafe-quiet",
    storageBucket: "cafe-quiet.firebasestorage.app",
    messagingSenderId: "333469767219",
    appId: "1:333469767219:web:bcd4eb29ce4464bc113546",
    measurementId: "G-Q3CF0N3LH3"
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
};
  

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);