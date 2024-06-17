// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// console.log('API Key:', import.meta.env.VITE_APIKEY);
// console.log('Auth Domain:', import.meta.env.VITE_AUTHDOMAIN);
// console.log('Project ID:', import.meta.env.VITE_PROJECTID);
// console.log('Storage Bucket:', import.meta.env.VITE_STORAGEBUCKET);
// console.log('Messaging Sender ID:', import.meta.env.VITE_MESSAGINGSENDERID);
// console.log('App ID:', import.meta.env.VITE_APPID);