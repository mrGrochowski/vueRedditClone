<template>
  <div id="app">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          VueRedditClone
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" v-if="!isLoggedIn" @click="login()">
                <strong>Login</strong>
              </a>
              <p class="control">

                <figure>
                  <img class="is-rounded" :src="user.image">
                </figure>
                <a class="button is-light" v-if="isLoggedIn" @click="logout()">
                  Logout
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view class="container" />
  </div>
</template>
<script>
  import {
    mapActions,
    mapState
  } from "vuex";
  export default {
    computed: mapState('auth', ['user', 'isLoggedIn']),
    methods: mapActions('auth', ['login', 'logout'])
  };

</script>
<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

</style>
