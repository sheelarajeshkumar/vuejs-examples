<template>
  <form @submit.prevent="addUser">
    <div class="bg-gray-200">
      <div class="border-2 rounded-lg">
        <label for="userId">UserId: </label>
        <input
          placeholder="id"
          id="userId"
          v-model="user.id"
          :disabled="true"
        />
      </div>
      <div class="border-2 rounded-lg">
        <label for="name">Name </label>
        <input placeholder="name" id="name" v-model="user.name" />
      </div>
      <div class="border-2 rounded-lg">
        <label for="phone">Phone </label>
        <input placeholder="phone" id="phone" v-model="user.phone" />
      </div>
      <div class="border-2 rounded-lg">
        <label for="fav"> fav </label>
        <input
          id="fav"
          placeholder="fav"
          v-model="user.isfav"
          type="checkbox"
        />
      </div>
      <div class="border-2 rounded-lg">
        <button
          type="submit"
          class="w-32 text-white bg-green-400 hover:bg-green-600 rounded-lg"
        >
          Add
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "add-user",
  data() {
    return {
      user: {
        id: Math.round(Math.random() * 1000000),
      },
    };
  },
  emits: ["add-new-user"],
  methods: {
    addUser() {
      //console.log(this.user);
      this.$emit("add-new-user", this.user);
      this.user = {};
    },
  },
};
</script>
