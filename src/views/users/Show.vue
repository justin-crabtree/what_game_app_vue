<template>
  <div class="users-show">
    <section class="py-5 py-md-6">
      <div class="container">
        <div class="row">
          <div class="col-11 col-md-8 text-center mx-auto mb-4">
            <img
              class="avatar-thumbnail avatar-lg"
              src="https://i.pinimg.com/originals/de/96/a9/de96a9273b16f0300ee828b24f37ace3.jpg"
              alt=""
            />
            <h2 class="font-size-lg">{{ user["name"] }}</h2>
            <p class="lead">
              Edit your profile or manage favorites
            </p>
            <div class="col-sm-8 col-md-6 col-lg-4 mx-auto">
              <div class="card mb-0">
                <div class="card-header">
                  <h5 class="card-title text-center">Edit</h5>
                </div>
                <div v-if="isLoggedIn()" class="card-body p-3">
                  <form v-on:submit.prevent="submit()">
                    <ul>
                      <li class="text-danger" v-for="error in errors">{{ error }}</li>
                    </ul>
                    <input type="name" class="form-control mb-2" v-model="user.name" placeholder="Enter email" />
                    <input type="email" class="form-control mb-2" v-model="user.email" placeholder="Enter email" />
                    <input
                      type="password"
                      class="form-control mb-3"
                      v-model="user.password_digest"
                      placeholder="Password"
                    />
                    <button type="submit" class="btn btn-primary btn-block">Update</button>
                  </form>
                  <div class="separator mt-4"><span>Want to delete your profile?</span></div>
                  <button class="btn btn-danger" v-on:click="destroyUser()">Delete Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isLoggedIn()" class="row">
          <div v-for="favorite in user.favorites" class="col-md-4">
            <div class="card card-sm">
              <a class="card-img card-img-xl" v-bind:to="`/games/${favorite.id}`">
                <img class="card-img-top" :src="favorite.image_url" />
              </a>
              <div class="card-body">
                <h5 class="card-title text-center">
                  <router-link class="text-xl" v-bind:to="`/games/${favorite.id}`">
                    <b>{{ favorite["title"] }}</b>
                  </router-link>
                </h5>
                <button class="btn btn-block btn-danger" v-on:click="destroyFavorite(favorite)">
                  Unfavorite
                  <i class="ya ya-heart-o"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
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
      games: []
    };
  },
  created: function() {
    axios
      .get("/api/users/" + this.$route.params.id)
      .then(response => {
        this.user = response.data;
        console.log(this.user);
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
    },
    destroyFavorite: function(favorite) {
      axios
        .delete("/api/favorites/" + favorite.id)
        .then(response => {
          console.log(response.data);
          var index = this.user.favorites.indexOf(favorite);
          this.user.favorites.splice(index, 1);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        });
    }
  }
};
</script>
