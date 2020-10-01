import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyD5v3tD19W7qgxntu-cuCJLrQBDGy-t6i4",
  authDomain: "financesserver-e4e9f.firebaseapp.com",
  databaseURL: "https://financesserver-e4e9f.firebaseio.com",
  projectId: "financesserver-e4e9f",
  storageBucket: "financesserver-e4e9f.appspot.com",
  messagingSenderId: "269132750013",
  appId: "1:269132750013:web:806984f4f616693e3aebd4"
};
// Initialize Firebase
if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

export default firebase