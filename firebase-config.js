import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export const firebaseConfig = {
  apiKey: "AIzaSyA3JtQKatl1ImdD6AoMEXTPYLcJkp0JBF8",
  authDomain: "carita-4ff3e.firebaseapp.com",
  projectId: "carita-4ff3e",
  storageBucket: "carita-4ff3e.appspot.com",
  messagingSenderId: "1020324784647",
  appId: "1:1020324784647:web:d0ab61ff070967ddabd8a2"

};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default {
  firebase,
  db,
  firebaseConfig,
}
 









