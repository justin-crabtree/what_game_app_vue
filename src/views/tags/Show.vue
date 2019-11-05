<template>
  <div class="tags-show">
    <h1>Tags Show</h1>
    <h2>{{ tag["name"] }}</h2>
    <div v-for="game in tag.games">
      <h3>
        {{ game["title"] }}
      </h3>
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
      tag: {}
    };
  },
  created: function() {
    axios.get("/api/tags/" + this.$route.params.id).then(response => {
      this.tag = response.data;
    });
  },
  methods: {}
};
</script>
