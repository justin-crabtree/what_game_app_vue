<template>
  <div class="logout"></div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("user_id");
    // this.$router.push("/");
    window.location.href = "/";
  }
};
</script>
