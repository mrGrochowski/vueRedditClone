<template>
  <div class="home">
    HOME
    <div class="block">
      <a class="button is-primary" @click="login()">Login</a>
      <a class="button is-secondary" @click="logout()">Logout</a>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'home',
  methods:mapActions('auth',['login','logout']),
};
</script>
