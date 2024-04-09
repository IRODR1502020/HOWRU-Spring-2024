import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, collection, updateDoc} from 'firebase/firestore';
//import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebaseConfig.apiKey = process.env.API_KEY;
firebaseConfig.authDomain = process.env.AUTH_DOMAIN;
firebaseConfig.projectId = process.env.PROJECT_ID;
firebaseConfig.storageBucket = process.env.STORAGE_BUCKET;
firebaseConfig.messagingSenderId = process.env.MESSAGING_SENDER_ID;
firebaseConfig.appId = process.env.APP_ID;

// Initialize Firebase
const FbApp = initializeApp(firebaseConfig);
const auth = getAuth(FbApp);
const db = getFirestore(FbApp);
//const storage = getStorage(FbApp);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, db, doc, setDoc, getDoc, collection, updateDoc }
