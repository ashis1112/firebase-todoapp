import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBQLDaMQElu4SB6gJ3yf4z_-WhMhAu5XNM",
  authDomain: "todo101-c9eb1.firebaseapp.com",
  projectId: "todo101-c9eb1",
  storageBucket: "todo101-c9eb1.appspot.com",
  messagingSenderId: "445515314954",
  appId: "1:445515314954:web:8fb8464e4c54acbdc0acf3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore()

export default firebase
