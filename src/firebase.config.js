import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBUcmELEyVG94GbhF9rGKhrClDDYj0Dem0",
  authDomain: "my-portfolio-cacda.firebaseapp.com",
  projectId: "my-portfolio-cacda",
  storageBucket: "my-portfolio-cacda.firebasestorage.app",
  messagingSenderId: "448932338678",
  appId: "1:448932338678:web:94510ae5ca1da0d6c105d7"
};


const app = initializeApp(firebaseConfig);

export default app