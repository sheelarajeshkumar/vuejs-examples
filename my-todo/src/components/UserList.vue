<template>
  {{ fullText }}
  <add-user @add-new-user="addNewUser"></add-user>
  <div>
    <User
      v-for="(user, key) in users"
      :key="key"
      :data="user"
      test-name="srk"
      @toggle-fav="toggleFavEmit"
    />
    <button
      class="bg-yellow-600 text-white w-20 h-10 rounded hover:text-gray-500"
      @click="alertEvent"
    >
      Call Alert
    </button>
  </div>
</template>
<script>
import User from "./User.vue";
import AddUser from "./NewUser.vue";
export default {
  name: "user-list",
  components: {
    User,
    AddUser,
  },
  props: {
    msg: String,
  },

  inject: ["alertEvent"],
  methods: {
    addUser() {
      this.users.unshift(this.user);
      this.user = {};
    },
    addNewUser(pUser) {
      // console.log(pUser);
      this.users.unshift(pUser);
    },
    toggleFavEmit(id) {
      console.log("emit call" + id);
      this.users.forEach((user) => {
        if (user.id === id) {
          user.isfav = !user.isfav;
        }
      });
    },
  },
  data() {
    return {
      fullText: this.msg + " test",
      user: {},
      users: [
        {
          name: "rajesh",
          id: "321",
          phone: "123",
          isfav: true,
        },
        {
          name: "kumar",
          id: "123",
          phone: "123",
          isfav: false,
        },
      ],
    };
  },
};
</script>
