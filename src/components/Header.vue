<template>
  <div class="container-flex">
    <nav class="navbar navbar-light">
      <div class="dropdown d-xl-none d-lg-none mr-auto">
        <img
          data-toggle="dropdown"
          data-target="#navd"
          aria-haspopup="true"
          aria-expanded="false"
        />
        <div class="dropdown-menu hb" aria-labelledby="nav">
          <!-- <routuer-link to="/">Home</routuer-link>
          <routuer-link to="/Products">Products</routuer-link>
          <router-link to="/Contact">Contact US</router-link> -->
        </div>
      </div>
      <a class="navbar-brand py-0 pl-5">
        <img src="@/assets/funiturelogo.png" width="80" height="80" />
      </a>
      <span>
        <router-link class="pl-5" to="/">Home</router-link>
        <router-link class="px-5" to="/Products">Products</router-link>
        <router-link to="/Contact">Contact US</router-link>
      </span>
      <p class="navbar-item ml-auto"></p>
      <div class="search d-none d-xl-block d-lg-block pr-3">
        <input type="search" class="search" />
      </div>
      <div class="user">
        <h5
          style="cursor: pointer"
          data-toggle="modal"
          data-target="#userModal"
        >
          Sign In
        </h5>
      </div>
      <div class="bag" @click="openCart">
        <img src="@/assets/cart.svg" class="pb-1" />
        <span class="mb-3" v-if="this.bagItemscount > 0">{{
          bagItemscount
        }}</span>
      </div>
    </nav>
    <div
      class="modal fade"
      id="userModal"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              style="outline-style: none"
              aria-label="close"
              aria-hidden="true"
            >
              <span>x</span>
            </button>
            <form class="px-3 py-2" v-on:submit="clickedSingup">
              <div class="form-group">
                <label for="exampleDropdownFormEmail" style="color: blue"
                  >Email address</label
                >
                <input
                  type="email"
                  class="form-control"
                  placeholder="email@example.com"
                  id="emailId"
                  required
                />
              </div>
              <div class="form-group">
                <label for="exampleDropdownFormPassword1" style="color: blue"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  id="passwordId"
                  required
                />
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="checkbox" />
                <label class="form-check-label" for="dropdownCheck"
                  >Remember Me</label
                >
              </div>
              <button
                type="button"
                class="btn-xl btn-success mt-3"
                v-on:click="signin"
              >
                Sign In
              </button>
              <div class="modal_footer">
                <button
                  type="submit"
                  class="btn-xl btn-success mt-3"
                  v-on:click="promiss(clickForgotPassword)"
                  style="flex: 0.45"
                >
                  ForgotPassword
                </button>
                <div style="flex: 0.1"></div>
                <button
                  type="submit"
                  class="btn-xl btn-success mt-3"
                  style="flex: 0.45"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    bagItemscount() {
      return this.$store.getters.itemsNumber;
    },
  },
  methods: {
    openCart() {
      console.log("openCart: ", "this is openCart");
      return "hello";
    },
    async signin() {
      const email = document.getElementById("emailId").value;
      const password = document.getElementById("passwordId").value;
      const checked = document.getElementById("checkbox").checked;

      console.log("email: ", email);
      console.log("password: ", password);
      console.log("checkbox: ", checked);

      if (email.length > 0 && password.length > 0) {
        fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            checked,
          }),
        })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => console.log(err));
      } else {
        console.log(
          "Incorrect the input or password, please check the correct form"
        );
      }
    },
    clickForgotPassword() {
      console.log("clicked forgot password");
    },
    async clickedSingup(e) {
      e.preventDefault();
      const email = document.getElementById("emailId").value;
      const password = document.getElementById("passwordId").value;
      const checked = document.getElementById("checkbox").checked;

      console.log("email: ", email.length);
      if (email.length > 0 && password.length > 0) {
        const result = fetch("http://localhost:3000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            checked,
          }),
        })
          .then((res) => {
            if (res.statusText === "OK") {
              //everything is okay
              alert("Success!");
            } else {
              alert(result.err);
            }
          })
          .catch((error) => console.log(error));
      } else {
        console.log("Input or password is not correct");
      }
    },
  },
};
</script>

<style>
nav {
  z-index: 100;
}
.navbar {
  border-bottom: 1px solid #dcdcdc;
  background-color: #f8f8f8;
}
.close {
  position: relative;
  bottom: 20px;
  left: 10px;
  font-size: 31px;
  color: #000;
}
.navbar-item.bc a {
  font-size: 17px;
  text-decoration: none;
  color: blue;
}
.navbar-item.bc a:hover,
.navbar-item.bc a:active {
  color: chocolate;
}
.btn-sm {
  border-radius: 0%;
}
.search {
  outline: none;
  border-radius: 1px;
  border: 1px #b62d2d;
  background: #ededed url("../assets/search.png") no-repeat 5px center;
  border-radius: 10em;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  margin-right: 10px;
}
.search:focus {
  outline: none;
  border: solid 1px #dcdcdc;
  background-color: #fff;
  border-color: #98ccfd;
  -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  -moz-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  backface-visibility: hidden;
  perspective: 1000;
}
form .btn-xl.btn-success.mt-3 {
  position: relative;
  -webkit-transition-duration: 100ms;
  transition-duration: 100ms;
  width: 100%;
  height: 50px;
  font-size: 20px;
  outline: none;
  cursor: pointer;
}
.bag span {
  background-color: #6394f8;
  border-radius: 10px;
  color: white;
  position: absolute;
  font-size: 15px;
  line-height: 1;
  padding: 2px 3px 3px 3px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  margin-left: -9px;
  bottom: 1rem;
}
.bag img {
  cursor: pointer;
  width: 30px;
  height: auto;
}

.user {
  margin-right: 20px;
  padding-top: 10px;
}

.user:hover {
  text-decoration: underline;
}
.modal_footer {
  display: flex;
  flex: 1;
  flex-direction: row;
}
</style>
