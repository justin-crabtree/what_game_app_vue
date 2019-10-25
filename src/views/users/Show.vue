<template>
  <div class="users-show">
    <h1>Profile</h1>
    <h2>{{ user["name"] }}</h2>
    <h2>{{ user["email"] }}</h2>
    <h3>Favorites:</h3>
    <div v-for="favorite in user.favorites">
      <p>{{ favorite["title"] }}</p>
      <img :src="favorite.image_url" alt="" />
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {}
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
    });
  },
  methods: {}
};
</script>
