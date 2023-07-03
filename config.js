import firebase from "firebase";
require("@firebase/firestore");

Paste your firebaseConfig here
apiKey: "AIzaSyAVNQRJ58ZGBvO8ezr1GAgRygbcEqhiJzo",
authDomain: "e-ride-bfd50.firebaseapp.com",
projectId: "e-ride-bfd50",
storageBucket: "e-ride-bfd50.appspot.com",
messagingSenderId: "599533298698",
appId: "1:599533298698:web:e9e78e55217f5c5769abf3"

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
