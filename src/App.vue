<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/games">Games</router-link>
      |
      <router-link v-if="!isLoggedIn()" to="/signup">Signup</router-link>
      |
      <router-link v-if="!isLoggedIn()" to="/login">Login</router-link>
      |
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link>
      |
      <router-link v-bind:to="`/users/${user_id}`">{{ username }}</router-link>
    </div>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      username: localStorage.getItem("username"),
      user_id: localStorage.getItem("user_id"),
      email: localStorage.getItem("email")
    };
  },
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>


