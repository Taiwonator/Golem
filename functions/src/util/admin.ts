import {initializeApp} from "firebase-admin/app";
import {firestore, auth as adminAuth} from "firebase-admin";


const admin = initializeApp();

export const db = firestore();
export const auth = adminAuth();

export default admin;
