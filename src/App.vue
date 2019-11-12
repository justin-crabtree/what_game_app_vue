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
          <ul class="navbar-nav align-items-center">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/games">Games</a>
            </li>
          </ul>
        </div>
        <ul class="navbar-nav navbar-right flex-row d-flex align-items-center">
          <li class="nav-item">
            <a class="nav-link" v-if="!isLoggedIn()" href="/login">
              <span class="d-none d-md-inline-block">Login</span>
              <span class="d-inline-block d-md-none"><i class="ya ya-user"></i></span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-if="!isLoggedIn()" href="/signup">
              <span class="d-none d-md-inline-block">Signup</span>
              <span class="d-inline-block d-md-none"><i class="ya ya-user"></i></span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-if="isLoggedIn()" href="/logout">
              <span class="d-none d-md-inline-block">Logout</span>
              <span class="d-inline-block d-md-none"><i class="ya ya-user"></i></span>
            </a>
          </li>
          <li class="nav-item">
            <router-link v-bind:to="`/users/${user_id}`">{{ username }}</router-link>
          </li>
        </ul>
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
