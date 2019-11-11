<template>
  <div class="questionnaire">
    <h1>Answer the questions to recieve your custom result!</h1>

    <div class="container">
      <form v-on:submit.prevent="submit()">
        <div>
          <h2>
            Are you a casual or experienced player?
          </h2>
          <div>
            <input type="radio" id="casual" value="Casual" v-model="experienceLevel" />
            <label for="casual">Casual</label>
            <input type="radio" id="experienced" value="Experienced" v-model="experienceLevel" />
            <label for="experienced">Experienced</label>
          </div>
        </div>

        <div>
          <h2>
            How much time do you want to spend to initially complete the game?
          </h2>
          <div>
            <input type="radio" id="short" value="Short (0-10 Hours)" v-model="gameLength" />
            <label for="short">Short (0-10 Hours)</label>
            <input type="radio" id="medium" value="Medium (10-30 Hours)" v-model="gameLength" />
            <label for="medium">Medium (10-30 Hours)</label>
            <input type="radio" id="long" value="Long (30+ Hours)" v-model="gameLength" />
            <label for="long">Long (30+ Hours)</label>
          </div>
        </div>

        <div>
          <h2>
            Do you want a game built to be replayable, or designed for a full experience on your first playthrough?
          </h2>
          <div>
            <input type="radio" id="replayable" value="Replayable" v-model="replayability" />
            <label for="replayable">Replayable</label>
            <input type="radio" id="once" value="One and Done" v-model="replayability" />
            <label for="once">One and Done</label>
          </div>
        </div>

        <div>
          <h2>
            Are you more interested in a story or gameplay experience?
          </h2>
          <div>
            <input type="radio" id="story" value="Story" v-model="gameFocus" />
            <label for="story">Story</label>
            <input type="radio" id="gameplay" value="Gameplay" v-model="gameFocus" />
            <label for="gameplay">Gameplay</label>
          </div>
        </div>

        <div>
          <h2>
            Single Player or Multiplayer/Cooperative focus?
          </h2>
          <div>
            <input type="radio" id="singleplayer" value="Singleplayer" v-model="playerAmount" />
            <label for="singleplayer">Singleplayer</label>
            <input type="radio" id="multiplayer" value="Multiplayer/Cooperative" v-model="playerAmount" />
            <label for="multiplayer">Multiplayer/Cooperative</label>
          </div>
        </div>

        <div>
          <h2>
            What is the main platform you play on?
          </h2>
          <div>
            <input type="radio" id="pc" value="PC" v-model="platforms" />
            <label for="pc">PC</label>
            <input type="radio" id="ps4" value="PS4" v-model="platforms" />
            <label for="ps4">PS4</label>
            <input type="radio" id="xboxone" value="Xbox One" v-model="platforms" />
            <label for="xboxone">Xbox One</label>
            <input type="radio" id="switch" value="Nintendo Switch" v-model="platforms" />
            <label for="switch">Nintendo Switch</label>
          </div>
        </div>

        <div>
          <h2>
            What ratings would you enjoy?
          </h2>
          <div>
            <input type="checkbox" id="e" value="E (Everyone)" v-model="checkedRatings" />
            <label for="e">E (Everyone)</label>
            <input type="checkbox" id="t" value="T (Teen)" v-model="checkedRatings" />
            <label for="t">T (Teen)</label>
            <input type="checkbox" id="m" value="M (Mature)" v-model="checkedRatings" />
            <label for="m">M (Mature)</label>
          </div>
        </div>

        <div>
          <h2>
            What theme are you interested in playing? (Select one or none at all for a wider selection)
          </h2>
          <div>
            <input type="checkbox" id="fantasy" value="Fantasy" v-model="checkedThemes" />
            <label for="fantasy">Fantasy</label>
            <input type="checkbox" id="sci-fi" value="Sci-Fi" v-model="checkedThemes" />
            <label for="sci-fi">Sci-Fi</label>
            <input type="checkbox" id="action-adventure" value="Action/Adventure" v-model="checkedThemes" />
            <label for="action-adventure">Action/Adventure</label>
            <input type="checkbox" id="horror" value="Horror" v-model="checkedThemes" />
            <label for="horror">Horror</label>
            <input type="checkbox" id="survival" value="Survival" v-model="checkedThemes" />
            <label for="survival">Survival</label>
            <input type="checkbox" id="party" value="Party" v-model="checkedThemes" />
            <label for="party">Party</label>
            <input type="checkbox" id="warfare" value="Warfare" v-model="checkedThemes" />
            <label for="warfare">Warfare</label>
          </div>
        </div>

        <div>
          <h2>
            What genres are you interested in playing? (Select one or none at all for a wider selection)
          </h2>
          <div>
            <input type="checkbox" id="shooter" value="Shooter" v-model="checkedGenres" />
            <label for="shooter">Shooter</label>
            <input type="checkbox" id="rpg" value="Role Playing (RPG)" v-model="checkedGenres" />
            <label for="rpg">Role Playing (RPG)</label>
            <input type="checkbox" id="platformer" value="Platformer" v-model="checkedGenres" />
            <label for="platformer">Platformer</label>
            <input type="checkbox" id="arcade" value="Arcade" v-model="checkedGenres" />
            <label for="arcade">Arcade</label>
            <input type="checkbox" id="fighting" value="Fighting" v-model="checkedGenres" />
            <label for="fighting">Fighting</label>
            <input type="checkbox" id="puzzle" value="Puzzle" v-model="checkedGenres" />
            <label for="puzzle">Puzzle</label>
            <input type="checkbox" id="racing" value="Racing" v-model="checkedGenres" />
            <label for="racing">Racing</label>
            <input type="checkbox" id="sports" value="Sports" v-model="checkedGenres" />
            <label for="sports">Sports</label>
            <input type="checkbox" id="strategy" value="Strategy/Tactics" v-model="checkedGenres" />
            <label for="strategy">Strategy/Tactics</label>
            <input type="checkbox" id="music" value="Music" v-model="checkedGenres" />
            <label for="music">Music</label>
            <input type="checkbox" id="action" value="Action" v-model="checkedGenres" />
            <label for="action">Action</label>
          </div>
        </div>

        <div>
          <input type="submit" class="btn btn-primary" value="Submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      checkedThemes: [],
      experienceLevel: "",
      gameLength: "",
      replayability: "",
      gameFocus: "",
      playerAmount: "",
      platforms: "",
      checkedGenres: [],
      checkedRatings: []
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
        checkedThemes: this.checkedThemes,
        experienceLevel: this.experienceLevel,
        gameLength: this.gameLength,
        replayability: this.replayability,
        gameFocus: this.gameFocus,
        playerAmount: this.playerAmount,
        platforms: this.platforms,
        checkedGenres: this.checkedGenres,
        checkedRatings: this.checkedRatings
      };
      this.$router.push({ path: "/games", query: params });
      // axios
      //   .get("/api/games", { params: params })
      //   .then(response => {
      //     console.log(response.data);
      //     this.$root.resultGames = response.data;
      //     this.$router.push("/games");
      //   })
      //   .catch(error => {
      //     this.errors = error.response.data.errors;
      //   });
    }
  }
};
</script>
