<template>
  <div class="login">
    <section class="px-2 px-md-0 py-md-7">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-6 col-lg-4 mx-auto">
            <div class="card mb-0">
              <div class="card-header">
                <h5 class="card-title text-center">Login to your account</h5>
              </div>
              <div class="card-body p-3">
                <form v-on:submit.prevent="submit()">
                  <ul>
                    <li class="text-danger" v-for="error in errors">{{ error }}</li>
                  </ul>
                  <input type="email" class="form-control mb-2" v-model="email" placeholder="Enter email" />
                  <input type="password" class="form-control mb-3" v-model="password" placeholder="Password" />
                  <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                </form>
                <div class="separator mt-4"><span>Don't have an account?</span></div>
                <a class="btn btn-default btn-block" href="/signup" role="button">Register</a>
              </div>
            </div>
            <!-- end card -->
          </div>
        </div>
      </div>
    </section>

    <!--  <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email" />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("user_id", response.data.user_id);
          localStorage.setItem("username", response.data.username);
          // this.$router.push("/");
          window.location.href = "/";
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
