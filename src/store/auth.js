import firebase from "@/firebase";

const state = {
  user: {},
  isLoggedIn: false
};


const actions = {
  async login({context}) {
    const provider = new firebase.auth.GoogleAuthProvider();
    const resault = await firebase.auth().signInWithPopup(provider);
    console.log(resault.user);
  }
};

export default {
  namespaced: true,
  state,
  actions,
};
