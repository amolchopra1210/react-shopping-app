import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBSo-2Q7UAINWJOwJ4X2qHwnhWLXctP8WE",
    authDomain: "crwn-db-100d2.firebaseapp.com",
    databaseURL: "https://crwn-db-100d2.firebaseio.com",
    projectId: "crwn-db-100d2",
    storageBucket: "",
    messagingSenderId: "254863548601",
    appId: "1:254863548601:web:c62c33e8e3eedaba"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;