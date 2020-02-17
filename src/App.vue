<template>
  <div id="app" class="border-green border-t-8">
    <nav>
      <router-link to="/">Alle Sessions</router-link> |
      <router-link to="/start">Starte Event</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    isLoggedin: true
  }),
  methods: {
    logout() {
      console.log("logged out");
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "system-ui", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  background: #e3fcec;
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #38c172;
    }
  }
}
</style>
