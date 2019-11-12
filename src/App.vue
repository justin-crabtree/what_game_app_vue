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
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-if="!isLoggedIn()" href="/signup">
              <span class="d-none d-md-inline-block">Signup</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-if="isLoggedIn()" href="/logout">
              <span class="d-none d-md-inline-block">Logout</span>
            </a>
          </li>
          <li class="nav-item">
            <router-link v-bind:to="`/users/${user_id}`">{{ username }}</router-link>
            <span class="d-inline-block d-md-none"><i class="ya ya-user"></i></span>
          </li>
        </ul>
      </div>
    </nav>
    <router-view :key="$route.fullPath"></router-view>
    <!-- <footer class="site-footer bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4 mb-md-0 pb-1 pb-md-0">
            <div class="footer-title">What Game Should You Play?</div>
            <p>Spend more time playing and less time deciding</p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container d-flex flex-column flex-md-row">
          <div class="order-2 order-md-1">
            <p class="footer-copyright">Designed and built by Justin Crabtree.</p>
          </div>
          <div class="footer-social order-1 order-md-2 ml-md-auto text-center text-md-right">
            <span class="d-none d-sm-block mb-2">follow me on social media</span>
            <a href="https://github.com/justin-crabtree" target="_blank" data-toggle="tooltip" title="github">
              <i class="ya ya-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer> -->
    <footer class="bg-dark">
      <div class="footer-bottom">
        <div class="container d-flex flex-column flex-md-row">
          <div class="order-2 order-md-1">
            <p class="footer-copyright">
              &copy; 2019 Designed and built by Justin Crabtree. All rights reserved.
            </p>
          </div>
          <div class="footer-social order-1 order-md-2 ml-md-auto text-center text-md-right">
            <a href="https://github.com/justin-crabtree" target="_blank" data-toggle="tooltip" title="github">
              <i class="fab fa-github ya-lg"></i>
            </a>
            <a href="http://www.linkedin.com/in/justin-crabtree" target="_blank" data-toggle="tooltip" title="linkedin">
              <i class="fab fa-linkedin ya-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
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
