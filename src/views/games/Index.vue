<template>
  <div class="games-index">
    <section class="bg-darken p-1">
      <div class="container-fluid px-0">
        <div class="owl-carousel" ya-carousel="loop: true">
          <div>
            <img src="https://giantbomb1.cbsistatic.com/uploads/original/10/104355/2906207-16.jpg" alt="" />
            <div class="owl-caption owl-caption-bottom">
              <h1 class="owl-title bg-darken text-white"><a href="/games/23">Death Stranding</a></h1>
            </div>
          </div>
          <div>
            <img
              src="https://nintendoeverything.com/wp-content/uploads/pokemon-sword-shield-11.jpg"
              alt="pokemon-sword-shield"
            />
            <div class="owl-caption owl-caption-bottom">
              <h1 class="owl-title bg-darken text-white"><a href="/games/18">Pokemon Sword and Shield</a></h1>
            </div>
          </div>
          <div>
            <img src="https://www.dualshockers.com/wp-content/uploads/2018/10/RE2_Claire_Oct8_screen7.jpg" alt="" />
            <div class="owl-caption owl-caption-bottom">
              <h1 class="owl-title bg-darken text-white"><a href="/games/14">Resident Evil 2</a></h1>
            </div>
          </div>
          <div>
            <img
              src="https://giantbomb1.cbsistatic.com/uploads/original/8/82063/3081390-46363251004_3f18c5845d_o.jpg"
              alt=""
            />
            <div class="owl-caption owl-caption-bottom">
              <h1 class="owl-title bg-darken text-white"><a href="/games/144">Astral Chain</a></h1>
            </div>
          </div>
          <div>
            <img
              src="https://giantbomb1.cbsistatic.com/uploads/original/0/7772/3028639-nibellion_2018-jun-10%201.jpg"
              alt=""
            />
            <div class="owl-caption owl-caption-bottom">
              <h1 class="owl-title bg-darken text-white"><a href="/games/19">Devil May Cry 5</a></h1>
            </div>
          </div>
          <div>
            <img
              src="https://cdn3.dualshockers.com/wp-content/uploads/2018/06/MonsterHunterWorld-22-2-ds1-1340x1340.jpg"
              alt=""
            />
            <div class="owl-caption owl-caption-bottom">
              <h1 class="owl-title bg-darken text-white"><a href="/games/63">Monster Hunter World</a></h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5 py-md-6">
      <div class="container">
        <div class="row">
          <div class="col-11 col-md-8 text-center mx-auto mb-4">
            <i class="fas fa-gamepad ya-xl"></i>
            <h2 class="font-size-lg">Game Catalog</h2>
            <p class="lead">
              Here is a collection of all the games used in this app. Click each one to find out more information.
            </p>
          </div>
        </div>
        <div class="row">
          <div v-for="game in games" class="col-md-4">
            <div class="card card-sm">
              <a class="card-img card-img-xl" v-bind:to="`/games/${game.id}`">
                <img class="card-img-top" :src="game.image_url" />
              </a>
              <div class="card-body">
                <h5 class="card-title text-xl text-center">
                  <router-link v-bind:to="`/games/${game.id}`">{{ game.title }}</router-link>
                </h5>
              </div>
            </div>
            <!-- end .card -->
          </div>
        </div>
      </div>
    </section>
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
