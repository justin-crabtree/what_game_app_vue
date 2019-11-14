<template>
  <div class="signup">
    <section class="py-lg-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 mx-auto">
            <form v-on:submit.prevent="submit()">
              <div class="card mb-4">
                <div class="card-header">
                  <h5 class="card-title text-center">Create a new account</h5>
                </div>
                <div class="card-body p-3">
                  <div class="form-group">
                    <label for="username">Username</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="ya ya-user"></i></span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        v-model="name"
                        placeholder="Username"
                        required
                      />
                      <div class="invalid-feedback" style="width: 100%;">
                        Your username is required.
                      </div>
                    </div>
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" v-model="email" placeholder="you@example.com" />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="row mb-4">
                    <div class="col-6">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        v-model="password"
                        placeholder="Enter password"
                        required
                      />
                    </div>
                    <div class="col-6">
                      <label for="repeat-password">Repeat Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="repeat-password"
                        v-model="passwordConfirmation"
                        placeholder="Enter password"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <button class="btn btn-primary" type="submit">Create an account</button>
                </div>
              </div>
              <!-- end card -->
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
