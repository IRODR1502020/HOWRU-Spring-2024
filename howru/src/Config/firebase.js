import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

//firebaseConfig.apiKey = process.env.API_KEY;
//firebaseConfig.authDomain = process.env.AUTH_DOMAIN;
//firebaseConfig.projectId = process.env.PROJECT_ID;
//firebaseConfig.storageBucket = process.env.STORAGE_BUCKET;
//firebaseConfig.messagingSenderId = process.env.MESSAGING_SENDER_ID;
//firebaseConfig.appId = process.env.APP_ID;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

