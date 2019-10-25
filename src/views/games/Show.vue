<template>
  <div class="games-show">
    <h1>Game Show</h1>
    <div>
      <h2>{{ game.title }}</h2>
      <img :src="game.image_url" alt="" />
      <p>{{ game.summary }}</p>
      <p>Video Url: {{ game.video_url }}</p>
      <h2>Tags:</h2>
      <div v-for="tag in game.tags">
        <p>{{ tag.name }}</p>
      </div>
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
      game: {}
    };
  },
  created: function() {
    axios.get("/api/games/" + this.$route.params.id).then(response => {
      this.game = response.data;
    });
  },
  methods: {}
};
</script>
