<template>
  <div class="header">
    <div class="headerContent">
      <div class="logo">
        <nuxt-link to="/">
          <font-awesome-icon icon="comment-alt" />
          <span>BlogGo</span>
        </nuxt-link>
      </div>
      <a href="#" class="mobileMenuBtn" @click="openMobileMenu">
        <font-awesome-icon icon="bars" />
      </a>
    </div>
    <ul :class="{ openMenu: menuList }">
      <li v-if="loggedIn">
        <nuxt-link to="/"><font-awesome-icon icon="angle-right" /> Home</nuxt-link>
      </li>
      <li v-if="loggedIn">
        <nuxt-link :to="{ name: 'database' }"><font-awesome-icon icon="angle-right" /> Admin</nuxt-link>
      </li>
      <li v-if="loggedIn">
        <nuxt-link :to="{ name: 'newPost' }"><font-awesome-icon icon="angle-right" /> New post</nuxt-link>
      </li>
      <li v-if="loggedIn">
        <a href @click="logout"><font-awesome-icon icon="angle-right" /> Logout</a>
      </li>
      <li v-if="!loggedIn">
        <nuxt-link :to="{ name: 'login' }"><font-awesome-icon icon="angle-right" /> Login</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import Cookies from "js-cookie";

export default {
  mounted() {
    this.setupFirebase();
  },
  data() {
    return {
      loggedIn: false,
      userEmail: "",
      menuList: false
    };
  },
  methods: {
    openMobileMenu() {
      this.menuList = !this.menuList;
    },
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.loggedIn = true;
          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(token => {
              Cookies.set("access_token", token);
            });
          this.userEmail = firebase.auth().currentUser.email;
        } else {
          this.loggedIn = false;
          Cookies.remove("access_token");
        }
      });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        });
    }
  },
  watch: {
    $route() {
      this.menuList = false;
    }
  }
};
</script>