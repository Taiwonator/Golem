import {initializeApp} from "firebase-admin/app";
import {firestore} from "firebase-admin";


const admin = initializeApp();

export const db = firestore();

export default admin;
