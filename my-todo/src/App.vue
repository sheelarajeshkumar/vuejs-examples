<template>
  <nav>
    <router-link to="/">
      <button
        class="bg-blue-300 active:bg-green-600 hover:bg-blue-600 rounded p-1 mx-2 text-white"
      >
        Home
      </button>
    </router-link>
    <router-link to="/app">
      <button
        class="bg-blue-300 active:bg-green-600 hover:bg-blue-600 rounded p-1 mx-2 text-white"
      >
        Application
      </button>
    </router-link>
    <button
      @click="navigateToApplication"
      class="bg-blue-300 active:bg-green-600 hover:bg-blue-600 rounded p-1 mx-2 text-white"
    >
      Navigate To Application
    </button>

    <!--  -->
    <button
      @click="navigateToApplicationWithParams"
      class="bg-blue-300 active:bg-green-600 hover:bg-blue-600 rounded p-1 mx-2 text-white"
    >
      Application with id
    </button>
    <router-link :to="'/app/' + Math.random() * 10000">
      <button
        class="bg-blue-300 active:bg-green-600 hover:bg-blue-600 rounded p-1 mx-2 text-white"
      >
        Application with id 2
      </button>
    </router-link>

    <router-link :to="'/app/props/' + Math.random() * 10000">
      <button
        class="bg-blue-300 active:bg-green-600 hover:bg-blue-600 rounded p-1 mx-2 text-white"
      >
        RouteParamsAsProps
      </button>
    </router-link>
  </nav>
  <router-view></router-view>
</template>
<script>
export default {
  methods: {
    navigateToApplication() {
      this.$router.push("/app");
    },
    navigateToApplicationWithParams() {
      this.$router.push("/app/" + Math.random() * 10000);
    },
  },
};
</script>
<style scoped>
/* .active {
  background-color: red;
} */
</style>
