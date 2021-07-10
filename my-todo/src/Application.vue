<template>
  <!-- <router-view></router-view> -->
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <user-list msg="Rajesh" />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import UserList from "./components/UserList.vue";

export default {
  name: "Application",
  components: {
    // HelloWorld
    UserList,
  },
  data() {
    return {
      sharedName: ["srk-provide"],
    };
  },
  /* provide: {
    sharedName: "srk-provide",
  }, */
  provide() {
    return {
      sharedName: this.sharedName,
      alertEvent: this.alertEvent,
    };
  },

  methods: {
    alertEvent() {
      alert("hello");
    },
  },
  mounted() {
    setTimeout(() => {
      // console.log("--setTimeout", this.sharedName);
      this.sharedName.push(Math.random());
      // console.log("setTimeout--", this.sharedName);
    }, 3000);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
