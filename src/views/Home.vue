<template>
  <div class="home">
    HOME
    <div class="block">
      <a class="button is-primary" @click="login()">Primary</a>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'home',
  methods:mapActions('auth',['login']),
};
</script>
