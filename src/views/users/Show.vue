<template>
  <div class="users-show">
    <h1>Profile</h1>
    <h2>{{ user["name"] }}</h2>
    <h2>{{ user["email"] }}</h2>

    <div v-if="isLoggedIn()">
      <form v-on:submit.prevent="submit()">
        <h1>Edit Profile</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div>
          <label>Name:</label>
          <input type="text" class="form-control" v-model="user.name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" class="form-control" v-model="user.email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="text" class="form-control" v-model="user.password_digest" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>

    <h3>Favorites:</h3>
    <div v-for="favorite in user.favorites">
      <h2>
        <router-link v-bind:to="`/games/${favorite.id}`">{{ favorite["title"] }}</router-link>
      </h2>
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
      user: {},
      errors: [],
      game: []
    };
  },
  created: function() {
    axios
      .get("/api/users/" + this.$route.params.id)
      .then(response => {
        this.user = response.data;
        console.log(this.user.favorites);
      })
      .catch(error => {
        this.errors = error.response.data.errors;
        console.log(error.response.data.errors);
      });
    axios
      .get("/api/games/")
      .then(response => {
        this.game = response.data;
        console.log(this.game);
      })
      .catch(error => {
        this.errors = error.response.data.errors;
        console.log(error.response.data.errors);
      });
  },
  methods: {
    submit: function() {
      var params = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password_digest
      };
      axios
        .patch("/api/users/" + this.user.id, params)
        .then(response => {
          this.$router.push("/users/" + this.user.id);
          console.log(response.data);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        });
    },
    destroyUser: function() {
      axios
        .delete("/api/users/" + this.user.id)
        .then(response => {
          console.log("Deleted User Profile", response.data);
          this.$router.push("/logout");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        });
    },
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
