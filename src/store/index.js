import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import { vuexfireMutations } from 'vuexfire';
import subreddits from "./subreddits";

Vue.use(Vuex);

export default new Vuex.Store({
  mutations : {...vuexfireMutations} ,  
  modules:{
    auth,
    subreddits
  }
});
