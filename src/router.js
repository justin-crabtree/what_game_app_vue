import Vue from "vue";
import Router from "vue-router";
import GamesIndex from "./views/games/Index.vue";
import GamesShow from "./views/games/Show.vue";
import TagsShow from "./views/tags/Show.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Signup from "./views/users/Signup.vue";
import Login from "./views/users/Login.vue";
import Logout from "./views/users/Logout.vue";
import Profile from "./views/users/Show.vue";
import Questionnaire from "./views/Questionnaire";
import Results from "./views/Results";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/games",
      name: "games-index",
      component: GamesIndex
    },
    {
      path: "/games/:id",
      name: "games-show",
      component: GamesShow
    },
    {
      path: "/tags/:id",
      name: "tags-show",
      component: TagsShow
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/users/:id",
      name: "users-show",
      component: Profile
    },
    {
      path: "/questionnaire",
      name: "questionnaire",
      component: Questionnaire
    },
    {
      path: "/results",
      name: "results",
      component: Results
    }
  ]
});
