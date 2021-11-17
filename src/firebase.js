import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {API_KEY,AUTH_DOMAIN,PROJECT_ID,STORAGE_BUCKET,SENDER_ID,APP_ID,MEASUREMENT_ID} from "./config";
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);