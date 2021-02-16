// @flow
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyABHAYqgREXaq8JlSJqD4xguUotMwreS-c",
    authDomain: "tek-dashboard.firebaseapp.com",
    databaseURL: "https://tek-dashboard.firebaseio.com",
    projectId: "tek-dashboard",
    storageBucket: "tek-dashboard.appspot.com",
    messagingSenderId: "821958493932",
    appId: "1:821958493932:web:d843d573887c5bd4e7c7c9",
    measurementId: "G-Q5GW1K5V6F"
  };

firebase.initializeApp(config);
const firestore = firebase.firestore();

export { firestore };
export default firebase;
