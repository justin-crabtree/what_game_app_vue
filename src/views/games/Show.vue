<template>
  <div class="games-show">
    <h1>Game Show</h1>
    <div>
      <h2>{{ game.title }}</h2>

      <div>
        <button
          class=""
          v-on:click="
            addFavorite();
            toggleFav();
          "
        >
          Favorite
          <i v-bind:class=""></i>
        </button>
      </div>

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
  props: ["is_fav"],
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
  methods: {
    addFavorite: function() {
      var params = {
        game_id: this.game.id
      };
      axios
        .post("/api/favorites/", params)
        .then(response => {
          this.favorite = response.data;
          console.log(response.data);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        });
    },
    toggleFav: function() {
      this.$emit("toggleFav", !this.is_fav);
    }
  }
};
</script>
