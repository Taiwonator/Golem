// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAh_llfxlFbyNQfnSurZ7t6iPO37ZnijzA",
  authDomain: "blog-backend-67f71.firebaseapp.com",
  projectId: "blog-backend-67f71",
  storageBucket: "blog-backend-67f71.appspot.com",
  messagingSenderId: "983365629476",
  appId: "1:983365629476:web:5bc1b7f20539abf6b00ab1",
  measurementId: "G-9ZQ733LQ55"
};

// Initialize Firebase and products
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

// Auth
async function logIn (username, password) {
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, username, password);
      const user = userCredentials.user;
      console.log('user: ', user)
      return user
    } catch(error) {
      console.log(error)
      return null
    }
  }

function logOut () {
  signOut(auth)
}

function getCurrentUser () {
  const user = auth.currentUser
  console.log('current user: ', user)
  return user
}

function updateAuth (fun) {
  return onAuthStateChanged(auth, fun)
}

export { logIn, logOut, getCurrentUser, updateAuth }

export default app
