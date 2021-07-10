<template>
  <div class="container">
    <label class="text-blue-300 capitalize"> {{ sharedName }}</label>
    <h1 class="bg-gray-500 w-4/12 text-center font-bold text-white">
      {{ testName }}: {{ data.id }}
    </h1>
    <div class="bg-yellow-500 w-4/12 text-center">
      <label>{{ data.name }}</label>
      <label>{{ data.id }}</label>
      <label>{{ data.phone }} </label>
      <button @click="toggleFav(data.id)">emit fav {{ data.isfav }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-component",
  props: {
    data: {},
    testName: {
      required: true,
      type: String,
      default: "qwerty",
      validator: (value) => {
        console.log(value + " 88");
        return true;
      },
    },
  },
  emits: ["toggle-fav"],
  inject: ["sharedName"],
  created() {
    //console.log(this.data);
  },
  mounted() {
    console.log(this.sharedName);
    // this.sharedName = this.sharedName + " hhh";
    setTimeout(() => {
      // console.log("--setTimeout", this.sharedName);
      this.sharedName.push(Math.random());
      // console.log("setTimeout--", this.sharedName);
    }, 10000);
  },
  methods: {
    toggleFav(userId) {
      this.$emit("toggle-fav", userId);
    },
  },
};
</script>

<style lang="css">
.user {
  display: flex;
  width: 200px;
  height: 50px;
  background-color: yellow;
  color: red;
  justify-content: center;
  margin: 2px;
  border: 2px solid green;
  align-content: center;
  align-items: center;
}
.user:hover {
  background-color: red;
  color: yellow;
}
</style>
