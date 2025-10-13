import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Get these values from Firebase Console > Project Settings > Web configuration
  apiKey: "your-api-key",
  authDomain: "text-analysis-dashboard.firebaseapp.com",
  projectId: "text-analysis-dashboard",
  storageBucket: "text-analysis-dashboard.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);