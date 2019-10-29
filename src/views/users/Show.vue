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
    <form v-on:submit.prevent="submit()">
      <h1>Edit Profile</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" class="form-control" v-model="user.name" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
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
