<template>
  <div class="tags-show">
    <section class="py-5 py-md-6">
      <div class="container">
        <div class="row">
          <div class="col-11 col-md-8 text-center mx-auto mb-4">
            <i class="fas fa-gamepad ya-xl"></i>
            <h2 class="font-size-lg">{{ tag["name"] }}</h2>
            <p class="lead">Here is a collection of all the games labeled under the "{{ tag["name"] }}" tag</p>
          </div>
        </div>
        <div class="row">
          <div v-for="game in tag.games" class="col-md-4">
            <div class="card card-sm">
              <a class="card-img card-img-xl" v-bind:to="`/games/${game.id}`">
                <img class="card-img-top" :src="game.image_url" />
              </a>
              <div class="card-body">
                <h5 class="card-title text-xl text-center">
                  <router-link v-bind:to="`/games/${game.id}`">{{ game.title }}</router-link>
                </h5>
              </div>
            </div>
            <!-- end .card -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
img {
  width: 500px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      tag: {}
    };
  },
  created: function() {
    axios
      .get("/api/tags/" + this.$route.params.id)
      .then(response => {
        this.tag = response.data;
      })
      .catch(error => {
        this.errors = error.response.data.errors;
        console.log(error.response.data.errors);
      });
  },
  methods: {}
};
</script>
