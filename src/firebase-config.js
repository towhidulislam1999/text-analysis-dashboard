import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Get these values from Project Settings > General > Your Apps > SDK setup
  apiKey: "your-api-key",
  authDomain: "text-analysis-dashboard.firebaseapp.com",
  projectId: "text-analysis-dashboard",
  storageBucket: "text-analysis-dashboard.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);