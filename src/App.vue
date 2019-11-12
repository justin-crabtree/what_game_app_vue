<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="ya ya-bar"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/games">Games</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="!isLoggedIn()" to="/signup">Signup</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="!isLoggedIn()" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link>
            </li>
            <li class="nav-item">
              <router-link v-bind:to="`/users/${user_id}`">{{ username }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
