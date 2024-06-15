import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFuYx45hFXdLP5MyU2fnwYl97Q8fNiQc8",
  authDomain: "react-native-udemy-expense.firebaseapp.com",
  projectId: "react-native-udemy-expense",
  storageBucket: "react-native-udemy-expense.appspot.com",
  messagingSenderId: "962586695307",
  appId: "1:962586695307:web:2f4e898570b01471c6268e",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
