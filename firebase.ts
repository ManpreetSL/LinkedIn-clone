// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAWjUmqiv_SQTW92rtoAy28lXYSEFukyLg',
  authDomain: 'linkedin-clone-8bf1e.firebaseapp.com',
  projectId: 'linkedin-clone-8bf1e',
  storageBucket: 'linkedin-clone-8bf1e.appspot.com',
  messagingSenderId: '861534022747',
  appId: '1:861534022747:web:6ace2d9120ed91ad1ea37e',
  measurementId: 'G-3QQSE5KGVK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
