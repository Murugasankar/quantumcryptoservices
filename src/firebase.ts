import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc2OuPnlMeTPiunCFnlbZLWtTbiCCf5Zg",
  authDomain: "quantumcryptoservices7.firebaseapp.com",
  projectId: "quantumcryptoservices7",
  storageBucket: "quantumcryptoservices7.firebasestorage.app",
  messagingSenderId: "168732484347",
  appId: "1:168732484347:web:0632051b6703fcb6e2865e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);