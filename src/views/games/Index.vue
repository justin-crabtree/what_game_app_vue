<template>
  <div class="games-index">
    <h1>Games Index</h1>
    <div v-for="game in games">
      <h2>
        <router-link v-bind:to="`/games/${game.id}`">{{ game.title }}</router-link>
      </h2>
      <img :src="game.image_url" alt="" />
    </div>
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
      games: []
    };
  },
  created: function() {
    axios.get("/api/games").then(response => {
      this.games = response.data;
    });
  },
  methods: {}
};
</script>
