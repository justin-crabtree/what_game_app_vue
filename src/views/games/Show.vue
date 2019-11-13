<template>
  <div class="games-show">
    <section class="pt-0 py-lg-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="product mb-4 mb-lg-0">
              <div class="product-img">
                <img style="height: 670px" :src="game.image_url" alt="" />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mb-4 pb-4 border-bottom-dashed">
              <h1 class="font-weight-bold">{{ game.title }}</h1>
              <div class="d-flex align-items-center">
                <div class="card-body">
                  <button class="btn btn-danger btn-icon" v-if="!game.favorite" v-on:click="addFavorite()">
                    <i class="ya ya-heart-o"></i>
                    Favorite
                  </button>
                  <button class="btn btn-secondary btn-icon" v-else v-on:click="destroyFavorite()">
                    <i class="ya ya-heart-o"></i>
                    Unfavorite
                  </button>
                </div>
              </div>
            </div>
            <p class="mb-4">
              {{ game.summary }}
            </p>
            <div class="tags mt-4 mb-4">
              <router-link v-for="tag in game.tags" v-bind:to="`/tags/${tag.id}`">{{ tag.name }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-0 py-lg-5">
      <div class="container">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe :src="game.video_url" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

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
    axios
      .get("/api/games/" + this.$route.params.id)
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
