// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCDsJVTJzbwpeQNW6p-bgUv2vwo6of7IsY',
  authDomain: 'twitter-clone-f1cbb.firebaseapp.com',
  projectId: 'twitter-clone-f1cbb',
  storageBucket: 'twitter-clone-f1cbb.appspot.com',
  messagingSenderId: '1088137490287',
  appId: '1:1088137490287:web:9b2b556469d4724a88829a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
