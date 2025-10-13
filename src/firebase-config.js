import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs6PLy5MjRPnFi8dZEbchBadXk-DJBjVs",
  authDomain: "text-analysis-dashboard.firebaseapp.com",
  projectId: "text-analysis-dashboard",
  storageBucket: "text-analysis-dashboard.firebasestorage.app",
  messagingSenderId: "580268736759",
  appId: "1:580268736759:web:292e00421388b6448153f2",
  measurementId: "G-NTCBQJ8X7K"
};

// Initialize Firebase services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Debug logging
console.log('🔥 Firebase initialized with auth and analytics');

// Export initialized services
export { app, auth, analytics };