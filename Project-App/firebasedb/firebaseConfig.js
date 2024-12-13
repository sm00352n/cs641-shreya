import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'; 



const firebaseConfig = {
  apiKey: "AIzaSyDluCoYdvm7yi6vqGDm6ppXiYWwJfrOGaM",
  authDomain: "recipe-dictionary.firebaseapp.com",
  projectId: "recipe-dictionary",
  storageBucket: "recipe-dictionary.firebasestorage.app",
  messagingSenderId: "751893330997",
  appId: "1:751893330997:web:f7a59e73781f80ed80c57c"
};
let app;

// Check if the engine is Hermes
if (!global.HermesInternal) {
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
} else {
  app = initializeApp(firebaseConfig);
}

const db = getFirestore(app);

export { db, app };