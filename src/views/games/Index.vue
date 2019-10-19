<template>
  <div class="games-index">
    <h1>{{ message }}</h1>
    <div v-for="game in games">
      <h2>{{ game.title }}</h2>
      <img :src="game.image_url" alt="" />
      <p>{{ game.summary }}</p>
      <p>Video Url: {{ game.video_url }}</p>
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
      message: "Games Index",
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
