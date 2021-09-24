import firebase from "firebase"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIKXpAu1SRiiwcXEe1J3gwka0x2XVwehM",
    authDomain: "ubereats-326716.firebaseapp.com",
    projectId: "ubereats-326716",
    storageBucket: "ubereats-326716.appspot.com",
    messagingSenderId: "491962204674",
    appId: "1:491962204674:web:bd887d82b73b6710715d1b"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;