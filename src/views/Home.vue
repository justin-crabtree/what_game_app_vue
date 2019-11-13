<template>
  <div class="home">
    <section
      class="bg-image text-center h-calc-100 d-flex align-items-center px-3 px-md-0"
      ya-background="https://www.youtube.com/watch?v=tlVf7K8HKLg"
      ya-option="start: 22;mute: 1;controls: 0;loop: 1"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <h1 class="font-weight-black text-white text-uppercase display-title">Game Quest</h1>
            <div class="countdown mb-5 mt-4"></div>
            <p class="mb-5 text-light">
              Spend more time playing and less time deciding
            </p>
            <router-link class="btn btn-primary btn-rounded btn-lg" to="/questionnaire/">Start</router-link>
            <!-- <router-link class="btn btn-outline-light btn-rounded btn-lg ml-2" to="/about/">About</router-link> -->
            <div class="social-links mt-5">
              <a href="#" data-toggle="tooltip" title="facebook"><i class="ya ya-facebook"></i></a>
              <a href="#" data-toggle="tooltip" title="twitter"><i class="ya ya-twitter"></i></a>
              <a href="#" data-toggle="tooltip" title="twitch"><i class="ya ya-twitch"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {};
  },
  created: function() {},
  methods: {}
};
</script>
