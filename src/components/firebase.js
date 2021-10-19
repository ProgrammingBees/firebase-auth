import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCSLZzzEcksE1LBuYl7xnPMJRcwYv5qFCM",
    authDomain: "fir-auth-deploy.firebaseapp.com",
    projectId: "fir-auth-deploy",
    storageBucket: "fir-auth-deploy.appspot.com",
    messagingSenderId: "1032589803942",
    appId: "1:1032589803942:web:7890b826c6a3a82760cf67",
    measurementId: "G-KM8C5M8V03"
});

export const auth = app.auth();
export default app;