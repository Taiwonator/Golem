import {https} from "firebase-functions";
import site from "./site";
import admin from "./admin";

exports.admin = https.onRequest(admin);
exports.site = https.onRequest(site);
