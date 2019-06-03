import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBz34h5sPJlqKOanfGbUvePP5QVDk-DaT0",
  authDomain: "reditt-clone-88fc9.firebaseapp.com",
  databaseURL: "https://reditt-clone-88fc9.firebaseio.com",
  projectId: "reditt-clone-88fc9",
  storageBucket: "reditt-clone-88fc9.appspot.com",
  messagingSenderId: "170478632206",
  appId: "1:170478632206:web:28f15bc4ca8e8ee8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
