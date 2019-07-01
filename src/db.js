import firebase from "@/firebase";
const db = firebase.firestore();
/* PODOBNO JUŻ NIE POTRZEBNE W NOWEJ WERSJI BO JEST NA TRUE W DEFAULCIE 
  db.settings({
  timestampsInSnapshots:true
}) */

export default db;