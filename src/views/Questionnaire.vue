<template>
  <div class="questionnaire">
    <section>
      <div class="container">
        <div class="row">
          <div class="col">
            <form v-on:submit.prevent="submit()">
              <h1>
                Are you a casual or experienced player?
              </h1>
              <div>
                <div class="form-group form-check custom-control custom-radio">
                  <input
                    data-toggle="tooltip"
                    data-placement="top"
                    title="You haven't played many games and you're looking for a game that doesn't expect a ton of gaming knowledge"
                    class="custom-control-input"
                    type="radio"
                    id="casual"
                    value="Casual"
                    v-model="experienceLevel"
                  />
                  <label class="custom-control-label" for="casual">Casual</label>
                </div>
                <div class="form-group form-check custom-control custom-radio">
                  <input
                    data-toggle="tooltip"
                    data-placement="top"
                    title="You've played many games and you're looking for a game that can offer a challenge"
                    class="custom-control-input"
                    type="radio"
                    id="experienced"
                    value="Experienced"
                    v-model="experienceLevel"
                  />
                  <label class="custom-control-label" for="experienced">Experienced</label>
                </div>
              </div>

              <div>
                <h2>
                  How much time do you want to spend to initially complete the game?
                </h2>
                <div>
                  <div class="form-group form-check custom-control custom-radio">
                    <input
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Quick to reach the end credits or it consists of multiple short experiences"
                      class="custom-control-input"
                      type="radio"
                      id="short"
                      value="Short (0-10 Hours)"
                      v-model="gameLength"
                    />
                    <label class="custom-control-label" for="short">Short (0-10 Hours)</label>
                  </div>

                  <div class="form-group form-check custom-control custom-radio">
                    <input
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Offers a modest length that will keep you entertained but not take up all of your time"
                      class="custom-control-input"
                      type="radio"
                      id="medium"
                      value="Medium (10-30 Hours)"
                      v-model="gameLength"
                    />
                    <label class="custom-control-label" for="medium">Medium (10-30 Hours)</label>
                  </div>

                  <div class="form-group form-check custom-control custom-radio">
                    <input
                      data-toggle="tooltip"
                      data-placement="top"
                      title="The time sink. Long games that offer a ton of content and replayability"
                      class="custom-control-input"
                      type="radio"
                      id="long"
                      value="Long (30+ Hours)"
                      v-model="gameLength"
                    />
                    <label class="custom-control-label" for="long">Long (30+ Hours)</label>
                  </div>
                </div>
              </div>

              <div>
                <h2>
                  Do you want a game built to be replayable, or designed for a full experience on your first
                  playthrough?
                </h2>
                <div>
                  <div class="form-group form-check custom-control custom-radio">
                    <input
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Games that offer more content the more you complete it or gives you multiple ways to play."
                      class="custom-control-input"
                      type="radio"
                      id="replayable"
                      value="Replayable"
                      v-model="replayability"
                    />
                    <label class="custom-control-label" for="replayable">Replayable</label>
                  </div>

                  <div class="form-group form-check custom-control custom-radio">
                    <input
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Games that don't offer much in replayability and you'd feel satisfied seeing it through to the end the first time through."
                      class="custom-control-input"
                      type="radio"
                      id="once"
                      value="One and Done"
                      v-model="replayability"
                    />
                    <label class="custom-control-label" for="once">One and Done</label>
                  </div>
                </div>
              </div>

              <div>
                <h2>
                  Are you more interested in a story or gameplay experience?
                </h2>
                <div>
                  <div class="form-group form-check custom-control custom-radio">
                    <input
                      data-toggle="tooltip"
                      data-placement="top"
                      title="A game that was designed to be played for the narrative primarily"
                      class="custom-control-input"
                      type="radio"
                      id="story"
                      value="Story"
                      v-model="gameFocus"
                    />
                    <label class="custom-control-label" for="story">Story</label>
                  </div>

                  <div class="form-group form-check custom-control custom-radio">
                    <input
                      data-toggle="tooltip"
                      data-placement="top"
                      title="A game with a larger focus on control and gameplay. These games often don't have a narrative or can be largely ignored."
                      class="custom-control-input"
                      type="radio"
                      id="gameplay"
                      value="Gameplay"
                      v-model="gameFocus"
                    />
                    <label class="custom-control-label" for="gameplay">Gameplay</label>
                  </div>
                </div>
              </div>

              <div>
                <h2>
                  Single Player or Multiplayer/Cooperative focus?
                </h2>
                <div>
                  <div class="form-group form-check custom-control custom-radio">
                    <input
                      class="custom-control-input"
                      type="radio"
                      id="singleplayer"
                      value="Singleplayer"
                      v-model="playerAmount"
                    />
                    <label class="custom-control-label" for="singleplayer">Singleplayer</label>
                  </div>

                  <div class="form-group form-check custom-control custom-radio">
                    <input
                      class="custom-control-input"
                      type="radio"
                      id="multiplayer"
                      value="Multiplayer/Cooperative"
                      v-model="playerAmount"
                    />
                    <label class="custom-control-label" for="multiplayer">Multiplayer/Cooperative</label>
                  </div>
                </div>
              </div>

              <div>
                <h2>
                  What is the main platform you play on?
                </h2>
                <div>
                  <div class="form-group form-check custom-control custom-radio">
                    <input class="custom-control-input" type="radio" id="pc" value="PC" v-model="platforms" />
                    <label class="custom-control-label" for="pc">PC</label>
                  </div>
                  <div class="form-group form-check custom-control custom-radio">
                    <input class="custom-control-input" type="radio" id="ps4" value="PS4" v-model="platforms" />
                    <label class="custom-control-label" for="ps4">PS4</label>
                  </div>

                  <div class="form-group form-check custom-control custom-radio">
                    <input
                      class="custom-control-input"
                      type="radio"
                      id="xboxone"
                      value="Xbox One"
                      v-model="platforms"
                    />
                    <label class="custom-control-label" for="xboxone">Xbox One</label>
                  </div>

                  <div class="form-group form-check custom-control custom-radio">
                    <input
                      class="custom-control-input"
                      type="radio"
                      id="switch"
                      value="Nintendo Switch"
                      v-model="platforms"
                    />
                    <label class="custom-control-label" for="switch">Nintendo Switch</label>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <h2>
                    What age ratings would you enjoy? (Check all that apply)
                  </h2>
                </div>

                <div>
                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="e"
                      value="E (Everyone)"
                      v-model="checkedRatings"
                    />
                    <label class="custom-control-label" for="e">E (Everyone)</label>
                  </div>

                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="t"
                      value="T (Teen)"
                      v-model="checkedRatings"
                    />
                    <label class="custom-control-label" for="t">T (Teen)</label>
                  </div>

                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="m"
                      value="M (Mature)"
                      v-model="checkedRatings"
                    />
                    <label class="custom-control-label" for="m">M (Mature)</label>
                  </div>
                </div>
              </div>

              <div>
                <h2>
                  What themes are you interested in playing? (Check all that apply)
                </h2>
                <div>
                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="fantasy"
                      value="Fantasy"
                      v-model="checkedThemes"
                    />
                    <label class="custom-control-label" for="fantasy">Fantasy</label>
                  </div>

                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="sci-fi"
                      value="Sci-Fi"
                      v-model="checkedThemes"
                    />
                    <label class="custom-control-label" for="sci-fi">Sci-Fi</label>
                  </div>

                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="action-adventure"
                      value="Action/Adventure"
                      v-model="checkedThemes"
                    />
                    <label class="custom-control-label" for="action-adventure">Action/Adventure</label>
                  </div>

                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="horror"
                      value="Horror"
                      v-model="checkedThemes"
                    />
                    <label class="custom-control-label" for="horror">Horror</label>
                  </div>

                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="survival"
                      value="Survival"
                      v-model="checkedThemes"
                    />
                    <label class="custom-control-label" for="survival">Survival</label>
                  </div>

                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="party"
                      value="Party"
                      v-model="checkedThemes"
                    />
                    <label class="custom-control-label" for="party">Party</label>
                  </div>

                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      class="custom-control-input"
                      type="checkbox"
                      id="warfare"
                      value="Warfare"
                      v-model="checkedThemes"
                    />
                    <label class="custom-control-label" for="warfare">Warfare</label>
                  </div>
                </div>
              </div>

              <!-- <div class="form-group form-check custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="check">
                <label class="custom-control-label" for="check">Remember me</label>
              </div> -->

              <div>
                <h2>
                  What genres are you interested in playing? (Check all that apply)
                </h2>
                <div>
                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="shooter"
                      value="Shooter"
                      v-model="checkedGenres"
                    />
                    <label class="custom-control-label" for="shooter">Shooter</label>
                  </div>
                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="rpg"
                      value="Role Playing (RPG)"
                      v-model="checkedGenres"
                    />
                    <label class="custom-control-label" for="rpg">Role Playing (RPG)</label>
                  </div>

                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="platformer"
                      value="Platformer"
                      v-model="checkedGenres"
                    />
                    <label class="custom-control-label" for="platformer">Platformer</label>
                  </div>

                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="arcade"
                      value="Arcade"
                      v-model="checkedGenres"
                    />
                    <label class="custom-control-label" for="arcade">Arcade</label>
                  </div>

                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="fighting"
                      value="Fighting"
                      v-model="checkedGenres"
                    />
                    <label class="custom-control-label" for="fighting">Fighting</label>
                  </div>

                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="puzzle"
                      value="Puzzle"
                      v-model="checkedGenres"
                    />
                    <label class="custom-control-label" for="puzzle">Puzzle</label>
                  </div>

                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="racing"
                      value="Racing"
                      v-model="checkedGenres"
                    />
                    <label class="custom-control-label" for="racing">Racing</label>
                  </div>

                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="sports"
                      value="Sports"
                      v-model="checkedGenres"
                    />
                    <label class="custom-control-label" for="sports">Sports</label>
                  </div>

                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="strategy"
                      value="Strategy/Tactics"
                      v-model="checkedGenres"
                    />
                    <label class="custom-control-label" for="strategy">Strategy/Tactics</label>
                  </div>

                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="music"
                      value="Music"
                      v-model="checkedGenres"
                    />
                    <label class="custom-control-label" for="music">Music</label>
                  </div>

                  <div class="form-group form-check custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="action"
                      value="Action"
                      v-model="checkedGenres"
                    />
                    <label class="custom-control-label" for="action">Action</label>
                  </div>
                </div>
              </div>

              <div>
                <input type="submit" class="btn btn-primary" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- <h1>Answer the questions to recieve your custom result!</h1> -->

    <!-- <div class="container">
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
            What ratings would you enjoy? (Check all that apply)
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
            What themes are you interested in playing? (Leave blank for a wider selection)
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
            What genres are you interested in playing? (Leave blank for a wider selection)
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
    </div> -->
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
