// taken from firebase set up, code provided to me by google's firebase set up instructions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: "cafe-quiet",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};``

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const addClickToFirebase = async (cafeId, clicks) => {
    try {
        const cafeRef = doc(db, "cafes", cafeId);
        await updateDoc(cafeRef, { clicks: clicks });
        console.log("Click count updated successfully");
    } catch (error) {
        console.error("Error updating click count:", error);
    }
}