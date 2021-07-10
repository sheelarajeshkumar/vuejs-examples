<template>{{ id }}</template>
<script>
export default {
  data() {
    return {
      id: [],
    };
  },
  methods: {
    setId(id) {
      this.id.unshift(id);
    },
  },
  created() {
    const route = this.$route.params;
    this.setId(route);
  },
  watch: {
    $route(newRoute) {
      // console.log(newRoute);
      const route = newRoute.params;
      this.setId(route);
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    next();
  },
};
</script>
