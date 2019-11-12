<template>
  <div class="games-index">
    <div id="cards" class="container">
      <div id="card-container" class="row">
        <div v-for="game in games" class="col-mb-4 col mx-2">
          <div style="width: 330px">
            <div class="card">
              <a class="card-img card-img-xl">
                <img class="card-img-top" :src="game.image_url" />
              </a>
              <div class="card-body">
                <h5 class="card-title text-center font-size-lg">
                  <div class="alert-link-primary" role="alert">
                    <router-link v-bind:to="`/games/${game.id}`">{{ game.title }}</router-link>
                  </div>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      games: []
    };
  },
  created: function() {
    axios
      .get("/api/games", { params: this.$route.query })
      .then(response => {
        console.log(this.$route.query);
        this.games = response.data;
      })
      .catch(error => {
        this.errors = error.response.data.errors;
        console.log(error.response.data.errors);
      });
  },
  methods: {}
};
</script>
