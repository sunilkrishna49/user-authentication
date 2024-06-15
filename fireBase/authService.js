import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./fireBaseConfig";

// Function to create a new user
export const createUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const token = await userCredential.user.getIdToken();
    return token;
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};

// Function to sign in a user
export const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const token = await userCredential.user.getIdToken();
    return token;
  } catch (error) {
    console.error("Error signing in user:", error.message);
    throw error;
  }
};
