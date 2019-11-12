<template>
  <div class="home">
    <div
      ya-background="https://www.youtube.com/watch?v=1XMDPG03i5k"
      ya-option="mute: 1;controls: 0;loop: 1"
      style="height: 800px"
    ></div>
    <main>
      <div class="container">
        <div class="row py-5">
          <div class="col-md-12 text-center">
            <h1>What game should you play?</h1>
            <h2><router-link to="/questionnaire/">Start</router-link></h2>
            <h2><router-link to="/about/">About</router-link></h2>
          </div>
        </div>
      </div>
    </main>
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
