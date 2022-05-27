<template>
  <div>
    <span>{{ $store.state.num }}</span>
    <h1>
      Welcome to post page Id = {{ $route.params.id }} by $route.params.id -
      динамичсеки определяет парметр id
    </h1>
    <form>
      <select multiple>
        <option v-for="(role, idx) of roles" :key="idx">
          {{ role }}
        </option>
      </select>
    </form>
    {{ user.roles }}
    <ul class="roles">
      <li v-for="(role, idx) of userRoles" :key="idx">
        <div>
          <div>{{ role }}</div>
          <div>X</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  methods: {
    ...mapMutations({
      setUser: "setUser",
    }),

    ...mapActions({
      fetchCurrentUser: "fetchCurrentUser",
      fetchRoles: "fetchRoles",
    }),
  },

  mounted() {
    this.fetchCurrentUser();
    this.fetchRoles();
  },

  computed: {
    ...mapState({
      user: (state) => state.user,
      roles: (state) => state.roles,
    }),
  },
};
</script>

<style scoped>
</style>