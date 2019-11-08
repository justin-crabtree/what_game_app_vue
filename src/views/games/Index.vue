<template>
  <div class="games-index">
    <h1>Games Index</h1>
    <!-- root.resultGames -->
    <div v-for="game in games">
      <h2>
        <router-link v-bind:to="`/games/${game.id}`">{{ game.title }}</router-link>
      </h2>
      <img :src="game.image_url" alt="" />
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
