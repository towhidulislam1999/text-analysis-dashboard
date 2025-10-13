import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCs6PLy5MjRPnFi8dZEbchBadXk-DJBjVs",
  authDomain: "text-analysis-dashboard.firebaseapp.com",
  projectId: "text-analysis-dashboard",
  projectNumber: "580268736759",
  storageBucket: "text-analysis-dashboard.appspot.com",
  messagingSenderId: "580268736759",
  appId: "1:580268736759:web:YOUR_APP_ID" // Get this from Firebase Console
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Debug logging
console.log('🔥 Firebase initialized');