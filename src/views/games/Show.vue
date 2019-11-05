<template>
  <div class="games-show">
    <h1>Game Show</h1>
    <div>
      <h2>{{ game.title }}</h2>

      <div>
        <button class="favorites" v-if="!game.favorite" v-on:click="addFavorite()">Favorite</button>
        <button class="favorites" v-if="game.favorite" v-on:click="destroyFavorite()">Unfavorite</button>
      </div>

      <img :src="game.image_url" alt="" />
      <p>{{ game.summary }}</p>
      <p>Video Url: {{ game.video_url }}</p>
      <h2>Tags:</h2>
      <div v-for="tag in game.tags">
        <p>
          <router-link v-bind:to="`/tags/${tag.id}`">{{ tag.name }}</router-link>
        </p>
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
      game: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/games/" + this.$route.params.id).then(response => {
      this.game = response.data;
      console.log(this.game);
    });
  },
  methods: {
    addFavorite: function() {
      var params = {
        game_id: this.game.id
      };
      axios
        .post("/api/favorites/", params)
        .then(response => {
          console.log(response.data);
          this.game.favorite = true;
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        });
    },
    destroyFavorite: function() {
      axios.delete("/api/favorites/" + this.game.id).then(response => {
        console.log(response.data);
        this.game.favorite = false;
      });
    }
  }
};
</script>
