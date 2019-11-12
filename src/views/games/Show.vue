<template>
  <div class="games-show">
    <div class="container">
      <div>
        <div class="col-lg-4">
          <div class="card card-default mb-0">
            <div class="card-body">
              <div class="widget widget-game mb-0" ya-style="background-color: #263238">
                <div class="widget-body">
                  <h3 class="widget-title text-white text-center">{{ game.title }}</h3>
                  <h6 class="text-center">Tags:</h6>
                  <a class="badge badge-primary" v-for="tag in game.tags" v-bind:to="`/tags/${tag.id}`">
                    {{ tag.name }}
                  </a>
                  <p class="font-weight-light font-size-md mt-4">{{ game.summary }}</p>
                  <a
                    class="btn btn-outline-light btn-block mt-4"
                    v-if="!game.favorite"
                    v-on:click="addFavorite()"
                    role="button"
                  >
                    Add to favourites
                    <i class="ya ya-heart-o"></i>
                  </a>
                  <a
                    class="btn btn-outline-light btn-block mt-4"
                    v-if="game.favorite"
                    v-on:click="destroyFavorite()"
                    role="button"
                  >
                    Delete from favourites
                    <i class="ya ya-heart-o"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img class="card-img" <img :src="game.image_url" alt="" />
        </div>

        <div>
          <h1>{{ game.title }}</h1>
          <div>
            <button class="favorites" v-if="!game.favorite" v-on:click="addFavorite()">Favorite</button>
            <button class="favorites" v-if="game.favorite" v-on:click="destroyFavorite()">Unfavorite</button>
          </div>
          <p class="text-justify font-size-lg">{{ game.summary }}</p>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              width="560"
              height="315"
              :src="game.video_url"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h2>Tags:</h2>
          <div v-for="tag in game.tags">
            <p>
              <router-link v-bind:to="`/tags/${tag.id}`">{{ tag.name }}</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
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
