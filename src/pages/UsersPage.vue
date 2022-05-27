<template>
  <div>
    <span>roles: {{ roles }}</span>
    <users-list :users="users"></users-list>
  </div>
</template>

<script>
import UsersList from "@/components/UsersList.vue";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  components: {
    UsersList,
  },

  methods: {
    ...mapMutations({
      setUsers: "setUsers",
      setPage: "setPage",
      setTotalPages: "setTotalPages",
      setRoles: "setRoles"
    }),

    ...mapActions({
      fetchUsers: "fetchUsers",
      fetchRoles: "fetchRoles",
    }),
  },

  mounted() {
    this.fetchUsers()
    this.fetchRoles()
  },

  computed: {
    ...mapState({
      users: state => state.users,
      page: state => state.page,
      count: state => state.count,
      totalPages: state => state.totalPages,
      usersCount: state => state.usersCount,
      roles: state => state.roles
    }),
  },
};
</script>

<style scoped>
</style>